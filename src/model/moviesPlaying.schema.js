const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesPlayingSchema = new Schema({
  datePlaying: {
    type: Date,
    required: [true, 'ingredient name is required.'],
  }
});

module.exports = MoviesPlayingSchema;
