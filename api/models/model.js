'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LoginSchema = new Schema({
  name: {
    type: String,
    Required: 'Please enter your name'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Logins', LoginSchema);
