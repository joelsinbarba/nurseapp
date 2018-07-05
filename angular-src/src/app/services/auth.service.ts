import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';
import { HttpParams } from '@angular/common/http';

declare var jquery: any;
declare var $: any;

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  email: any;


  constructor(private http: Http) {
    //this.isDev = true;  // Change to false before deployment
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }

  getProfile() {
    //console.log(localStorage);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //console.log(this.http.post('users/profile', { headers: headers }) );
    return this.http.get('users/profile', { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('email', user.email);
    //console.log(localStorage);
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    //console.log("authToken: " + this.authToken);
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    this.email = null;
    localStorage.clear();
  }

/* ADDED FUNCTIONS */
genericPost(url,user) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(url, user, { headers: headers })
    .map(res => res.json());
}

/* 

  getpatients(email) : Object{
    console.log("using *** " + email + " ***")
    if (email) {
      var settings = {
        "crossDomain": true,
        "url": "/users/getUser",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "264224ab-8152-6e86-0f7d-60416beb22f8"
        },
        "processData": false,
        "data": "{\n\t\"email\": \"" + email + "\"\n}"
      }

      $.ajax(settings).done(function (response) {
        console.log(localStorage);
        console.log("response pats: " + response.user.patients);
        this.patients = response.user.patients;
        this.patients.forEach(element => {
          console.log(element.name);
        });
        return this.patients;
       // console.log("The patients are : \n\n" + this.patients); 
      });

    } else {
      
      console.error("Could not get patients");
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('users/register', "user", { headers: headers })
        .map(res => res.json());
    }

  } */


  
}
