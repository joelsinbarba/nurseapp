const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Patient = require('../models/patient');



// Register
router.post('/register', (req, res, next) => {
  console.log('llea')
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  User.getUserByUsername(req.body.email, (err, user) => {
    if (err) throw err;
    if (user) {
      return res.json({
        success: false,
        msg: 'This email is already registered'
      });
    }else{
      User.addUser(newUser, (err, user) => {
        if(err) {
          res.json({success: false, msg: 'Failed to register user'});
        } else {
          res.json({success: true, msg: 'You are registered and can now login'});
        }
      });
    }
  });
});


// PatientLOgin
router.post('/patientLogin', (req, res, next) => {
  const doc = req.body.document;
  User.getPatientLog(doc, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }else{
      tmp = null;
     user.forEach(element => {
        console.log("***  " + element.name + "  ***");
        ptnts = element.patients;
        ptnts.forEach(x => {
          console.log(x.name);
          if(x.document == doc){
            tmp = x;
            //return res.json({success: true, msg: 'Welcome'});
          }
          
        });
      }); 

      if(!tmp){
        return res.json({success: false, msg: "Patient not found"});
      }else{
        return res.json({success: true, msg: "Welcome" , tmp});;
      }
    }
  });
});

function custom_sort(a, b) {
  return new Date(a.lastUpdated).getFullYear() - new Date(b.lastUpdated).getUTCFullYear();
}

var date_sort_desc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // DESCENDING order.
  console.log("***" +date1.date + " *** "+date2 )
  if (date1.date > date2.date) return -1;
  if (date1.date < date2.date) return 1;
  return 0;
};


// PatientLOgin
router.post('/home', (req, res, next) => {
  const email = req.body.email;
  array = [];
  User.getPatientLog(email, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }else{
     user.forEach(element => {
        //console.log("***  " + element.name + "  ***");
        ptnts = element.patients;
        ptnts.forEach(x => {
          rcrds = x.records
          rcrds.forEach(r => {
            console.log("email = " + email + "*** user.email = " + element.email + "  document =  "+x.document  + "\n\n" )
           // console.log(r.date);
           //r= x.document;
           r = {
            "_id": x._id,
            "date": r.date,
            "dias": r.dias,
            "sys": r.sys,
            "bpm": r.bpm,
            "patientName" : x.name,
            "patientDoc": x.document
           }
           if(email==element.email){
            array.push(r);
           }
          });

          
        });
      }); 
      array.sort(date_sort_desc);
      console.log(array);


      if(array.lenght == 0){
        return res.json({success: false, msg: "Patient not found"});
      }else{
        return res.json({success: true, msg: "Welcome" , array});;
      }
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByUsername(email, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});


// Profile
router.post('/getUser'/*, passport.authenticate('jwt', {session:false})*/, (req, res, next) => {
   const email = req.body.email;
  User.getUserByUsername(email, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }
    return res.json({success: true, user});
    
  });
});

//PATIENT FUNCTIONS

// Addpatient
router.post('/newpatient', (req, res, next) => {
  let newPat = new Patient({
    name: req.body.name,
    lastName: req.body.lastName,
    document: req.body.id,
    age: req.body.age,
  });
  console.log(newPat.lastName + "\n\n\n")
  console.log(newPat)
  //console.log("Pea:" , req.body.user);
  User.getUserByUsername(req.body.email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      //return res.json({success: true, theUser: user.name , Patients: user.patients});
      Patient.addPatient(user, newPat, (err, user) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Failed to register patient'
          });
        } else {
          res.json({
            success: true,
            msg: 'Patient registered'
          });
        }
      });
    }
  });
});


// Addpatient
router.post('/removepatient', (req, res, next) => {
  //console.log("Pea:" , req.body.user);
  User.getUserByUsername(req.body.email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      //return res.json({success: true, theUser: user.name , Patients: user.patients});
      Patient.removePatient(user, req.body, (err, user) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Failed to remove patient'
          });
        } else {
          res.json({
            success: true,
            msg: 'Patient removed'
          });
        }
      });
    }
  });
});

// Update patient
router.post('/updatepatient', (req, res, next) => {
  User.getUserByUsername(req.body.email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      //return res.json({success: true, theUser: user.name , Patients: user.patients});
      Patient.updatePatient(user, req.body, (err, user) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Failed to update patient'
          });
        } else {
          res.json({
            success: true,
            msg: 'Patient updated'
          });
        }
      });
    }
  });
});


/*** RECORDS ***/
// AddRecord
router.post('/newrecord', (req, res, next) => {
  console.log("About to add record")
  console.log("\n\nPea:" , req.body.email);
  User.getUserByUsername(req.body.email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      console.log("Digging up")
      //return res.json({success: true, theUser: user.name , Patients: user.patients});
      Patient.addRecord(user, req.body, (err, user) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Failed to save record'
          });
        } else {
          res.json({
            success: true,
            msg: 'Record saved'
          });
        }
      });
    }
  });
});

// removerecord
router.post('/removerecord', (req, res, next) => {
  //console.log("Pea:" , req.body.user);
  User.getUserByUsername(req.body.email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      //return res.json({success: true, theUser: user.name , Patients: user.patients});
      Patient.removeRecord(user, req.body, (err, user) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Failed to remove record'
          });
        } else {
          res.json({
            success: true,
            msg: 'Record removed'
          });
        }
      });
    }
  });
});

// removerecord
router.post('/editrecord', (req, res, next) => {
  //console.log("Pea:" , req.body.user);
  User.getUserByUsername(req.body.email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    } else {
      //return res.json({success: true, theUser: user.name , Patients: user.patients});
      Patient.editRecord(user, req.body, (err, user) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Failed to update record'
          });
        } else {
          res.json({
            success: true,
            msg: 'Record updated'
          });
        }
      });
    }
  });
});

module.exports = router;