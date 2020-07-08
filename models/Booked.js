const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booked = {
  berth: {
    type: String,
    required: true,
  },
  ship_name: {
    type: String,
    required: false,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  bunkers: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
};

const BookedSchema = new Schema(booked);

module.exports = mongoose.model('booked', BookedSchema);
