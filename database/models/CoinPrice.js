const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
const db = require('../index.js');

mongoose.Promise = global.Promise;

const CoinPriceSchema = new mongoose.Schema({


});

const Coin = mongoose.model('Coin', CoinPriceSchema);

module.exports = Coin;
