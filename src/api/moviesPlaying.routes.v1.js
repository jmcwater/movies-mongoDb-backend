var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var MoviesPlaying = require('../model/moviesPlaying.model');

//
// Lijst van alle movies
//
routes.get('/movies-playing', function(req, res) {
  res.contentType('application/json');
  MoviesPlaying.find({})
    .then((MoviesPlaying) => {
      res.status(200).json(MoviesPlaying);
    })
    .catch((error) => res.status(400).json(error));
});


//
// movies op een bepaalde datum ophalen
//
routes.get('/movies-playing/:datePlaying', function(req, res) {
    res.contentType('application/json');
    var query = { datePlaying: req.params.datePlaying };
  
    MoviesPlaying.find(query)
      .then((moviesPlaying) => {
        res.status(200).json(moviesPlaying);
      })
      .catch((error) => res.status(400).json(error));
  });

//
// Toevoegen van een datum met film
//
routes.post('/movies-playing/new', function(req, res) {
  res.contentType('application/json');

  let moviesPlaying = new MoviesPlaying(req.body);

  moviesPlaying.save()
    .then((moviesPlaying) => {
      res.status(200).json(moviesPlaying);
    })
    .catch((error) => res.status(400).json(error));
});

//
// Verwijderen van een recept
//
routes.delete('/movies-playing/:datePlaying', function(req, res) {
  res.contentType('application/json');

  let datePlaying = req.params.datePlaying;

  MoviesPlaying.findOneAndRemove({datePlaying: datePlaying})
    .then((moviesPlaying) => {
      res.status(200).json(moviesPlaying);
    })
    .catch((error) => res.status(400).json(error));
  });

//
// Wijzigen van een recept
//
  routes.put('/movies-playing/:datePlaying', function(req, res) {
    res.contentType('application/json');

    let datePlaying = req.params.datePlaying;
    let updatedMovie = req.body;

    moviesPlaying.findOneAndUpdate({datePlaying: datePlaying}, updatedMovie)
    .then((moviesPlaying) => {
      res.status(200).json(moviesPlaying);
    })
      .catch((error) => res.status(400).json(error));
    });

module.exports = routes;
