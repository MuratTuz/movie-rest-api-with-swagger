const express = require('express');
const router = express.Router();

const service = require('../services/rents-service');

router.get('/', function(req, res, next) {
  //#swagger.tags = ['Rent']
  //#swagger.description = 'GET all rents'
  const rents = service.getAllRents();
  res.send(rents);
});

router.post('/', function(req, res, next) {
  //#swagger.tags = ['Rent']
  //#swagger.description = 'POST a rent'
  const newRent = req.body;
  service.createRent(newRent);
  res.sendStatus(200).send(newRent);
});

router.delete('/:id', function(req, res, next) {
  //#swagger.tags = ['Rent']
  //#swagger.description = 'DELETE a rent by id '
  const id = Number(req.params.id);
  const newRents = service.deleteRentById(id);
  if (newRents) res.status(200).send(newRents);
  else res.sendStatus(404);
});

module.exports = router;