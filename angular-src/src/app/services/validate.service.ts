import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateLogin(user) {
    if(user.email == undefined || user.password == undefined ) {
      /* if(user.name.replace(/\s/g, '') == "" || user.email.replace(/\s/g, '') == "" || user.password.replace(/\s/g, '') == "" ) { */
        return false;
    } else {
      return true;
    }
  }


  validateRegister(user) {
    if(user.name == undefined || user.email == undefined || user.password == undefined) {
      /* if(user.name.replace(/\s/g, '') == "" || user.email.replace(/\s/g, '') == "" || user.password.replace(/\s/g, '') == "" ) { */
        return false;
    } else {
      return true;
    }
  }

  validatePatient(pat) {
    if(pat.name == undefined || pat.lastName == undefined || pat.id == undefined || pat.age == undefined) {
        return false;
    } else {
      return true;
    }
    
  }

  validatePatientEdit(pat) {
    //console.log(pat.lastName)
   /*  if(pat.name.replace(/\s/g, '') == "" || pat.lastName.replace(/\s/g, '') == "" || pat.newId == undefined || pat.age == undefined) { */
      if(pat.name == undefined || pat.lastName == undefined || pat.newId == undefined || pat.age == undefined) {
        return false;
    } else {
      return true;
    }
  }

  validateRecord(rec) {
    if(rec.bpm == undefined || rec.sys == undefined || rec.dias == undefined)  {
        return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
