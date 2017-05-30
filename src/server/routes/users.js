//Dependencies
const express = require('express');
const router = express.Router();

const knex = require('../knex');

//Middleware
const BodyParser = require('body-parser');
router.use(BodyParser.json());

const bcrypt = require('bcrypt');

//User Routes

//Register a new user
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
      console.log('user already found');
      res.send('An account using that email already exists')
    }else{
      console.log('Creating new account');
      //Insert new user into the database
      //!Further checking needed for production build!
      knex('users')
      .insert(newUser, "*")
      .then((userData) => {
        res.send(userData[0])
      })
    }
  })
})

router.get('/users/login', (req, res) => {
  var {email, password} = req.body;

  if(email && password) {
    //Get users hashed password
    knex('users')
    .where('email', email)
    .then((userData) => {
      if(userData.length > 0) {
        userData = userData[0];

        //compare passwords
        if(bcrypt.compareSync(password, userData.password)){
          res.send(userData)
        }else{
          res.send('incorrect password')
        }
      }else{
        //Response if no user
        res.send('No user with that email found')
      }
    })
  }
})

module.exports = router;
