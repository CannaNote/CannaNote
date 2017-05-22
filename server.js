const express = require('express');
const server = express();

const PORT = process.env.PORT || 4200;
const knex = require('./src/server/knex');

server.get('/test', (req, res) => {
  res.send('server responding');
})

server.listen(PORT, () => {
  console.log('CannaNote server listening on port', PORT);
})
