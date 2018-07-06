import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Chart } from 'chart.js';
import { debug } from 'util';
import { timeout } from 'q';
//npm install --save chart.js && npm install --save-dev @types/chartjs


declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  name = "";
  patient = {
    document: "document",
    name: "name",
    lastName: "lastName",
    _id: "xx",
    age: 12,
    records: [],
  }; // : any;
  message2 = "";
  patients: any[];
  filteredItems: any[];
  searchTerm = '';
  chart = [];
  isNurse: boolean = true;
  welcome: boolean = false;
  signUp: boolean = false;
  email: "email";
  password: String;
  posts: any;
  user: Object;

  //patient
  patId: String;
  patName: String;
  patLastName: String;
  patAge: String;
  //endpatient

  recordsLenght: number;
  historicalLenght: number;

  //record
  diasField: number;
  sysField: number;
  bpmField: number;
  dateField :any;
  //endrecord

  deleteState: number;

  confirmationPendient: boolean = false;
  alreadySentForm: boolean = false;

  oid: "";
  canSubmit: boolean = false;
  canChart: boolean = false;
  isLoading: boolean = true;
  isLoading2: boolean = true;

  logIDnum: number;

  historical = [];



  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private flashMessage: FlashMessagesService) { }

  clicked(event) {
    var $tab = $((event.currentTarget)),
      href = $tab.attr('href');

    $('.active').removeClass('active');
    $tab.addClass('active');
    //console.log($tab);

    $('.show1')
      .removeClass('show1')
      .addClass('hide')
      .hide();

    $(href)
      .removeClass('hide')
      .addClass('show1')
      .hide()
      .fadeIn(550);


    this.message2 = '';
    /*var href = $(event.currentTarget).attr('href');
    href = $(event.currentTarget).attr('href');
    $(href)
      .removeClass('show')
      .addClass('show')
      .hide()
      .fadeIn(550);*/

    //var href = $event.target.data('href');
    //href.classList.remove('hide');
    //href.classList.add('show1');
    //event.target.classList.add('class3'); // To ADD
    //event.target.classList.remove('class1'); // To Remove
    //event.target.classList.contains('class2'); // To check
    //event.target.classList.toggle('class4'); // To toggle
  }

  onClickedPatient(document) {
    //alert(document);
    console.log(document)
    this.patients.forEach(element => {
      if (element._id == document) {
        /*alert(element.name)*/
        this.canChart = false;
        this.patient = element
        this.updateChart(this.patient);
        //console.log($("#wd").scrollTop)
        $("#wd").animate({ scrollTop: -100 }, "fast");
      }
    });
  }

  clickedOkay(event) {

    $('#notifier')
      .removeClass('show')

    if (this.confirmationPendient && this.isNurse) {
      window.location.reload();
      this.confirmationPendient = false;
    } else if (this.confirmationPendient && !this.isNurse) {
      //window.location.reload();
      this.confirmationPendient = false;
    }
  }

  ngAfterViewInit() {

    this.authService.getProfile().subscribe(profile => {
      //console.log("profile is *** " + profile)
      this.user = profile.user;
      this.name = profile.user.name;
      this.email = profile.user.email;
      this.patients = profile.user.patients;
      this.search();


      const settings = {
        email: this.email,
      }

      this.authService.genericPost('users/home', settings).subscribe(data => {
        if (data.success) {
          //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
          //this.router.navigate(['/login']);
          this.newclass();
        //console.log(data.array)
        this.historical = data.array;
        this.historicalLenght = this.historical.length;
        } else {
          
        }
      });
      //console.log("res1 *** " + profile.user.patients[1].name)
    },
      err => {
        this.welcome = true;
        //console.log(err);
        return false;
      });
      

  }

  onTimeOut() {
    var ctx = document.getElementById('canvas');
    //alert("finally");
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    var labels = this.patient.records.map(function (e) {
      return new Date(e.date).toLocaleDateString("en-US", options);
    });

    var dataBpm = this.patient.records.map(function (e) {
      return e.bpm;
    });;
    var dataSys = this.patient.records.map(function (e) {
      return e.sys;
    });;
    var dataDias = this.patient.records.map(function (e) {
      return e.dias;
    });;

    if ( this.patient.records.length > 0) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            data: dataSys,
            label: "Systolic",
            borderColor: "#3e95cd",
            backgroundColor: "rgba(62,149,205,.2)",
            fill: "start"
          }, {
            data: dataDias,
            label: "Diastolic",
            borderColor: "#8e5ea2",
            backgroundColor: 'rgba(142,94,162,.2)',
            fill: 'start'
          }, {
            data: dataBpm,
            label: "BPM",
            borderColor: "#3cba9f",
            backgroundColor: "rgba(60,186,159,.2)",
            fill: 'start'
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: this.patient.name + "'s progress over time."
          }, // tooltips: {
          //position: 'nearest',
          //mode: 'index',
          //intersect: false,
          //}, 
        }
      });

    }

    this.isLoading = false;
  }

  updateChart(pat) {
    //console.log(this.patient.records.length);
    this.recordsLenght = this.patient.records.length;
    //console.log(this.recordsLenght);
    this.canChart = true;
    this.isLoading = true;
    setTimeout(() => {
      this.onTimeOut();
    }, 500);


  }

  ngOnInit() {

    this.recordsLenght = this.patient.records.length;
    //console.log('ngOninit ran *** ' + this.recordsLenght);

    //this.patients = [];


  }


  newclass() {
    //console.log("before");
    $("#loginScreen").removeClass("show");
    //console.log("after");
  }

  notify() {
    $("#notifier").addClass("show");
  }


  onNewPatientSubmit() {
    if (this.alreadySentForm) {
      return;
    }
    this.alreadySentForm = true;
    //Avoid duplicated ids
    this.canSubmit = true;
    /*  this.patients.forEach(element => {
       console.log("el " + element.document + "  patId " + this.patId)
       if (element.document == this.patId) {
         this.message2 = "There is already a patient with this document number";
         this.canSubmit = false;
         this.notify();
         return;
       }
     });
  */
    const newPat = {
      email: this.email,
      name: this.patName,
      lastName: this.patLastName,
      id: this.patId,
      age: this.patAge,
      records: []
    }

    // Required Fields
    if (!this.validateService.validatePatient(newPat)) {
      //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      this.message2 = "Please fill in all fields";
      this.notify();
      //alert("Please fill in all fields");
      this.alreadySentForm = false;
      return false;
    }


    const settings = {
      document: this.patId,
    }
    this.authService.genericPost('users/patientLogin', settings).subscribe(data => {
      if (data.success) {
        //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        //this.router.navigate(['/login']);
        this.message2 = "There is already a patient registered with this document number (It may have been registered by another nurse)";
        this.canSubmit = false;
        this.notify();
        this.alreadySentForm = false;
        return;
      } else {
        //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
        //this.message2 = data.msg;
        //this.notify();
        //this.confirmationPendient = true;

        //console.log("sending new patient: *** " + newPat.id + "*** \n\n\n");
        // Register user
        this.authService.genericPost('users/newpatient', newPat).subscribe(data => {
          if (data.success) {
            //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
            //this.router.navigate(['/login']);
            this.message2 = "Patient saved";
            this.notify();
            this.confirmationPendient = true;
          } else {
            //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
            //this.router.navigate(['/register']);
            this.message2 = "Something went wrong, please try again later";
            this.notify();
            //this.confirmationPendient = true;
            this.onNewPatientCancel();
          }
        });

        //
      }
    });

    //
    if (this.canSubmit) {
      //alert("new patient");

      /*  console.log("sending new patient: *** " + newPat.id + "*** \n\n\n");
       // Register user
       this.authService.genericPost('users/newpatient', newPat).subscribe(data => {
         if (data.success) {
           //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
           //this.router.navigate(['/login']);
           this.message2 = "Patient saved";
           this.notify();
           this.confirmationPendient = true;
         } else {
           //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
           //this.router.navigate(['/register']);
           this.message2 = "Something went wrong, please try again later";
           this.notify();
           //this.confirmationPendient = true;
           this.onNewPatientCancel();
         }
       }); */
    } else {
      this.alreadySentForm = false;
    }
  }

  onNewPatientClick() {
    $("#newpat").addClass("show");
  }
  onNewPatientCancel() {
    $("#newpat").removeClass("show");
  }

  onEditPatientClick() {
    $("#editpat").addClass("show");
    this.patId = this.patient.document;
    this.patName = this.patient.name;
    this.patLastName = this.patient.lastName;
    this.patAge = this.patient.age.toString();
  }

  onEditPatientSubmit() {
    if (this.alreadySentForm) {
      return;
    }
    this.alreadySentForm = true;

    //Avoid duplicated ids
    this.canSubmit = true;
    this.patients.forEach(element => {
     // console.log("el " + element.document + "  patId " + this.patId)
      if (element.document == this.patId && element != this.patient) {
        this.message2 = "There is already a patient with this document number";
        this.canSubmit = false;
        this.notify();
        return;
      }
    });
    if (this.canSubmit) {
      const settings = {
        email: this.email,
        id: this.patient.document,
        name: this.patName,
        lastName: this.patLastName,
        newId: this.patId,
        age: this.patAge,
        records:this.patient.records
      }
     // console.log("records *** " + this.patient.records);
      //console.log("age is " + this.patAge + "last name is " + settings.lastName)
      // Required Fields
      if (!this.validateService.validatePatientEdit(settings)) {
        //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
        this.message2 = "Please fill in all fields";
        this.notify();
        //alert("Please fill in all fields");
        this.alreadySentForm = false;
        return false;
      }

      this.authService.genericPost('users/updatepatient', settings).subscribe(data => {
        if (data.success) {
          //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
          //this.router.navigate(['/login']);
          this.message2 = "Patient updated";
          this.notify();
          this.confirmationPendient = true;
        } else {
          //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          //this.router.navigate(['/register']);
          this.message2 = "Something went wrong, please try again later";
          this.notify();
          //this.confirmationPendient = true;
        }
      });
    } else {
      this.alreadySentForm = false;
    }

  }


  onEditPatientCancel() {
    $("#editpat").removeClass("show");
  }


  onCheckVitalsClick() {

  }

  onAddRecordClick() {
    $("#newrec").addClass("show");
  }
  

  onAddRecordSubmit() {
    if (this.alreadySentForm) {
      return;
    }
    this.alreadySentForm = true;
    //alert("hello");
    const settings = {
      "email": this.email,
      "id": this.patient.document,
      "bpm": this.bpmField,
      "sys": this.sysField,
      "dias": this.diasField,
      "date": this.dateField
    }
    // Required Fields
    if (!this.validateService.validateRecord(settings)) {
      //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      this.message2 = "Please fill in all fields correctly";
      this.notify();
      //alert("Please fill in all fields");
      this.alreadySentForm = false;
      return false;
    }

    if(this.dateField == undefined || this.dateField.toString().length!=10){
      this.message2 = "Please use a valid date";
      this.notify();
      //alert("Please fill in all fields");
      this.alreadySentForm = false;
      return false;
    }
    this.authService.genericPost('users/newrecord', settings).subscribe(data => {
      if (data.success) {
        //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        //this.router.navigate(['/login']);
        this.message2 = "Record saved";
        this.notify();
        this.confirmationPendient = true;
      } else {
        //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
        this.message2 = "Could not save record, please try again later";
        this.notify();
        this.alreadySentForm = false;
        //this.confirmationPendient = true;
      }
    });
  }

  onAddRecordCancel() {
    $("#newrec").removeClass("show");

  }

  onEditRecordClick() {
    $("#editrec").addClass("show");
  }

  onEditRecordSubmit() {
    if (this.alreadySentForm) {
      return;
    }
    this.alreadySentForm = true;
    alert("editrec");
  }
  onEditRecordCancel() {
    $("#editrec").removeClass("show");
  }

  onDeleteClick(what, _oid) {
    $("#deleteconfirmation").addClass("show");
    this.deleteState = what;
    this.oid = _oid;
   // console.log(this.oid)
  }
  onDeleteCancel() {
    $("#deleteconfirmation").removeClass("show");
    this.deleteState = -1;
  }


  onDeleteSubmit() {
    if (this.alreadySentForm) {
      return;
    }
    this.alreadySentForm = true;
    //console.log("*** going to compare " + this.deleteState + " ***")
    //delConfPend
    if (this.deleteState == 0) {
      this.deleteState = -1;
      const settings = {
        email: this.email,
        id: this.patient.document,
      }
      this.authService.genericPost('users/removepatient', settings).subscribe(data => {
        if (data.success) {
          //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
          //this.router.navigate(['/login']);
          this.message2 = "Patient deleted";
          this.notify();
          this.confirmationPendient = true;
        } else {
          //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          //this.router.navigate(['/register']);
          this.message2 = "Something went wrong, please try again later";
          this.notify();
          //this.confirmationPendient = true;
        }
      });
    } else if (this.deleteState == 1) {
      this.deleteState = -1;


      const settings = {
        email: this.email,
        id: this.patient.document,
        _id: { $oid: this.oid }
      }
      this.authService.genericPost('users/removerecord', settings).subscribe(data => {
        if (data.success) {
          //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
          //this.router.navigate(['/login']);
          this.message2 = "Record deleted";
          this.notify();
          this.confirmationPendient = true;
        } else {
          //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
          //this.router.navigate(['/register']);
          this.message2 = "Something went wrong, please try again later";
          this.notify();
          //this.confirmationPendient = true;
        }
      });



      /*     const settings = {
            email: this.email,
            id: this.patient.document,
          }
          this.authService.genericPost('users/removepatient',settings).subscribe(data => {
            if (data.success) {
              //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
              //this.router.navigate(['/login']);
              this.message2 = "Patient deleted";
              this.notify();
              this.confirmationPendient = true;
            } else {
              //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
              //this.router.navigate(['/register']);
              this.message2 = "Something went wrong, please try again later";
              this.notify();
              //this.confirmationPendient = true;
            }
          }); */
    }
  }

  search(): void {
    let term = this.searchTerm.toLowerCase();
    this.filteredItems = this.patients.filter(function (tag) {
      return tag.lastName.toLowerCase().indexOf(term) >= 0;
    });
  }

  onHistoryClick() {
    //alert(this.patients);
    //this.patient._id = "xx";
    window.location.reload();
  }
  onLogoutClick() {
    this.authService.logout();
    /*this.flashMessage.show('You are logged out', {
      cssClass: 'alert-success', timeout: 3000
    });*/
    this.message2 = "Leaving already? See you soon :)";
    this.welcome = true;
    this.notify();
    // $("#loginScreen").addClass("show");
    //this.router.navigate(['/']);
    //location.reload();
    $("#loginScreen").addClass("show");
    //his.router.navigate(['/login']);
    return false;
  }


  onLoginSubmit() {
    if (this.alreadySentForm) {
      return;
    }
    this.alreadySentForm = true;
    const user = {
      email: this.email,
      password: this.password
    }

    // Required Fields
    if (!this.validateService.validateLogin(user)) {
      //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      this.message2 = "Please fill in all fields";
      this.notify();
      this.alreadySentForm = false;
      //alert("Please fill in all fields");
      return false;
    }


    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.message2 = "Welcome, " + data.user.name ;
        this.notify();
        this.confirmationPendient = true;
        this.isNurse = true;
        $("#loginScreen").removeClass("show");
        //let headers = new HttpHeaders();//.set('email', 'juan@juan.com');
        //var parameter = JSON.stringify({ "email":'juan@juan.com'});
        // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8','email':'juan@juan.com'});
        //this.posts =  this.http.post("/getUser" , {params});
        //console.log( this.posts);  
        /*    const requestOptions = {
             params: new HttpParams()
           };
           requestOptions.params.set('email', 'juan@juan.com');
           this.http.post("/users/getUser" , requestOptions).subscribe(data => {
             console.log(data);
           });  */

        //this.getpatients();
        //this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
        //this.router.navigate(['dashboard']);
      } else {
        //this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.message2 = data.msg + " ";
        this.notify();
        this.alreadySentForm = false;
        //this.router.navigate(['login']);
      }
    });
  }


  onPatLogSubmit() {
    const settings = {
      document: this.logIDnum,
    }
    this.authService.genericPost('users/patientLogin', settings).subscribe(data => {
      if (data.success) {
        //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        //this.router.navigate(['/login']);
        this.message2 = "Hi " + data.tmp.name;
        this.patient = data.tmp;
        this.updateChart(this.patient);
        this.name = this.patient.name;
        this.isNurse = false;
        this.notify();
        this.confirmationPendient = true;
        $("#loginScreen").removeClass("show");
      } else {
        //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
        this.message2 = data.msg;
        this.notify();
        //this.confirmationPendient = true;
      }
    });
  }

  onRegisterSubmit() {
    if (this.alreadySentForm) {
      return;
    }
    this.alreadySentForm = true;
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      this.message2 = "Please fill in all fields";
      this.notify();
      this.alreadySentForm = false;
      //alert("Please fill in all fields");
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      //this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      //alert("Please use a valid email'");
      this.message2 = "Please use a valid email";
      this.alreadySentForm = false;
      this.notify();
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        //this.router.navigate(['/login']);
        this.message2 = data.msg + " ";
        this.notify();
        this.alreadySentForm = false;
      } else {
        //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        //this.router.navigate(['/register']);
        this.message2 = data.msg + " ";
        this.notify();
        this.alreadySentForm = false;
      }
    });
  }



}





