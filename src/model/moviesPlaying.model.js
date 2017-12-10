const mongoose = require('mongoose');
const MoviesPlayingSchema = require('./moviesPlaying.schema');
const movieSchema = require('./movie.schema');

const MoviesPlaying = mongoose.model('moviesPlaying', MoviesPlayingSchema);

module.exports = MoviesPlaying;