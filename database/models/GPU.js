const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const db = require('../index.js');

mongoose.Promise = global.Promise;

const GPUSchema = new mongoose.Schema({

  cardId: { type: Number, index: true, unique: true },
  brand: String,
  model: String,
  launch: Date,
  codeName: String,
  processor: String,
  transistors: Number,
  busInterface: String,
  L2: Number,
  clock: {
    base: Number,
    boost: Number,
    mem: Number,
  },
  memory: {
    size: Number,
    bandwidth: Number,
    busType: String,
    busWidth: Number,
  },
  fillRate: {
    pixel: Number,
    texture: Number,
  },
  processing: {
    single: Number,
    double: Number,
    half: Number,
  },
  TDP: {
    retail: Number,
    custom: Number,
  },
  NVLink: {
    has: Boolean,
    type: String,
  },
  ReleasePrice: Number,
});

const GPU = mongoose.model('GPU', GPUSchema);

module.exports = GPU;
