const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/crypto';

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = db;
