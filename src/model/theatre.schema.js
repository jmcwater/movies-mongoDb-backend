const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TheatreSchema = new Schema({
  theatres: {
    type: String,
    required: [true, 'Theatre name is required.']
  },
  city: {
    type: String,
    required: [true, 'City is required.']
  }
});

module.exports = TheatreSchema;