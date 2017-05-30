//Dependencies
const express = require('express');
const router = express.Router();

const knex = require('../knex');

//Middleware
const BodyParser = require('body-parser');
router.use(BodyParser.json());

//User Routes

router.post('/users/new', (req, res) => {
  res.send(req.body.name);
})

module.exports = router;
