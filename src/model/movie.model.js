const mongoose = require('mongoose');
const TheatreSchema = require('./Theatre.schema');
const MoviesPlayingSchema = require('./moviesPlaying.schema');
const MovieSchema = require('./movie.schema');
const Schema = mongoose.Schema;

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;
