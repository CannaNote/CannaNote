//Dependancies

const express = require('express');
const server = express();

const PORT = process.env.PORT || 4200;
const knex = require('./src/server/knex');

//Middleware
const users = require('./src/server/routes/users');
const journals = require('./src/server/routes/journals');
const strains = require('./src/server/routes/strains');
server.use('/api', users);
server.use('/api', journals);
server.use('/api', strains);


//Base Routes
server.get('/test', (req, res) => {
  res.send('server responding');
})

server.listen(PORT, () => {
  console.log('CannaNote server listening on port', PORT);
})
