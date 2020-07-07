const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vessel = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  length: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  depth: {
    type: String,
    required: true,
  },
  operator: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
};

const VesselSchema = new Schema(vessel);

module.exports = mongoose.model('vessels', VesselSchema);
