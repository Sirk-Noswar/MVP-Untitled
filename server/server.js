const express = require('express');
const path = require('path');
const compression = require('compression');
const GPU = require('../database/models/GPU');
// const db = require('../database');

const app = express();
app.use(compression());
const PORT = 3013;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(PUBLIC_DIR));

app.use((req, res, next) => {
  console.log(`${req.method} request coming in for ${req.url}`);
  next();
});

app.get('/api/GPUs/', (req, res) => {
  // const cryptoId = req.params;
  GPU.find()
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
