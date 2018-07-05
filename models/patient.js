const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const User = require('./user');

// User Schema
const PatientSchema = mongoose.Schema({
    document: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
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

const Patient = module.exports = mongoose.model('Patient', PatientSchema);

module.exports.getUserById = function (id, callback) {
    Patient.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    }
    Patient.findOne(query, callback);
}



/* *** PATIENT FUNCTIONS *** */

//Add patient
module.exports.addPatient = function (user, newPat, callback) {
    console.log("*** ADDING PATIENT... ***");
    console.log(newPat + "\n\n");
    var patient = {
      "document": newPat.document,
      "name": newPat.name,
      "lastName": newPat.lastName,
      "age": newPat.age
    };
    // console.log("***" , user , "***");
    user.patients.push(newPat);
    user.save(callback);
  }
  
  //Remove patient
  module.exports.removePatient = function (user, body, callback) {
    console.log("*** REMOVING PATIENT... ***");
  
    User.update({
      email: user.email
    }, {
      $pull: {
        "patients": {
          "document": body.id
        }
      }
    }, callback);
  
  }
  
  //Update patient
  module.exports.updatePatient = function (user, body, callback) {
    console.log("*** UPDATING PATIENT called *** " + body.id);
    

    var index = user.patients.findIndex(function (item, i) {
        return item.document === body.id
    });
    var recordsArray = ('patients.' + index + '.records');

    //Thanks to @lineus for helping out with this part
    const key = `patients.${index}`;
    const cond = {
        email: user.email
    };
    console.log(cond.email + " \n\n")

    console.log("records ***" + body.records)
    let updt = {};
    updt = { $set: {} };
    updt.$set[key] = {"name": body.name,"lastName": body.lastName,"document": body.newId,"age": body.age , "records": body.records};
    User.update(cond, updt, callback);
/*     User.update({
        email: user.email
      }, {
        $set: {
          "patients.1": {
            "document": body.id
          }
        }
      }, callback); */
  }

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}


/* *** RECORD FUNCTIONS *** */

//Add Record
module.exports.addRecord = function (user, body ,callback) {
    /*
      Because of not-so-smart schema design and Mongo limitations,
      we need to get the index of the 'Patient' element in 
      order to get the "Records" array from it.
    */
    var index = user.patients.findIndex(function (item, i) {
        return item.document === body.id
    });
    var recordsArray = ('patients.' + index + '.records');

    //Thanks to @lineus for helping out with this part
    const key = `patients.${index}.records`;
    console.log("*** ADDING RECORD TO : ", index, "*** in ", user.email + " *** of document "+ body.id);
    const cond = {
        email: user.email
    };
    console.log(cond.email + " \n\n")

   // var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let updt = {};
    updt = { $push: {} };
    updt.$push[key] = { "id": mongoose.Types.ObjectId(), "bpm": body.bpm, "sys":body.sys , "dias" : body.dias , "date": body.date};

    User.update(cond, updt, callback);
}


  //Remove Record
module.exports.removeRecord = function (user, body ,callback) {
    /*
      Because of not-so-smart schema design and Mongo limitations,
      we need to get the index of the 'Patient' element in 
      order to get the "Records" array from it.
    */
    var index = user.patients.findIndex(function (item, i) {
        return item.document === body.id
    });
    var recordsArray = ('patients.' + index + '.records');

    //Thanks to @lineus for helping out with this part
    const key = `patients.${index}.records`;
    console.log("*** REMOVING RECORD FROM : ", index, "*** in ", user.email);
    const cond = {
        email: user.email
    };
    console.log("obid is: " + body._id.$oid + " \n\n" )

    let updt = {};
    updt = { $pull: {} };
    updt.$pull[key] = {"_id" : body._id.$oid};
   /* if (action ==1) {
        updt = { $push: {} };
        updt.$push[key] = { "bpm": 5 };
    } else if (action ==2) {
        updt = { $set: {} };
        updt.$set[key] = { "bpm": 5 };
    } else if (action ==3) {
        updt = { $pull: {} };
        updt.$pull[key] = { "bpm": 5 };
    }*/
    User.update(cond, updt, callback);
}
  
//edit record
module.exports.editRecord = function (user, body ,callback) {
    /*
      Because of not-so-smart schema design and Mongo limitations,
      we need to get the index of the 'Patient' element in 
      order to get the "Records" array from it.
    */
    var index = user.patients.findIndex(function (item, i) {
        return item.document === body.id
    });
    console.log("\n document is: " + body.id + "\n\n")
    var recordsArray = ('patients.' + index + '.records');

    //Thanks to @lineus for helping out with this part
    const key = `patients.${index}.records`;
    console.log("*** UPDATING RECORD FROM : ", index, "*** in ", user.email);
    const cond = {
        email: user.email
    };
    console.log(cond.email + " \n\n")

    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let updt = {};
    updt = { $set: {} };
    updt.$set[key] = {"bpm": body.bpm};
   /* if (action ==1) {
        updt = { $push: {} };
        updt.$push[key] = { "bpm": 5 };
    } else if (action ==2) {
        updt = { $set: {} };
        updt.$set[key] = { "bpm": 5 };
    } else if (action ==3) {
        updt = { $pull: {} };
        updt.$pull[key] = { "bpm": 5 };
    }*/
    User.update(cond, updt, callback);
}