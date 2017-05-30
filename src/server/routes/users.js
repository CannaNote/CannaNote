//Dependencies
const express = require('express');
const router = express.Router();

const knex = require('../knex');

//Middleware
const BodyParser = require('body-parser');
router.use(BodyParser.json());

const bcrypt = require('bcrypt');

//User Routes

router.post('/users/new', (req, res) => {
  var {name, email, password, profileUrl} = req.body;

  var passwordHash = bcrypt.hashSync(password, 10)

  var newUser = {
    name,
    email,
    password: passwordHash,
    profileUrl
  }

  res.send(newUser)
})

module.exports = router;
