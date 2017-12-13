var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Theatre = require('../model/theatre.model');

//
// Lijst van alle theatres
//
routes.get('/theatres', function(req, res) {
  res.contentType('application/json');
  Theatre.find({})
    .then((theatre) => {
      res.status(200).json(theatre);
    })
    .catch((error) => res.status(400).json(error));
});

//
// één theatre ophalen op naam
//
routes.get('/theatres/:theatres', function(req, res) {
  res.contentType('application/json');
  var query = { theatre: req.params.theatres };

  Theatre.find(query)
    .then((theatre) => {
      res.status(200).json(theatre);
    })
    .catch((error) => res.status(400).json(error));
});

//
// Toevoegen van een theatre
//
routes.post('/theatres/new', function(req, res) {
  res.contentType('application/json');

  let theatre = new Theatre(req.body);

  theatre.save()
    .then((theatre) => {
      res.status(200).json(theatre);
    })
    .catch((error) => res.status(400).json(error));
});

//
// Verwijderen van een theatre
//
routes.delete('/theatres/:theatres', function(req, res) {
  res.contentType('application/json');

  let theatreName = req.params.theatres;

  Theatre.findOneAndRemove({theatres: theatreName})
    .then((theatre) => {
      res.status(200).json(theatre);
    })
    .catch((error) => res.status(400).json(error));
  });

//
// Wijzigen van een theatre
//
  routes.put('/theatres/:theatres', function(req, res) {
    res.contentType('application/json');

    let theatreName = req.params.theatres;
    let updatedTheatre = req.body;

    Theatre.findOneAndUpdate({theatres: theatreName}, updatedTheatre)
    .then((theatre) => {
      res.status(200).json(theatre);
    })
      .catch((error) => res.status(400).json(error));
    });

module.exports = routes;
