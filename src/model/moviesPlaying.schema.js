const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TheatreSchema = require('./theatre.schema');
const movieSchema = require('./movie.schema');

const MoviesPlayingSchema = new Schema({
  datePlaying: {
    type: String,
    required: [true, 'dateplaying is required.'],
  },
  timePlaying: {
    type: String,
    // required: [true, 'timeplaying is required.'],
  },
  movie: {
    type: [movieSchema],
  } 
});

module.exports = MoviesPlayingSchema;
