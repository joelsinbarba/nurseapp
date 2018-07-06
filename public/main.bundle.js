webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<!--div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div-->\n<!--flash-messages></flash-messages-->\n<app-user></app-user>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__["a" /* UserComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__["a" /* UserComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_user_component__["a" /* UserComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_11_angular2_flash_messages__["FlashMessagesModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bck{\n    background: #212834;\n}\n\n.brnd{\n    font-family: \"Roboto\";\n    font-weight: 700;\n    color: rgb(216, 216, 216);\n    font-size: 24px;\n    text-decoration: none;\n}\n\n.blck{\n    font-family: \"Roboto\";\n    color: rgb(194, 194, 194);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar bck navbar-expand-md fixed-bottom\">\n      <a class=\"brnd\" href=\"\">Nurse App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse blck\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav ml-auto\">\n          <!--li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link blck\" href=\"http://github.com/lchzaboy\">Github </a>\n          </li-->\n          <li class=\"nav-item\" ><a class=\"nav-link blck\" href=\"http://github.com/lchzaboy\">Made with love by lchzaboy</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  font-family: 'Lato';\n  overflow-x: hidden;\n}\n\nbody {\n  font-family: 'Lato';\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 240px;\n  color: #2f2f2f;\n  background: rgb(15, 15, 15);\n  overflow-y: hidden;\n}\n\n/*  .container1 {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n  }*/\n\n.filter {\n  background: rgba(0, 0, 0, 0.3);\n  border: none;\n  margin-top: -20px;\n}\n\n.filter:hover {\n  box-shadow: 15px 15px 15px 25px rgba(white, .9);\n}\n\n.btn {\n  /*margin-top: 10px;*/\n}\n\n.blue {\n  background: #4D9AE5;\n  text-shadow: 0 -1px 1px rgb(12, 67, 126);\n  border-bottom: 4px solid rgb(62, 133, 199);\n}\n\n.blue:hover {\n  background: rgb(62, 133, 199);\n  text-shadow: 0 -1px 1px rgb(12, 67, 126);\n  border-bottom: 4px solid #3366cc;\n}\n\n.sidebar {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  height: 100%;\n  background: #151515;\n  padding: .02rem;\n  /*background: -webkit-gradient(linear, left top, left bottom, from(#ffa84c), to(#ff7b0d));\n    background: linear-gradient(to bottom, #ffa84c 0%, #ff7b0d 100%);*/\n  color: #fff;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\n}\n\n@media (min-width: 600px) {\n  .sidebar {\n    width: 400px;\n    padding: 3rem;\n  }\n}\n\n.mainChart {\n  max-width: 1000px;\n  min-width: 100px;\n}\n\n.more {\n  margin-top: 100px;\n  padding: 50px;\n  background: #151515;\n}\n\n.main {\n  background: #f3f3f3;\n  position: absolute;\n  z-index: 950;\n  top: 0;\n  left: 250px;\n  right: 0;\n  bottom: 0;\n  width: auto;\n  margin: 0;\n  height: 100%;\n  overflow-x: hidden;\n\n  /*-webkit-transition: 250ms cubic-bezier(0.7, 0, 0.3, 1) all;\n    transition: 250ms cubic-bezier(0.7, 0, 0.3, 1) all;\n    -webkit-transition-delay: 0;\n            transition-delay: 0;\n    min-height: 100%;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);*/\n}\n\n.main--content {\n  overflow-y: scroll;\n  padding-right: 5rem;\n  padding-left: 200px;/*5rem;*/\n  padding-top: 2rem;\n  padding-bottom: 5rem;\n  height: 100%;\n  margin-left: 20px;\n  background: rgb(15, 15, 15);\n}\n\n.pane--right,\n.pane--left {\n  position: absolute;\n  padding: 2rem;\n  width: 400px;\n  z-index: 980;\n  top: 0;\n  bottom: 0;\n  background: #b3e6b3;\n  transition: transform 250ms cubic-bezier(0.7, 0, 0.3, 1);\n  transition-delay: 0;\n}\n\n.pane--right {\n  right: 0;\n  transform: translateX(100%);\n}\n\n.pane--left {\n  left: -400px;\n}\n\n.show-pane--left .main {\n  transform: translateX(400px);\n}\n\n.show-pane--right .pane--right {\n  transform: translateX(0);\n}\n\n.show-pane--right .main {\n  right: 400px;\n}\n\n.overpane {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.952);\n  padding: 30px;\n  z-index: 2000;\n  transition: 250ms cubic-bezier(0.7, 0, 0.3, 1) transform;\n  transform: translateY(100%);\n}\n\n.ovpBack{\n  background-color: rgba(20, 4, 43, 0.952);\n}\n.overpane.show {\n  transform: translateY(0);\n}\n\n.charty {\n  margin-bottom: 50px;\n}\n.menu {\n  list-style: none;\n  margin: 24px 0;\n  padding: 30px 10px;\n  background-color: #1D1D1D;\n  /* rgba(0,0,0,.15);*/\n  border-radius: 20px;\n  height: 40vh;\n  /*overflow-y: auto;*/\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n\n.menu li {\n  display: block;\n  height: 1%;\n  overflow: hidden;\n  /*line-height: 30px;*/\n  font-size: 14px;\n  color: /*rgba(255, 255, 255, .6)*/\n  white;\n  /*position: relative;*/\n  padding: 5%;\n  /*margin: 0;*/\n}\n\n.menu li:hover {\n  color: white;\n  border-radius: 5px;\n  background: #FF2D55;\n  cursor: pointer;\n}\n\n.selectedLi {\n  color: white;\n  border-radius: 5px;\n  background: #FF2D55;\n  cursor: pointer;\n}\n\nbutton {\n  margin: .5rem 0;\n  border: none;\n  padding: .5rem 0;\n  width: 100%;\n}\n\nbutton.big-button {\n  padding: 2rem 0;\n}\n\n/*   FD--------------------------------*/\n\n.addCategory {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 1);\n}\n\n.addCategory:hover {\n  color: #fff;\n}\n\n/* Content */\n\n#content {\n  /* width: calc(100% - 240px);*/\n  width: 100%;\n  overflow-y: auto;\n  padding: 25px;\n  display: table-cell;\n  background: #1D1D1D;\n  color: white;\n}\n\n#titleBar {\n  height: 36px;\n  margin-bottom: 30px;\n  color: black;\n}\n\n#profilePic {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #999;\n  float: left;\n  margin-top: -8px;\n  margin-right: 14px;\n  overflow: hidden;\n}\n\n#profilePic img {\n  width: 100%;\n}\n\n.controls {\n  display: block;\n  width: 70px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 10px;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 20px;\n  float: left;\n  border-radius: 20px;\n  margin: 5px;\n  margin-top: 30px;\n}\n\n.history {\n  background: #3366cc;\n  color: white;\n}\n\n.logout {\n  background: #CE223A;\n  color: white;\n}\n\n.history:hover{\n  cursor: pointer;\n}\n\n.logout:hover{\n  cursor: pointer;\n}\n\n#salesData {\n  margin-bottom: 60px;\n}\n\n#totalSales {\n  height: 120px;\n  position: relative;\n  margin-top: 24px;\n  margin-bottom: 50px;\n}\n\n#totalSales .col {\n  float: left;\n  width: 33.33%;\n  height: 100%;\n}\n\n#totalSales .col .progressTitle {\n  float: left;\n  margin-left: 20px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.progressBar {\n  float: left;\n  height: 120px;\n  width: 120px;\n  font-size: 40px;\n  text-align: center;\n  line-height: 120px;\n}\n\n/* Icons */\n\n.notification {\n  display: block;\n  width: 20px;\n  height: 20px;\n  color: #202b33;\n  font-weight: 600;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .6);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto;\n}\n\n.colorIcon {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 2%;\n  margin: auto;\n}\n\n.plus {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  color: white;\n  font-size: 16px;\n  line-height: 8pxfad;\n  padding: 4px;\n  margin-right: 6px;\n  border: 2px solid rgba(255, 255, 255, .8);\n  border-radius: 50%;\n}\n\n.red {\n  background: #ec1561;\n}\n\n.orange {\n  background: #ff9939;\n}\n\n.green {\n  background: #2bab51;\n}\n\n/* Table */\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth {\n  text-align: left;\n  color: #fff;\n  font-size: 13px;\n  text-transform: uppercase;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0 10px;\n  padding-bottom: 14px;\n}\n\ntr{\n  padding: 0px;\n}\ntr:not(:first-child):hover {\n  background: #0a66c2;\n}\n\ntd {\n  height: 40px;\n  line-height: 40px;\n  color: rgba(255, 255, 255, 0.9);\n  padding: 0 10px;\n}\n\n/* Headers */\n\nh1 {\n  font-size: 24px;\n  letter-spacing: 1px;\n  margin: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  color: white;\n}\n.loader {\n  margin-top: 50px;\n  margin-bottom: 30px;\n  margin-left: 50%;\n  border: 6px solid #f3f3f3; /* Light grey */\n  border-top: 6px solid #FF2D55; /* Blue */\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin .5s linear infinite;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.loader2 {\n  margin: auto;\n  border: 6px solid #f3f3f3; /* Light grey */\n  border-top: 6px solid #FF2D55; /* Blue */\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin .5s linear infinite;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.nombree{\n  font-family: 'Roboto';\n  font-weight: 600;\n  font-size: 28px;\n  margin-bottom: 10px;\n  margin-top: 30px;\n\n}\n\n.subttl{\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 28px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.patTitle{\n  font-family: 'Roboto';\n  font-weight: 600;\n  font-size: 28px;\n  margin-top: 20px;\n  margin-left: 0px;\n  display: block;\n\n}\n.subss {\n  font-size: 15px;\n  margin: 0;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  color: rgb(177, 177, 177);\n}\n.mgtp{\n  margin-top: 30px;\n  margin-bottom: 50px;\n}\n.lilTooltip{\n  margin-bottom: 3px;\n  margin-top: 10px; \n  padding: 0;\n}\n\n.tooltipp {\n  font-size: 14px;\n  letter-spacing: 1px;\n  margin: 0;\n  margin-top: -30px;\n  color: rgb(255, 166, 0);\n}\n.tooltiperror{\n  font-size: 14px;\n  letter-spacing: 1px;\n  margin-top: 20px;\n  color: rgb(255, 38, 0);\n  display: block;\n  text-align: center;\n}\n\nh2 {\n  float: left;\n  font-size: 19px;\n  letter-spacing: 1px;\n  margin: 0;\n  margin-bottom: 30px;\n  color: white;\n}\n\nh3 {\n  float: left;\n  color: #fff;\n  font-size: 32px;\n  margin: 0;\n  margin-top: 8%;\n  margin-left: 20px;\n  margin-bottom: 6px;\n}\n\n.clearFix {\n  clear: both;\n}\n\n/*  */\n\n.flat-form {\n  /*background: rgba(255, 0, 0, 0.377);*/\n  color: white;\n  /*margin: 25px auto;*/\n  font-family: 'Roboto';\n  margin: auto;\n  margin-top: 5%;\n  width: 600px;\n  height: 400px;\n}\n\n.flat-form .form-action {\n  padding: 0 30px;\n  position: relative;\n}\n\n.flat-form h1 {\n  font-size: 42px;\n  padding-bottom: 10px;\n}\n\n.flat-form form {\n  padding-right: 20px !important;\n}\n\n.flat-form .show1 {\n  display: block;\n}\n\n.flat-form .hide {\n  display: none;\n}\n\n/*tabs*/\n\n.tab-group {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0;\n}\n\n.tab-group:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.form-action p {\n  margin-bottom: 5px;\n  font-weight: 600;\n}\n\n.form-action h1 {\n  font-weight: 900;\n}\n\n.form-action button {\n  margin-top: 20px;\n}\n\n.tab-group li a {\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  /*background: rgba(160, 179, 176, 0.25);*/\n  color: #ffffff;\n  font-size: 20px;\n  float: left;\n  width: 200px;\n  text-align: center;\n  cursor: pointer;\n  transition: .5s ease;\n}\n\n.tab-group li a:hover {\n  background: #0a66c2;\n  color: #ffffff;\n}\n\n.tab-group li a .active {\n  background: #1ab188;\n  color: #ffffff;\n}\n\n.active {\n  background: #0a66c2;\n  color: #ffffff;\n}\n\n.firstForm {\n  /*max-width: 300px;\n  margin-left: 25%;*/\n}\n.firstForm input {\n  margin-top: 15px;\n}\n\n.sidebyside {\n  padding: 30px;\n}\n.sidebyside button {\n  width: 45%;\n  margin: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n\n  <div id=\"titleBar\">\n    <div id=\"profilePic\">\n      <img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDQ8PDQ0SEA8ODRAQDRAOEBAPDw8QGBEWFhgSFhUYHiggGBolGxMVIT0hJSkrMC4uFx8zODMtNygtLisBCgoKDg0NGhAQGC0gHSUrLS8tKy0tLS0tKy0tLS0rLS0tLS0tLS0tLS0rKysrLSsrKy0rLS0tKy0rLSstKzcrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAQIDB//EADYQAQACAAMDCAoCAQUAAAAAAAABAgMFEQQhMRIiQVFhcZGhEyMyUmJygbHB0TPhQkOCstLw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAdEQEBAAMBAQEBAQAAAAAAAAAAAQIRMQMhQVES/9oADAMBAAIRAxEAPwD9EAelmAAAAAAAAAAA9YdJtOlYmZ7I1B5EzCyzFt0RX5p3+EJdMmj/ACxJ+ldE3KR3VVAnZhgYWHpWszN+MxPCI7UF2XbgA6AAAAAAAAAAAAAAAAAAAAD7bNs18SdKRujjM7qx9UnL8vnE0tfdTojpt+oXlKRERERpEcIjgzyz1x2RA2fKaV9vnz27qx9E+tIjdERHdGj0M7bV6AHBRZnsVq3tiRvradZ6Zr169ivayYVO35XxthR30/6/ppjn+VNipAapAAAAAAAAAAAAAAAAAAErLtm9JiRE+zXnW6p6oRVxkVebefiiPL+05XUdnVpEOgwWAAAAAApM52bk2jErG606W+bTj4QrWhzakTgX16NJjv1Z5thfiL0AW4AAAAAAAAAAAAAAAALzJI9VPzz9oUa7yOfV2jqv+IRnx2dWQDFYAAAAACLmn8GJ8rOtFmn8GJ8v5Z1r58Rk4A0cAAAAAAAAAAAAAAAAFxkU828fFH2U6+yrZrYdZm0xz9JiI6I0Rnfjs6ngMVgAAAAAImaz6i/dH/KGdaTb8CcTDmtZ0mZjTXhunXSWdvWYmYnjEzEtfPicnkBokAAAAAAAAAAAAAAAAafY7a4VJ66V+zMNBlE+orv4TaPNn6cdx6mgMlgAAAAAEspa0zMzPGZmZ8Wl2u/Jw726qz9mYhp5pyAGqQAAAAAAAAAAAAAAABOynaJrixXXm33THxdEoL1S81tFo41mLR9J1cs3Bqx5w7axExwmImHp52gAAAAACnzvHnWMOJ3TGtu3fujuVSRt+Ny8W8xOsa6V7o3ffVHb4zURQBTgAAAAAAAAAAAAAAAAAC7ybaNaejn2qcO2v/tyyZvLpmMemnXpPdMNIwzmquACXQABFzHafR4czHtTup3pSkzz+SnyTp4qxm65VaA3QAAAAAAAAAAAAAAAAAAAAmZTXXHr2RafL+2hVmVbFNdMSbb7V3VjoidJ4rNhnd1cAEugAClz2OfSfhtHnC6RMw2P0tYiLaTWdY13x3Kxuq5WdAboAAAAAAAAAAAAAAAAAAHa11mKxxtMRHfM6JOz7BiYmkxXk1mfatu8uMrTZMtpSYtPOtHTO6InshFykdkTcOukRHVER5PQMVgAAAAAMzt2Hyca8aaRytY7p3/t8Gj2vYaYu+260RpFo46flU7RlmJTfXnx113T4Nsc4ixCHZ6nFuAAAAAAAAAAAPrs+z3xJ5ldY6Z4Vj6g+T1Sk2nSsTM9URqttmyisb8S3K+GNYjx4yssLCrWNK1iI7IZ3Ofiv8qbAym877zyI6o51v6WWzbDh4e+tdZ963Onz4JQi5Wu6c0dBLoAAAAAAAAAD4bRstMT26xPbwt4q3aMnnjh213+zbdu71yOzKxzTLY2Dak6XrNd/Tw+k9L5tXakTGkxrHVO9A2nKcO3scyezfXwaT0/rlxUYkbTsWJh77V1r71d8R39SOuXaQB0AAAWeTbLypnEtwrOlO/ply3UHvYcq/yxfpT9/pbVrERpEaR2OjC21cgA46AAAAAAAAAAAAAAAAAA5Kv23K621tTm24/DM9vUsR2XQydqzEzFo0mJ0mJ6HF3nOzcqvpIjnU49ter8qRtjdxFmgBTg0mX4XJwqRp0az3zvZ7Bw+VetfetEebUxDL0qsXQGagAAAAAAAAAAAAAAAAAAAAAHLRExMT0xvZbFpybWr7tpjzapQZxh6YuvvVifrwX536nJBAbJTcpprjRPuxM+Wn5aBTZFXnXnqrWPGZ/S5Y59XOACHQAAAAAAAAAAAAAAAAAAAAABVZ7Tm0t1WmPGNfwtVdnc+qj5408JVj1y8UjgNkLbIf8AU/2/ey3Bjn1c4AJdAAAAAAAAAAAAAAAAAAAAAAclU57wp9fsCseuXipAbof/2Q==\"\n        alt=\":)\">\n    </div>\n    <h1 class=\"nombree\"> {{name}}</h1>\n    <div *ngIf=\"isNurse\" class=\"controls history\" (click)=\"onHistoryClick()\">All</div>\n    <div class=\"controls logout\" (click)=\"onLogoutClick()\">Logout</div>\n    <!--span class=\"controls\">Monthly</span-->\n  </div>\n  <br>  <br>\n   <div *ngIf=\"isNurse\"></div>\n  <div *ngIf=\"isNurse\">\n    <h1 class=\"patTitle\">Patients</h1>\n\n    <input type=\"text\" id=\"sea\" class=\"form-control filter\" placeholder=\"filter (only by last name)\" [(ngModel)]=\"searchTerm\"\n      (ngModelChange)=\"search()\">\n    <ul class=\"menu\">\n\n      <li id=\"patientsList\" ng-app=\"myApp\" ng-controller=\"patCtrl\" *ngFor=\"let patient of filteredItems\" (click)=\"onClickedPatient(patient._id)\">{{patient.lastName + \" , \" + patient.name}} </li>\n      <!--li>Reports <span class=\"notification\">8</span></li-->\n\n    </ul>\n    <button type=\"button\" (click)=\"onNewPatientClick()\" class=\"btn btn-success\">New Patient</button>\n    <!--button class=\"toggle-overpane\">Toggle Overpane</button>\n        <button class=\"toggle-pane-left\">Toggle Slider</button>\n        <button class=\"toggle-pane-right\">Toggle Pane</button-->\n  </div>\n\n  <!--div class=\"footer-below\">\n      <i class=\"fa fa-code pulse\" style=\"font-size: 20px; color:antiquewhite;\"></i>  with\n      <i class=\"fa fa-heart pulse\" style=\"font-size: 20px;\"></i> by\n      <a href=\"https://www.github.com/joelgimenez\" class=\"bolder\">lchzaboy</a>\n    </div-->\n\n\n</div>\n\n\n<div class=\"main\">\n  <div id=\"wd\" *ngIf=\"patient._id != 'xx'\" class=\"main--content\">\n    <h1 class=\"nombree\"> {{patient.name + \" \" + patient.lastName}}\n    </h1>\n    <h1 class=\"subss\">{{\"DOCUMENT NUMBER : \" + patient.document}}</h1>\n    <h1 class=\"subss\"> {{patient.age + \" years old\"}}\n      <i class=\"fa fa-heart pulse\" style=\"font-size: 20px;\"></i>\n      <!--This button is for function that was never implemented-->\n      <!--button type=\"button\" class=\"btn btn-primary mgtp\" (click)=\"onCheckVitalsClick()\"> Check Vitals </button-->\n    </h1>\n    <div class=\"mainChart\">\n      <h2 class=\"subttl\">Progress Chart\n        <br>\n        <br>\n      </h2>\n      <!--div  *ngIf=\"isLoading\" class=\"charty\">\n          <div class=\"loader\"></div>\n      </div-->\n      <div *ngIf=\"canChart\" class=\"charty\">\n        <br>\n        <div *ngIf=\"isLoading && recordsLenght>=2\" class=\"loader\"></div>\n        <canvas width=\"400\" *ngIf=\"recordsLenght>= 2 \" height=\"200\" id=\"canvas\">{{chart}}</canvas>\n      </div>\n      <div>\n        <p class=\"mgtp\" *ngIf=\"recordsLenght < 2\"> The chart is not shown because you need at least 2 records. Click on the \"ADD\" button below to start saving records.\n        </p>\n        <br>\n        <br>\n      </div>\n      <!--canvas id=\"salesData\"></canvas-->\n      <h2 class=\"subttl\">Records\n        <br>\n        <br>\n        <button *ngIf=\"isNurse\" type=\"button\" class=\"btn btn-primary\" (click)=\"onAddRecordClick()\">\n          <span class=\"fa fa-plus\" aria-hidden=\"true\"></span> ADD</button>\n      </h2>\n\n      <!--div class=\"clearFix\"></div-->\n\n      <!--div id=\"totalSales\">\n                    <div class=\"col\">\n                      <div id=\"creditSales\" class=\"progressBar\"></div>\n                      <h3>$36,059</h3>\n                      <span class=\"progressTitle\">Credit Sales</span>\n                    </div>\n                    <div class=\"col\">\n                      <div id=\"channelSales\" class=\"progressBar\"></div>\n                      <h3>$24,834</h3>\n                      <span class=\"progressTitle\">Channel Sales</span>\n                    </div>\n                    <div class=\"col\">\n                      <div id=\"directSales\" class=\"progressBar\"></div>\n                      <h3>$15,650</h3>\n                      <span class=\"progressTitle\">Direct Sales</span>\n                    </div>\n                  </div-->\n\n      <table>\n        <tr>\n          <th>Date</th>\n          <th>BPM</th>\n          <th>Systolic</th>\n          <th>Diastolic</th>\n        </tr>\n        <p class=\"mgtp\" *ngIf=\"recordsLenght == 0\"> There are no records here yet. Click the \"ADD\" button to save records. </p>\n        <tr *ngFor=\"let record of patient.records\">\n          <td>{{record.date | date}} </td>\n          <td>{{record.bpm}}</td>\n          <td>{{record.sys}}</td>\n          <td>{{record.dias}}</td>\n          <!--td  *ngIf=\"isNurse\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"onEditRecordClick()\">Edit</button>\n          </td-->\n          <td *ngIf=\"isNurse\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteClick(1,record._id)\">Delete</button>\n          </td>\n        </tr>\n\n\n      </table>\n      <div class=\"more\" *ngIf=\"isNurse\">\n        <h2>More</h2>\n\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onEditPatientClick()\">\n          <span class=\"fa fa-trash-o\" aria-hidden=\"true\"></span> Edit Patient </button>\n\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteClick(0,0)\">\n          <span class=\"fa fa-trash-o\" aria-hidden=\"true\"></span> Delete Patient</button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <div *ngIf=\"patient._id == 'xx'\" class=\"main--content\">\n    <h1 class=\"nombree\"> All records\n    </h1>\n    <h1 class=\"subss\">By date</h1>\n    <br>\n    <br>\n    <div class=\"mainChart\">\n      <!--canvas id=\"salesData\"></canvas-->\n\n      <table>\n        <tr>\n          <th>Patient</th>\n          <th>Date</th>\n          <!--th></th-->\n          <!--th>Systolic</th-->\n          <!--th>Diastolic</th-->\n        </tr>\n        <p class=\"mgtp\" *ngIf=\"historicalLenght <= 0\"> There are no records here yet </p>\n        <tr *ngFor=\"let record of historical\">\n          <td>{{record.patientName}}</td>\n          <td>{{record.date | date}}</td>\n          <td> <button type=\"button\" class=\"btn btn-info\" (click)=\"onClickedPatient(record._id)\">Go to {{record.patientName}}</button> </td>\n          <!--td>asd</td-->\n          <!--td  *ngIf=\"isNurse\">\n              <button type=\"button\" class=\"btn btn-warning\" (click)=\"onEditRecordClick()\">Edit</button>\n            </td-->\n          <!--td  *ngIf=\"isNurse\">\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"onDeleteClick(1,record._id)\">Delete</button>\n            </td-->\n        </tr>\n\n\n      </table>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n<div id=\"loginScreen\" class=\"overpane \">\n  <!--button class=\"toggle-overpane big-button\"  ng-click=\"toggle()\">Close Overpane</button-->\n\n  <div class=\"flat-form\">\n    <h1>Welcome!</h1>\n    <p class=\"tooltipp\"> Please select your role to gain access</p>\n    <br>\n    <ul class=\"tab-group\">\n      <li>\n        <a href=\"#login\" class=\"active\" (click)=\"clicked($event)\">I'm a nurse</a>\n      </li>\n      <li>\n        <a href=\"#loginPatient\" (click)=\"clicked($event)\">I'm a patient</a>\n      </li>\n      <li>\n        <a href=\"#newNurse\" (click)=\"clicked($event)\">I'm a new nurse</a>\n      </li>\n    </ul>\n    <div id=\"login\" class=\"form-action show1\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>Login as a Nurse</h1>\n      <!--p>Lor</p-->\n      <form (submit)=\"onLoginSubmit(this)\" class='firstForm'>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" id=\"emailLog\" class=\"form-control\" placeholder=\"email\" />\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"passwordLog\" id=\"password\" class=\"form-control\" placeholder=\"password\"\n        />\n        <!--input type=\"submit\" value=\"Login\" class=\"button\" /-->\n        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n      </form>\n    </div>\n    <!--/#login.form-action-->\n    <div id=\"newNurse\" class=\"form-action hide\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>Create a Nurse account</h1>\n      <p>Create an account to start saving info about your patients :) </p>\n      <form class='firstForm' (submit)=\"onRegisterSubmit()\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" id=\"nameSign\" class=\"form-control\" placeholder=\"name\" />\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" id=\"emailSign\" class=\"form-control\" placeholder=\"email\" />\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"passwordSign\" class=\"form-control\" placeholder=\"password\"\n        />\n        <!--input type=\"submit\" value=\"Login\" class=\"button\" /-->\n        <button type=\"submit\" class=\"btn btn-success\">Create Account</button>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n    <div id=\"loginPatient\" class=\"form-action hide\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>Login as a Patient</h1>\n      <p>Login with your identity number to see your history and progress.\n        <br> (You must have been previously registered by a nurse)</p>\n      <form class='firstForm' (submit)=\"onPatLogSubmit()\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"ID Number\" [(ngModel)]=\"logIDnum\" name=\"logIDnum\" id=\"logIDnum\" />\n        <!--input type=\"submit\" value=\"Login\" class=\"button\" /-->\n        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n  </div>\n\n\n</div>\n\n<div id=\"newpat\" class=\"overpane\">\n  <!--button class=\"toggle-overpane big-button\"  ng-click=\"toggle()\">Close Overpane</button-->\n\n  <div class=\"flat-form\">\n    <div id=\"signup\" class=\"form-action\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>New patient</h1>\n      <p></p>\n      <form (reset)=\"onNewPatientCancel()\" (submit)=\"onNewPatientSubmit()\" class='firstForm'>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"patId\" name=\"patId\" id=\"patId\" placeholder=\"document number\" />\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"patName\" name=\"patName\" id=\"patName\" placeholder=\"first name\" />\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"patLastName\" name=\"patLastName\" id=\"patLastName\" placeholder=\"last name\"\n        />\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"patAge\" name=\"patAge\" id=\"patAge\" placeholder=\"age\" />\n        <!--input type=\"submit\" value=\"Login\" class=\"button\" /-->\n        <div class=\"sidebyside row\">\n          <button type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        </div>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n  </div>\n\n\n</div>\n\n\n<div id=\"editpat\" class=\"overpane\">\n  <!--button class=\"toggle-overpane big-button\"  ng-click=\"toggle()\">Close Overpane</button-->\n\n  <div class=\"flat-form\">\n    <div id=\"signup\" class=\"form-action\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>Edit {{patient.name}}'s data</h1>\n      <p></p>\n      <form (reset)=\"onEditPatientCancel()\" (submit)=\"onEditPatientSubmit()\" class='firstForm'>\n        <p class=\"lilTooltip\">Document</p>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"patId\" name=\"patId\" id=\"patId1\" placeholder=\"document number\" />\n        <p class=\"lilTooltip\">First Name</p>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"patName\" name=\"patName\" id=\"patName1\" placeholder=\"first name\" />\n        <p class=\"lilTooltip\">Last Name</p>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"patLastName\" name=\"patLastName\" id=\"patLastName1\" placeholder=\"last name\"\n        />\n        <p class=\"lilTooltip\">Age</p>\n        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"patAge\" name=\"patAge\" id=\"patAge1\" placeholder=\"age\" />\n        <!--input type=\"submit\" value=\"Login\" class=\"button\" /-->\n        <div class=\"sidebyside row\">\n          <button type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        </div>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n  </div>\n\n\n</div>\n\n<div id=\"newrec\" class=\"overpane \">\n  <!--button class=\"toggle-overpane big-button\"  ng-click=\"toggle()\">Close Overpane</button-->\n\n  <div class=\"flat-form\">\n    <div id=\"signup\" class=\"form-action\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>New record</h1>\n      <p></p>\n      <form (reset)=\"onAddRecordCancel()\" (submit)=\"onAddRecordSubmit()\" class='firstForm'>\n        <!--select class=\"form-control\" name=\"cars\">\n              <option value=\"\" disabled selected>Patient</option>\n              <option value=\"volvo\">Volvo</option>\n              <option value=\"saab\">Saab</option>\n              <option value=\"fiat\">Fiat</option>\n              <option value=\"audi\">Audi</option>\n          </select-->\n        <input type=\"number\" class=\"form-control\" placeholder=\"BPM\" [(ngModel)]=\"bpmField\" name=\"bpmField\" />\n        <input type=\"number\" class=\"form-control\" placeholder=\"systolic\" [(ngModel)]=\"sysField\" name=\"sysField\" />\n        <input type=\"number\" class=\"form-control\" placeholder=\"diastolic\" [(ngModel)]=\"diasField\" name=\"diasField\" />\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"dateField\" name=\"dateField\"/>\n        <!--input type=\"submit\" value=\"Login\" class=\"button\" /-->\n        <div class=\"sidebyside row\">\n          <button type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        </div>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n  </div>\n\n\n</div>\n\n\n<div id=\"editrec\" class=\"overpane\">\n  <!--button class=\"toggle-overpane big-button\"  ng-click=\"toggle()\">Close Overpane</button-->\n\n  <div class=\"flat-form\">\n    <div id=\"signup\" class=\"form-action\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>Edit record of {{patient.name}}</h1>\n      <p></p>\n      <form (reset)=\"onEditRecordCancel()\" (submit)=\"onEditRecordSubmit()\" class='firstForm'>\n        <input type=\"number\" class=\"form-control\" placeholder=\"BPM\" />\n        <input type=\"number\" class=\"form-control\" placeholder=\"systolic\" />\n        <input type=\"number\" class=\"form-control\" placeholder=\"diastolic\" />\n        <input type=\"date\" class=\"form-control\" />\n        <!--input type=\"submit\" value=\"Login\" class=\"button\" /-->\n        <div class=\"sidebyside row\">\n          <button type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        </div>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n  </div>\n\n\n</div>\n\n\n<div id=\"deleteconfirmation\" class=\"overpane\">\n  <!--button class=\"toggle-overpane big-button\"  ng-click=\"toggle()\">Close Overpane</button-->\n\n  <div class=\"flat-form\">\n    <div id=\"signup\" class=\"form-action\">\n        <div *ngIf=\"alreadySentForm\" class=\"loader2\"></div>\n      <h1>Are you sure you want to do this?</h1>\n      <form (reset)=\"onDeleteCancel()\" (submit)=\"onDeleteSubmit()\" class='firstForm'>\n        <div class=\"sidebyside row\">\n          <button type=\"reset\" class=\"btn btn-primary\">Go back</button>\n          <button type=\"submit\" class=\"btn btn-danger\">Delete</button>\n        </div>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n  </div>\n\n\n</div>\n\n\n<div id=\"notifier\" class=\" ovpBack overpane\">\n  <!--button class=\"toggle-overpane big-button\"  ng-click=\"toggle()\">Close Overpane</button-->\n\n  <div class=\"flat-form\">\n    <div id=\"signup\" class=\"form-action\">\n      <h1>{{message2}}</h1>\n      <form class='firstForm'>\n        <div class=\" row\">\n          <button type=\"button\" (click)=\"clickedOkay($event)\" class=\"btn btn-warning\">Ok</button>\n        </div>\n      </form>\n    </div>\n    <!--/#register.form-action-->\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserComponent = (function () {
    function UserComponent(validateService, authService, router, http, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.flashMessage = flashMessage;
        this.name = "";
        this.patient = {
            document: "document",
            name: "name",
            lastName: "lastName",
            _id: "xx",
            age: 12,
            records: [],
        }; // : any;
        this.message2 = "";
        this.searchTerm = '';
        this.chart = [];
        this.isNurse = true;
        this.login = false;
        this.signUp = false;
        this.confirmationPendient = false;
        this.alreadySentForm = false;
        this.canSubmit = false;
        this.canChart = false;
        this.isLoading = true;
        this.isLoading2 = true;
        this.historical = [];
    }
    UserComponent.prototype.clicked = function (event) {
        var $tab = $((event.currentTarget)), href = $tab.attr('href');
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
    };
    UserComponent.prototype.onClickedPatient = function (document) {
        var _this = this;
        //alert(document);
        console.log(document);
        this.patients.forEach(function (element) {
            if (element._id == document) {
                /*alert(element.name)*/
                _this.canChart = false;
                _this.patient = element;
                _this.updateChart(_this.patient);
                //console.log($("#wd").scrollTop)
                $("#wd").animate({ scrollTop: -100 }, "fast");
            }
        });
    };
    UserComponent.prototype.clickedOkay = function (event) {
        $('#notifier')
            .removeClass('show');
        if (this.confirmationPendient && this.isNurse) {
            window.location.reload();
            this.confirmationPendient = false;
        }
        else if (this.confirmationPendient && !this.isNurse) {
            //window.location.reload();
            this.confirmationPendient = false;
        }
    };
    UserComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            //console.log("profile is *** " + profile)
            _this.user = profile.user;
            _this.name = profile.user.name;
            _this.email = profile.user.email;
            _this.patients = profile.user.patients;
            _this.search();
            var settings = {
                email: _this.email,
            };
            _this.authService.genericPost('users/home', settings).subscribe(function (data) {
                if (data.success) {
                    //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                    //this.router.navigate(['/login']);
                    console.log(data.array);
                    _this.historical = data.array;
                    _this.historicalLenght = _this.historical.length;
                }
                else {
                }
            });
            //console.log("res1 *** " + profile.user.patients[1].name)
        }, function (err) {
            //console.log(err);
            _this.newclass();
            return false;
        });
    };
    UserComponent.prototype.onTimeOut = function () {
        var ctx = document.getElementById('canvas');
        //alert("finally");
        var options = { year: 'numeric', month: 'short', day: 'numeric' };
        var labels = this.patient.records.map(function (e) {
            return new Date(e.date).toLocaleDateString("en-US", options);
        });
        var dataBpm = this.patient.records.map(function (e) {
            return e.bpm;
        });
        ;
        var dataSys = this.patient.records.map(function (e) {
            return e.sys;
        });
        ;
        var dataDias = this.patient.records.map(function (e) {
            return e.dias;
        });
        ;
        if (this.patient.records.length > 0) {
            this.chart = new __WEBPACK_IMPORTED_MODULE_6_chart_js__["Chart"](ctx, {
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
                    },
                }
            });
        }
        this.isLoading = false;
    };
    UserComponent.prototype.updateChart = function (pat) {
        var _this = this;
        //console.log(this.patient.records.length);
        this.recordsLenght = this.patient.records.length;
        //console.log(this.recordsLenght);
        this.canChart = true;
        this.isLoading = true;
        setTimeout(function () {
            _this.onTimeOut();
        }, 500);
    };
    UserComponent.prototype.ngOnInit = function () {
        /*  if(!this.login){
          $("#loginScreen").add("show");
         }
      */
        this.recordsLenght = this.patient.records.length;
        //console.log('ngOninit ran *** ' + this.recordsLenght);
        //this.patients = [];
    };
    UserComponent.prototype.newclass = function () {
        //console.log("before");
        $("#loginScreen").addClass("show");
        //console.log("after");
    };
    UserComponent.prototype.notify = function () {
        $("#notifier").addClass("show");
    };
    UserComponent.prototype.onNewPatientSubmit = function () {
        var _this = this;
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
        var newPat = {
            email: this.email,
            name: this.patName,
            lastName: this.patLastName,
            id: this.patId,
            age: this.patAge,
            records: []
        };
        // Required Fields
        if (!this.validateService.validatePatient(newPat)) {
            //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            this.message2 = "Please fill in all fields";
            this.notify();
            //alert("Please fill in all fields");
            this.alreadySentForm = false;
            return false;
        }
        var settings = {
            document: this.patId,
        };
        this.authService.genericPost('users/patientLogin', settings).subscribe(function (data) {
            if (data.success) {
                //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                //this.router.navigate(['/login']);
                _this.message2 = "There is already a patient registered with this document number (It may have been registered by another nurse)";
                _this.canSubmit = false;
                _this.notify();
                _this.alreadySentForm = false;
                return;
            }
            else {
                //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                //this.router.navigate(['/register']);
                //this.message2 = data.msg;
                //this.notify();
                //this.confirmationPendient = true;
                //console.log("sending new patient: *** " + newPat.id + "*** \n\n\n");
                // Register user
                _this.authService.genericPost('users/newpatient', newPat).subscribe(function (data) {
                    if (data.success) {
                        //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                        //this.router.navigate(['/login']);
                        _this.message2 = "Patient saved";
                        _this.notify();
                        _this.confirmationPendient = true;
                    }
                    else {
                        //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                        //this.router.navigate(['/register']);
                        _this.message2 = "Something went wrong, please try again later";
                        _this.notify();
                        //this.confirmationPendient = true;
                        _this.onNewPatientCancel();
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
        }
        else {
            this.alreadySentForm = false;
        }
    };
    UserComponent.prototype.onNewPatientClick = function () {
        $("#newpat").addClass("show");
    };
    UserComponent.prototype.onNewPatientCancel = function () {
        $("#newpat").removeClass("show");
    };
    UserComponent.prototype.onEditPatientClick = function () {
        $("#editpat").addClass("show");
        this.patId = this.patient.document;
        this.patName = this.patient.name;
        this.patLastName = this.patient.lastName;
        this.patAge = this.patient.age.toString();
    };
    UserComponent.prototype.onEditPatientSubmit = function () {
        var _this = this;
        if (this.alreadySentForm) {
            return;
        }
        this.alreadySentForm = true;
        //Avoid duplicated ids
        this.canSubmit = true;
        this.patients.forEach(function (element) {
            // console.log("el " + element.document + "  patId " + this.patId)
            if (element.document == _this.patId && element != _this.patient) {
                _this.message2 = "There is already a patient with this document number";
                _this.canSubmit = false;
                _this.notify();
                return;
            }
        });
        if (this.canSubmit) {
            var settings = {
                email: this.email,
                id: this.patient.document,
                name: this.patName,
                lastName: this.patLastName,
                newId: this.patId,
                age: this.patAge,
                records: this.patient.records
            };
            console.log("records *** " + this.patient.records);
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
            this.authService.genericPost('users/updatepatient', settings).subscribe(function (data) {
                if (data.success) {
                    //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                    //this.router.navigate(['/login']);
                    _this.message2 = "Patient updated";
                    _this.notify();
                    _this.confirmationPendient = true;
                }
                else {
                    //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                    //this.router.navigate(['/register']);
                    _this.message2 = "Something went wrong, please try again later";
                    _this.notify();
                    //this.confirmationPendient = true;
                }
            });
        }
        else {
            this.alreadySentForm = false;
        }
    };
    UserComponent.prototype.onEditPatientCancel = function () {
        $("#editpat").removeClass("show");
    };
    UserComponent.prototype.onCheckVitalsClick = function () {
    };
    UserComponent.prototype.onAddRecordClick = function () {
        $("#newrec").addClass("show");
    };
    UserComponent.prototype.onAddRecordSubmit = function () {
        var _this = this;
        if (this.alreadySentForm) {
            return;
        }
        this.alreadySentForm = true;
        //alert("hello");
        var settings = {
            "email": this.email,
            "id": this.patient.document,
            "bpm": this.bpmField,
            "sys": this.sysField,
            "dias": this.diasField,
            "date": this.dateField
        };
        // Required Fields
        if (!this.validateService.validateRecord(settings)) {
            //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            this.message2 = "Please fill in all fields correctly";
            this.notify();
            //alert("Please fill in all fields");
            this.alreadySentForm = false;
            return false;
        }
        if (this.dateField == undefined || this.dateField.toString().length != 10) {
            this.message2 = "Please use a valid date";
            this.notify();
            //alert("Please fill in all fields");
            this.alreadySentForm = false;
            return false;
        }
        this.authService.genericPost('users/newrecord', settings).subscribe(function (data) {
            if (data.success) {
                //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                //this.router.navigate(['/login']);
                _this.message2 = "Record saved";
                _this.notify();
                _this.confirmationPendient = true;
            }
            else {
                //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                //this.router.navigate(['/register']);
                _this.message2 = "Could not save record, please try again later";
                _this.notify();
                _this.alreadySentForm = false;
                //this.confirmationPendient = true;
            }
        });
    };
    UserComponent.prototype.onAddRecordCancel = function () {
        $("#newrec").removeClass("show");
    };
    UserComponent.prototype.onEditRecordClick = function () {
        $("#editrec").addClass("show");
    };
    UserComponent.prototype.onEditRecordSubmit = function () {
        if (this.alreadySentForm) {
            return;
        }
        this.alreadySentForm = true;
        alert("editrec");
    };
    UserComponent.prototype.onEditRecordCancel = function () {
        $("#editrec").removeClass("show");
    };
    UserComponent.prototype.onDeleteClick = function (what, _oid) {
        $("#deleteconfirmation").addClass("show");
        this.deleteState = what;
        this.oid = _oid;
        // console.log(this.oid)
    };
    UserComponent.prototype.onDeleteCancel = function () {
        $("#deleteconfirmation").removeClass("show");
        this.deleteState = -1;
    };
    UserComponent.prototype.onDeleteSubmit = function () {
        var _this = this;
        if (this.alreadySentForm) {
            return;
        }
        this.alreadySentForm = true;
        //console.log("*** going to compare " + this.deleteState + " ***")
        //delConfPend
        if (this.deleteState == 0) {
            this.deleteState = -1;
            var settings = {
                email: this.email,
                id: this.patient.document,
            };
            this.authService.genericPost('users/removepatient', settings).subscribe(function (data) {
                if (data.success) {
                    //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                    //this.router.navigate(['/login']);
                    _this.message2 = "Patient deleted";
                    _this.notify();
                    _this.confirmationPendient = true;
                }
                else {
                    //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                    //this.router.navigate(['/register']);
                    _this.message2 = "Something went wrong, please try again later";
                    _this.notify();
                    //this.confirmationPendient = true;
                }
            });
        }
        else if (this.deleteState == 1) {
            this.deleteState = -1;
            var settings = {
                email: this.email,
                id: this.patient.document,
                _id: { $oid: this.oid }
            };
            this.authService.genericPost('users/removerecord', settings).subscribe(function (data) {
                if (data.success) {
                    //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                    //this.router.navigate(['/login']);
                    _this.message2 = "Record deleted";
                    _this.notify();
                    _this.confirmationPendient = true;
                }
                else {
                    //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                    //this.router.navigate(['/register']);
                    _this.message2 = "Something went wrong, please try again later";
                    _this.notify();
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
    };
    UserComponent.prototype.search = function () {
        var term = this.searchTerm.toLowerCase();
        this.filteredItems = this.patients.filter(function (tag) {
            return tag.lastName.toLowerCase().indexOf(term) >= 0;
        });
    };
    UserComponent.prototype.onHistoryClick = function () {
        //alert(this.patients);
        //this.patient._id = "xx";
        window.location.reload();
    };
    UserComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        /*this.flashMessage.show('You are logged out', {
          cssClass: 'alert-success', timeout: 3000
        });*/
        this.message2 = "Leaving already? See you soon :)";
        this.notify();
        // $("#loginScreen").addClass("show");
        this.login = false;
        //this.router.navigate(['/']);
        //location.reload();
        $("#loginScreen").addClass("show");
        //his.router.navigate(['/login']);
        return false;
    };
    UserComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (this.alreadySentForm) {
            return;
        }
        this.alreadySentForm = true;
        var user = {
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateLogin(user)) {
            //this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            this.message2 = "Please fill in all fields";
            this.notify();
            this.alreadySentForm = false;
            //alert("Please fill in all fields");
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.message2 = "Welcome, " + data.user.name;
                _this.notify();
                _this.login = true;
                _this.confirmationPendient = true;
                _this.isNurse = true;
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
            }
            else {
                //this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
                _this.message2 = data.msg + " ";
                _this.notify();
                _this.alreadySentForm = false;
                //this.router.navigate(['login']);
            }
        });
    };
    UserComponent.prototype.onPatLogSubmit = function () {
        var _this = this;
        //alert("login");
        var settings = {
            document: this.logIDnum,
        };
        this.authService.genericPost('users/patientLogin', settings).subscribe(function (data) {
            if (data.success) {
                //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                //this.router.navigate(['/login']);
                _this.message2 = "Hi " + data.tmp.name;
                _this.patient = data.tmp;
                _this.updateChart(_this.patient);
                _this.name = _this.patient.name;
                _this.isNurse = false;
                _this.notify();
                _this.confirmationPendient = true;
                $("#loginScreen").removeClass("show");
            }
            else {
                //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                //this.router.navigate(['/register']);
                _this.message2 = data.msg;
                _this.notify();
                //this.confirmationPendient = true;
            }
        });
    };
    UserComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (this.alreadySentForm) {
            return;
        }
        this.alreadySentForm = true;
        var user = {
            name: this.name,
            email: this.email,
            password: this.password
        };
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
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                //this.router.navigate(['/login']);
                _this.message2 = data.msg + " ";
                _this.notify();
                _this.alreadySentForm = false;
            }
            else {
                //this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                //this.router.navigate(['/register']);
                _this.message2 = data.msg + " ";
                _this.notify();
                _this.alreadySentForm = false;
            }
        });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        //this.isDev = true;  // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        //console.log(localStorage);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        //console.log(this.http.post('users/profile', { headers: headers }) );
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('email', user.email);
        //console.log(localStorage);
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        //console.log("authToken: " + this.authToken);
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.email = null;
        localStorage.clear();
    };
    /* ADDED FUNCTIONS */
    AuthService.prototype.genericPost = function (url, user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.password == undefined) {
            /* if(user.name.replace(/\s/g, '') == "" || user.email.replace(/\s/g, '') == "" || user.password.replace(/\s/g, '') == "" ) { */
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            /* if(user.name.replace(/\s/g, '') == "" || user.email.replace(/\s/g, '') == "" || user.password.replace(/\s/g, '') == "" ) { */
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePatient = function (pat) {
        if (pat.name == undefined || pat.lastName == undefined || pat.id == undefined || pat.age == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePatientEdit = function (pat) {
        //console.log(pat.lastName)
        /*  if(pat.name.replace(/\s/g, '') == "" || pat.lastName.replace(/\s/g, '') == "" || pat.newId == undefined || pat.age == undefined) { */
        if (pat.name == undefined || pat.lastName == undefined || pat.newId == undefined || pat.age == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateRecord = function (rec) {
        if (rec.bpm == undefined || rec.sys == undefined || rec.dias == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map