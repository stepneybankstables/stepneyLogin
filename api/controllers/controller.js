'use strict';


const mongoose = require('mongoose'),
  Login = mongoose.model('Logins');

module.exports.getLogins = function(req, res) {
  Login.find({}, function(err, login) {
    if (err)
      res.send(err);
    res.json(login);
  });
};

module.exports.createLogin = function(req, res) {
  const newLogin = new Login(req.body);
  newLogin.save(function(err, login) {
    if (err)
      res.send(err);
    res.json(login);
  });
};