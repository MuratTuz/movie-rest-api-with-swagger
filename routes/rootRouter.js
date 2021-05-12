


const express = require('express');
const router = express.Router();

const moviesRouter = require('./moviesRouter');
const rentsRouter = require('./rentsRouter');


router.use('/movies', moviesRouter);
router.use('/rents', rentsRouter);


module.exports = router;