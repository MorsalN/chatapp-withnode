const express = require('express');
const router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('user'); // this is rendering or calling the user.ejs from the views folder 
});

module.exports = router;