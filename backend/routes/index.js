var express = require('express');
var router = express.Router();
var uid2 = require("uid2");
var salt= uid2(32);
var userModel = require('../models/users')
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");

/* GET home page. */
router.get('/signin', function(req, res, next) {
console.log(req.query)
  userModel.findOne({email : req.query.email}, function(err,data){
    console.log(hash);

    if (!data) {
      res.json({ isUserExist : false });
    } else  {
      var hash = SHA256(req.query.password + data.salt).toString(encBase64);
      if (hash === data.password ) {
        res.json({ isUserExist : true, data });
      } else {
        res.json({ isUserExist : false });
      }
    }

  })

});
/* GET home page. */
router.post('/signup', function(req, res, next) {
console.log(req.body)
  var user = new userModel({
    firstname: req.body.firstname.trim(),
    lastname:  req.body.lastname.trim(),
    email: req.body.email.trim(),
    salt : salt,
    password: SHA256(req.body.password.trim() + salt).toString(encBase64),
    token: uid2(32),
  })

  user.save((err, userok) => {
    console.log(userok)
    res.json( { userok })
  });

});


module.exports = router;
