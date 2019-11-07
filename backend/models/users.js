var mongoose = require('mongoose');

// Creation of a new schema for our cities
var userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email:String,
  password:String,
  token:String,
  salt : String,
});

// Creation of a new model for our cities
var userModel = mongoose.model('users', userSchema);

module.exports = userModel;
