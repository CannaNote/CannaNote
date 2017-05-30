//Dependencies
const express = require('express');
const router = express.Router();

const knex = require('../knex');

//Journal Routes

router.get('/journals/test', (req, res) => {
  res.send('journals routes functioning')
})

module.exports = router;
