const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const patientSchema = mongoose.Schema ({
  document: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName : {
    type: String
  },
  age: {
    type: Number
  },
  records: [{
    bpm: Number,
    sys: Number,
    dias: Number,
    date: Date
  }]
});


// User Schema
const UserSchema = mongoose.Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  patients: [patientSchema]
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getPatientLog = function(id, callback) {
  User.find({}, callback);
}

module.exports.getUserByUsername = function(email, callback) {
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
