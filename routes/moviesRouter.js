const express = require('express');
const router = express.Router();

const service = require('../services/movies-service');

router.get('/', function(req, res, next) {
  //#swagger.tags = ['Movie']
  //#swagger.description = 'GET all movies'
  const moviesList = service.getAllMovies();

  if (moviesList) {
    /*
    #swagger.responses[200] = {
     schema: { $ref: '#/definitions/Movies' },
     description: 'All movies'
    }
   */
    res.send(moviesList)
  }
  // #swagger.responses[404]
  else res.sendStatus(404);
  
});

router.get('/:id', function (req, res, next) {
  //#swagger.tags = ['Movie']
  //#swagger.description = 'GET movie by id'
  const id = Number(req.params.id);
  const movie = service.getMovieById(id);

  if (movie) {
    /*
    #swagger.responses[200] = {
     schema: { $ref: '#/definitions/Movie' },
     description: 'Movie requested by id'
    }
   */
    res.send(movie)
  }
  // #swagger.responses[404]
  else res.sendStatus(404);
});

router.post('/', function (req, res, next) {
  //#swagger.tags = ['Movie']
  //#swagger.description = 'Create new movie'
  const newMovie = req.body;
  const result = service.createMovie(newMovie);
  /* 
  #swagger.parameters['newMovie'] = {
      in: 'body',
      description: "New movie data",
      required: true,
      type: 'object',
      schema: { $ref: "#/definitions/Movie" }
    } 
  */
  if (result){   
    /*
    #swagger.responses[201] = {
     schema: { $ref: '#/definitions/Movie' },
     description: 'New created movie'
    }
   */ 
  res.status(201).send(newMovie);
  }
  // #swagger.responses[500]
  else res.sendStatus(500);
});

router.put('/:id', function (req, res, next) {
  //#swagger.tags = ['Movie']
  //#swagger.description = 'Update a movie'
  const updatedMovieId = Number(req.params.id);
  const updatedMovieBody = req.body;
    /* 
    #swagger.parameters['newMovie'] = {
      in: 'body',
      description: 'New data for updating an existed movie',
      required: true,
      type: 'object',
      schema: { $ref: "#/definitions/Movie" }
    } 
  */
  const updatedMovie = service.updateMovieById(updatedMovieId, updatedMovieBody);
  /*
  #swagger.responses[201] = {
    schema: { $ref: '#/definitions/Movie' },
    description: 'Updated movie'
  }
  */ 
  if (updatedMovie) res.status(201).send(updatedMovie)
  // #swagger.responses[404]
  else res.sendStatus(404);
});

router.delete('/:id', function (req, res, next) {
  //#swagger.tags = ['Movie']
  //#swagger.description = 'DELETE a movie by id '
  const id = Number(req.params.id);
  const result = service.deleteMovieById(id);
  // #swagger.responses[200]
  // #swagger.description = 'The movie is deleted'
  if (result) res.status(200)
  // #swagger.responses[404]
  else res.sendStatus(404);
});

module.exports = router;