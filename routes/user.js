const express = require('express');
const router = express.Router();
const User = require('../models/User');

// router.get('/login', function(req, res, next) {
//   res.render('user'); // this is rendering or calling the user.ejs from the views folder 
// });

router.get('/login', function(req, res, next) {
  res.render('user');
});

router.get('/register', function(req, res, next) {
  res.render('register'); //this is calling the register.ejs from the views folder
});

router.get('/chats', function(req, res, next) {
  res.render('chats'); //this is calling the chats.ejs from the views folder
});


router.post('/login', function (req, res, next) {
  //expect username password
  console.log('This is what we received from the client:', req.body)
  User.findOne(req.body)
  .then((user) => {
    if (user) {
      if (req.body.psw === user.password) {
        // res.send(200, user);
        res.redirect("/user/chats")
      } else {
        res.send(400, {err: 'Incorrect password'});
      }
    } else {
      console.log(user);
      res.send(400, {err: 'No User'});
    }
  })
  .catch((err) => {
    console.log(err);
    res.send(500, err);
  });
});


router.post('/register', function (req, res, next) {
  console.log("43:", req.body)
  User.findOne(req.body)
  .then((user) => {
    if (user) {
      res.sendStatus(400, {err: 'Username already exists'});
    } else {
      return User.create(req.body);
    }
  })
  .then((user) => {
    console.log('created a user');
    // res.send(201, {success: 'Created new user'});
    res.redirect("/user/chats");
  })
  .catch((err) => {
    res.send(500, err);
    console.log('testing')
  });
});



// Wildcard route - this says that if the site extention (user/login) is something other than mentioned above (ex. router.get('/login') then bring the person back to the main homepage)
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Chat App' });
});

module.exports = router;