const express = require('express');
const path = require('path');
const compression = require('compression');
const Crypto = require('../database/crypto');

const app = express();
app.use(compression());
const PORT = 1313;
const PUBLIC_DIR = path.resolve(__dirname, 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`);
  next();
});

app.use(express.static(PUBLIC_DIR));

app.get('/api/crypto/', (req, res) => {
  const cryptoId = req.params;
  Crypto.find(cryptoId)
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});
