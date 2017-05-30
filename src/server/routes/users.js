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

  knex('users')
  .where('email', req.body.email)
  .then((dataCheck) => {
    //Check to see if email already exists
    if(dataCheck.length > 0){
      res.send('An account using that email already exists')
    }else{
      console.log('Creating new account');

      knex('users')
      .insert(newUser, "*")
      .then((userData) => {
        res.send(userData[0])
      })
    }
  })

})

module.exports = router;
