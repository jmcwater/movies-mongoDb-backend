const mongoose = require('mongoose');
const TheatreSchema = require('./theatre.schema');
const MoviesPlayingSchema = require('./moviesPlaying.schema');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is required.'],
    unique: true,
  },
  genre: {
    type: String,
    required: [true, 'genre is required.'],
  },
  description: {
    type: String,
    validate: {
      validator: (description) => description.length < 300,
      message: 'description max length is 300 characters.'
    },
    required: [true, 'description is required.'],
  },
  imagePath: {
    type: String
  },
  datePlaying: {
    type: [MoviesPlayingSchema],
    required: [true, 'datePlaying is required']
  },
  theatres: {
    type: [TheatreSchema],
    // required: [true, 'ingredients are required.']
  }
});

module.exports = MovieSchema;