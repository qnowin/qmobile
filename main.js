(self["webpackChunkqmobile"] = self["webpackChunkqmobile"] || []).push([["main"],{

/***/ 8789:
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIService: () => (/* binding */ APIService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/properties */ 8101);
/* harmony import */ var _env_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env.properties */ 2430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);







class APIService {
  getUserID() {
    return _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables.iUserID;
  }
  getUserType() {
    return _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables.sUserType;
  }
  constructor(http) {
    this.http = http;
    console.log("END POINT********", _env_properties__WEBPACK_IMPORTED_MODULE_1__.sEndPoint);
  }
  mergeJSON(target, add) {
    function isObject(obj) {
      if (typeof obj == "object") {
        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            return true; // search for first object prop
          }
        }
      }

      return false;
    }
    for (var key in add) {
      if (add.hasOwnProperty(key)) {
        if (target[key] && isObject(target[key]) && isObject(add[key])) {
          this.mergeJSON(target[key], add[key]);
        } else {
          target[key] = add[key];
        }
      }
    }
    return target;
  }
  performLogin(sService, data) {
    // if (Global_Variables.isConnected == false) {
    //   this.showNetworkError();
    //   return Promise.reject("No Network");
    // }
    return this.http.post(_env_properties__WEBPACK_IMPORTED_MODULE_1__.sEndPoint + sService, data).toPromise();
    //      .map(res => res.json()).toPromise();
  }

  getHeaders() {
    // console.log("*** Setting Header Token: ", Global_Variables.token?.['access_token']);
    var oHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables.token?.['access_token']
      // "ks-x-authorization": "Bearer: " + Global_Variables.token?.['access_token'],
    });

    return {
      headers: oHeaders
    };
  }
  // async showNetworkError() {
  //   this.alertCtrl.create({
  //     message: 'No Network',
  //     subHeader: 'Pls check internet connection',
  //     buttons: ['Dismiss']
  //   }).then(alert => alert.present() );
  // }
  send2Server(url, bPost = false, oItem = null) {
    // if (Global_Variables.isConnected == false) {
    //   this.showNetworkError();
    //   return Promise.reject("No Network");
    // }
    if (bPost) {
      return this.http.post(url, oItem, this.getHeaders()).toPromise();
      //   .map(res => res.json()).toPromise();
      // return this.http.post(sURL, oItem, this.getHeaders())
      //   .map(res => res.json()).toPromise();
    }

    return this.http.get(url, this.getHeaders()).toPromise();
    // return this.http.get(sURL, this.getHeaders())
    //   .map(res => res.json()).toPromise();
  }

  getURL() {
    return _app_properties__WEBPACK_IMPORTED_MODULE_0__.sURL + _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables.iUserID + "/";
  }
  send2ServerNoHeader(url, bPost = false, oItem = null) {
    if (bPost) {
      return this.http.post(url, oItem).toPromise();
    }
    return this.http.get(url).toPromise();
  }
  send2ServerC(sPartialURL, bPost = false, oItem = null) {
    // if (Global_Variables.isConnected == false) {
    //   this.showNetworkError();
    //   return Promise.reject("No Network");
    // }
    if (bPost) {
      return this.http.post(_app_properties__WEBPACK_IMPORTED_MODULE_0__.sURL + sPartialURL, oItem, this.getHeaders()).toPromise();
      // return this.http.post(sURL + sPartialURL, oItem, this.getHeaders())
      //   .map(res => res.json()).toPromise();
    }

    return this.http.get(_app_properties__WEBPACK_IMPORTED_MODULE_0__.sURL + sPartialURL, this.getHeaders()).toPromise();
    // return this.http.get(sURL + sPartialURL, this.getHeaders())
    //   .map(res => res.json()).toPromise();
  }

  send2ServerP(sPartialURL, bPost = false, oItem = null) {
    console.log(sPartialURL);
    // if (Global_Variables.isConnected == false) {
    //   this.showNetworkError();
    //   return Promise.reject("No Network");
    // }
    if (bPost) {
      return this.http.post(this.getURL() + sPartialURL, oItem, this.getHeaders()).toPromise();
      // return this.http.post(this.getURL() + sPartialURL, oItem, this.getHeaders())
      //   .map(res => res.json()).toPromise();
    }

    return this.http.get(this.getURL() + sPartialURL, this.getHeaders()).toPromise();
    // return this.http.get(this.getURL() + sPartialURL, this.getHeaders())
    //   .map(res => res.json()).toPromise();
  }

  send2ServerPlainText(sPartialURL, bPost = false, oItem = null) {
    // if (Global_Variables.isConnected == false) {
    //   this.showNetworkError();
    //   return Promise.reject("No Network");
    // }
    if (bPost) {
      return this.http.post(this.getURL() + sPartialURL, oItem, this.getHeaders()).toPromise();
    }
    return this.http.get(this.getURL() + sPartialURL, this.getHeaders()).toPromise();
  }
  fileUpload(sUrl, formData) {
    // if (Global_Variables.isConnected == false) {
    //   this.showNetworkError();
    //   return Promise.reject("No Network");
    // }
    let headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("enctype", "multipart/form-data");
    headers.append("Accept", "application/json");
    console.log(formData);
    //    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      // for(var i = 0; i < files.length; i++) {
      //     formData.append("uploads[]", files[i], files[i].name);
      // }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            //            console.log(xhr.response);
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
      //path = 'upload/' ;
      xhr.open("POST", sUrl, true);
      xhr.send(formData);
    });
  }
  buildImageURL(oItem, i = -1) {
    let img = oItem.IMAGE_URL;
    if (img === undefined || img === null) return "";
    if (img.startsWith("http://") || img.startsWith("https://")) return img;
    if (i != -1) return _app_properties__WEBPACK_IMPORTED_MODULE_0__.sIMAGE_URL + i + "/" + img;
    return _app_properties__WEBPACK_IMPORTED_MODULE_0__.sIMAGE_URL + oItem.ID + "/" + img;
  }
  sort(oData, oFields) {
    // this.oAPIService.sort ( this.oItems, [{field: 'PICKUPON', direction: 'desc' }, {field: 'PICKUPSTART', direction: 'desc' }, {field: 'BOOKINGREF', direction: 'desc'}]) ;
    oData.sort(function (a, b) {
      for (var i = 0; i < oFields.length; i++) {
        var retval = a[oFields[i].field] < b[oFields[i].field] ? -1 : a[oFields[i].field] > b[oFields[i].field] ? 1 : 0;
        if (oFields[i].direction == "desc") {
          retval = retval * -1;
        }
        if (retval !== 0) {
          return retval;
        }
      }
      return 0;
    });
  }
  stringToDate(_date, _format, _delimiter) {
    // stringToDate("17/9/2014","dd/MM/yyyy","/");
    // stringToDate("9/17/2014","mm/dd/yyyy","/")
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var dateItems = _date.split(_delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(parseInt(dateItems[yearIndex]), month, parseInt(dateItems[dayIndex]));
    return formatedDate;
  }
  setTime(oDate, sTime) {
    //       tests = ['01.25 PM', '01:25pm', '1:25 PM', '11.35 PM', '12.45 PM', '01.25 AM', '11.35 AM', '12.45 AM'],
    var timeReg = /(\d+)[\.|:](\d+)\s?(\w+)/;
    var parts = sTime.match(timeReg);
    var hours = /am/i.test(parts[3]) ? function (am) {
      return am < 12 ? am : 0;
    }(parseInt(parts[1], 10)) : function (pm) {
      return pm < 12 ? pm + 12 : 12;
    }(parseInt(parts[1], 10));
    var minutes = parseInt(parts[2], 10);
    oDate.setHours(hours);
    oDate.setMinutes(minutes);
    oDate.setSeconds(0);
    return oDate;
  }
  setTime24Hrs(oDate, sTime) {
    var s = sTime.split(":");
    var hours = parseInt(s[0]);
    var minutes = parseInt(s[1]);
    oDate.setHours(hours);
    oDate.setMinutes(minutes);
    return oDate;
  }
  static #_ = this.ɵfac = function APIService_Factory(t) {
    return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: APIService,
    factory: APIService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-guard.service */ 7937);
/* harmony import */ var _entities_entities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/entities.component */ 9674);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.component */ 2231);
/* harmony import */ var _business_hours_business_hours_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./business-hours/business-hours.component */ 3810);
/* harmony import */ var _my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-appointments/my-appointments.component */ 1461);
/* harmony import */ var _queue_status_queue_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queue-status/queue-status.component */ 5617);
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appointment/appointment.component */ 5442);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 4439);
/* harmony import */ var _reach_us_reach_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reach-us/reach-us.component */ 8946);
/* harmony import */ var _take_queue_take_queue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./take-queue/take-queue.component */ 4509);
/* harmony import */ var _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clinics/clinics.component */ 2004);
/* harmony import */ var _not_supported_not_supported_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-supported/not-supported.component */ 6918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
















const routes = [{
  path: "",
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: "login",
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: "not_supported",
  component: _not_supported_not_supported_component__WEBPACK_IMPORTED_MODULE_12__.NotSupportedComponent
}, {
  path: "clinics",
  component: _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_11__.ClinicsComponent,
  canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
}, {
  path: "entities",
  component: _entities_entities_component__WEBPACK_IMPORTED_MODULE_2__.EntitiesComponent,
  canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
}, {
  path: "services",
  component: _services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent,
  canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
}, {
  path: "businesshours",
  component: _business_hours_business_hours_component__WEBPACK_IMPORTED_MODULE_4__.BusinessHoursComponent,
  canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
}, {
  path: "queuestatus",
  component: _queue_status_queue_status_component__WEBPACK_IMPORTED_MODULE_6__.QueueStatusComponent,
  canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
}, {
  path: "appointment",
  component: _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_7__.AppointmentComponent,
  canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
}, {
  path: "myappointments",
  component: _my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_5__.MyAppointmentsComponent,
  canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
}, {
  path: "contactus",
  component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__.ContactUsComponent
}, {
  path: "reachus",
  component: _reach_us_reach_us_component__WEBPACK_IMPORTED_MODULE_9__.ReachUsComponent
}, {
  path: "takequeue",
  component: _take_queue_take_queue_component__WEBPACK_IMPORTED_MODULE_10__.TakeQueueComponent
}, {
  path: "**",
  redirectTo: "/login"
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/properties */ 8101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_title_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/title-bar.service */ 9018);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _web_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-notification.service */ 6366);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 3228);













function AppComponent_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_mat_icon_1_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(oTBS, activatedRoute, matIconRegistry, domSanitizer, metaTagService, router, swPush, swUpdate, oWebNotificationService, deviceService) {
    this.oTBS = oTBS;
    this.activatedRoute = activatedRoute;
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
    this.metaTagService = metaTagService;
    this.router = router;
    this.swPush = swPush;
    this.swUpdate = swUpdate;
    this.oWebNotificationService = oWebNotificationService;
    this.deviceService = deviceService;
    this.sTitle = 'qmobile';
    this.sMqttStatus = '';
    this.isEnabled = this.swPush.isEnabled;
    this.isGranted = Notification.permission === 'granted';
    this.isMobile = false;
    // this.swPush.notificationClicks.subscribe( event => {
    //   console.log('Received notification: ', event);
    //   const url = event.notification.data.url;
    //   window.open(url, '_blank');
    // });
    this.isMobileBrowser();
    this.matIconRegistry.addSvgIcon("ksd-left", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/arrow-circle-left.svg"));
    this.matIconRegistry.addSvgIcon("ksd-right", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/arrow-circle-right.svg"));
    this.matIconRegistry.addSvgIcon("ksd-exchange", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/exchange.svg"));
    this.matIconRegistry.addSvgIcon("ksd-menu", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/menu.svg"));
    // console.log("***", this.activatedRoute.snapshot.queryParamMap.get('qr'));
    // console.log(activatedRoute.snapshot.queryParamMap);
    this.router.navigate(['login']);
  }
  isMobileBrowser() {
    var deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(deviceInfo);
    console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet); // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
    this.isMobile = !isDesktopDevice;
    this.isMobile = true;
    _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables.isMobile = this.isMobile;
    //return !isMobile ; // Not working
    //return true ;
    //   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //       return true
    //  }
    //  else{
    //       return false
    //   }
  }
  // getBackgroundColor(status) {
  //   console.log(status);
  //   status = this.sMqttStatus;
  //   this.sColor = "white";
  //   if (status == 'connected')
  //     this.sColor = "lightgreen";
  //   if (status == 'NOT connected')
  //     this.sColor = "red";
  //   if (status == 'Not connected')
  //     this.sColor = "blue";
  //   console.log(this.sColor);
  //   return this.sColor;
  // }
  // ngAfterViewInit() {
  //   window.location.reload();
  // }
  // sColor = "red";
  ngOnInit() {
    // https://www.positronx.io/angular-seo-set-dynamic-page-title-meta-tags-in-universal-app/
    this.metaTagService.addTags([{
      name: 'keywords',
      content: 'Remote Queue, ezQ, ezQueue, Clinic'
    }, {
      name: 'robots',
      content: 'index, follow'
    }, {
      name: 'author',
      content: 'Walter Gunasekaran'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      name: 'date',
      content: '2020-06-31',
      scheme: 'YYYY-MM-DD'
    }, {
      charset: 'UTF-8'
    }]);
    this.oTBS.oCurrentTitle.subscribe(obj => {
      setTimeout(() => {
        this.sTitle = obj.title;
        this.sMqttStatus = obj.status;
        // console.log(this.sColor, this.sMqttStatus);
      }, 1);
    });
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        console.log("New Version Available.");
        if (confirm("New version available. Load it ?")) {
          window.location.reload();
        }
      });
    }
    // http://d-ezq.ignorelist.com/?a75bc6ec-344a-006b-28b4-9e949866a485
    // http://localhost:8888/?a75bc6ec-344a-006b-28b4-9e949866a485
    //    http://localhost:8888/?ff=a75bc6ec-344a-006b-28b4-9e949866a485
    //    this.activatedRoute.queryParams.
    console.log(this.activatedRoute.snapshot);
    this.activatedRoute.queryParams.subscribe(parameter => {
      console.log("^^^^^^^", parameter);
      console.log("^^^^^^^", parameter.parameter);
    });
    // console.log(this.activatedRoute);
    // console.log(this.activatedRoute.snapshot.queryParamMap.keys);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_title_bar_service__WEBPACK_IMPORTED_MODULE_1__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_7__.SwPush), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_7__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_web_notification_service__WEBPACK_IMPORTED_MODULE_2__.WebNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__.DeviceDetectorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 26,
    vars: 7,
    consts: [["color", "accent"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "menu-spacer"], [1, "connection-status"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLink", "click"], [1, "nav-caption"], [2, "height", "100%"], ["mat-icon-button", "", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_mat_icon_1_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-sidenav-container")(8, "mat-sidenav", null, 4)(10, "mat-nav-list")(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Clinics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Q Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "My Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_a_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r1.close());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-sidenav-content")(24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.sTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.sMqttStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/entities");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/queuestatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/myappointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/contactus");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ 9099);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-webstorage-service */ 4878);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _entities_entities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/entities.component */ 9674);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ 2231);
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-pipes */ 4901);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _business_hours_business_hours_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./business-hours/business-hours.component */ 3810);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/pipes.module */ 2898);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _queue_status_queue_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./queue-status/queue-status.component */ 5617);
/* harmony import */ var _my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-appointments/my-appointments.component */ 1461);
/* harmony import */ var _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appointment/appointment.component */ 5442);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 4439);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _reach_us_reach_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reach-us/reach-us.component */ 8946);
/* harmony import */ var _time24to12_format_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time24to12-format.pipe */ 5023);
/* harmony import */ var _take_queue_take_queue_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./take-queue/take-queue.component */ 4509);
/* harmony import */ var _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clinics/clinics.component */ 2004);
/* harmony import */ var _decimal_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./decimal.pipe */ 3393);
/* harmony import */ var _minutes_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./minutes.pipe */ 5248);
/* harmony import */ var _lang_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lang.pipe */ 2720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 1699);





// import { NoopAnimationsModule } from '@angular/platform-browser/animations';


















// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
// import { MaterialDesignFrameworkModule } from '@ajsf/material';
// import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4' ;




// import { DynamicFormBuilderModule } from "./dynamic-form-builder/dynamic-form-builder.module";


// import { AgmCoreModule } from "@agm/core";







// import { InputTextModule } from 'primeng/inputtext';
// import { InputTextareaModule } from 'primeng/inputtextarea';
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_21__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_21__.HashLocationStrategy
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_25__.StorageServiceModule,
    // MaterialDesignFrameworkModule,
    // Bootstrap4FrameworkModule,
    ngx_pipes__WEBPACK_IMPORTED_MODULE_26__.NgPipesModule,
    // NoopAnimationsModule,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__.PipesModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDividerModule,
    // InputTextModule,
    // InputTextareaModule,
    // DynamicFormBuilderModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyCM1xTx1C2EtwH3WR2zlvbBW8f-eg9sV20",
    // }),
    // MatProgressSpinnerModule,
    //    BrowserAnimationsModule,
    _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__.ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _entities_entities_component__WEBPACK_IMPORTED_MODULE_4__.EntitiesComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent, _business_hours_business_hours_component__WEBPACK_IMPORTED_MODULE_7__.BusinessHoursComponent, _queue_status_queue_status_component__WEBPACK_IMPORTED_MODULE_9__.QueueStatusComponent, _appointment_appointment_component__WEBPACK_IMPORTED_MODULE_11__.AppointmentComponent, _my_appointments_my_appointments_component__WEBPACK_IMPORTED_MODULE_10__.MyAppointmentsComponent, _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__.ContactUsComponent, _reach_us_reach_us_component__WEBPACK_IMPORTED_MODULE_13__.ReachUsComponent, _take_queue_take_queue_component__WEBPACK_IMPORTED_MODULE_15__.TakeQueueComponent, _clinics_clinics_component__WEBPACK_IMPORTED_MODULE_16__.ClinicsComponent, _time24to12_format_pipe__WEBPACK_IMPORTED_MODULE_14__.Time24to12FormatPipe, _decimal_pipe__WEBPACK_IMPORTED_MODULE_17__.DecimalPipe, _minutes_pipe__WEBPACK_IMPORTED_MODULE_18__.MinutesPipe, _lang_pipe__WEBPACK_IMPORTED_MODULE_19__.LangPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_25__.StorageServiceModule,
    // MaterialDesignFrameworkModule,
    // Bootstrap4FrameworkModule,
    ngx_pipes__WEBPACK_IMPORTED_MODULE_26__.NgPipesModule,
    // NoopAnimationsModule,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__.PipesModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexLayoutModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__.MatGridListModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDividerModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_33__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 5442:
/*!******************************************************!*\
  !*** ./src/app/appointment/appointment.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppointmentComponent: () => (/* binding */ AppointmentComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 8540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ 647);

// import { TimeInfo, getUnbookedTime  } from '@uqapp/timeslots';









function AppointmentComponent_div_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-button-toggle", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppointmentComponent_div_0_div_10_Template_mat_button_toggle_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const o_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.onDateClick(o_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", o_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](o_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](o_r8.dow);
  }
}
function AppointmentComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Available appointments for ", _r1 == null ? null : _r1.value == null ? null : _r1.value.date, " ");
  }
}
function AppointmentComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Selected Appointment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r4.oSelectedDateItem.date, " @ ", ctx_r4.oSelectedTimeSlot.time_am_pm, " ");
  }
}
function AppointmentComponent_div_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "You already have an existing appointment on this date. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Pls cancel before rescheduling");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AppointmentComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppointmentComponent_div_0_div_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.confirmBooking());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r6.bHasOpenAppointment);
  }
}
function AppointmentComponent_div_0_mat_grid_list_16_mat_grid_tile_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-tile")(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppointmentComponent_div_0_mat_grid_list_16_mat_grid_tile_2_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const f_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.onSelectTimeSlot(f_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r13.bHasOpenAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](f_r14.time_am_pm);
  }
}
function AppointmentComponent_div_0_mat_grid_list_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppointmentComponent_div_0_mat_grid_list_16_mat_grid_tile_2_Template, 3, 2, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.oFreeTimeSlots);
  }
}
function AppointmentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "mat-button-toggle-group", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AppointmentComponent_div_0_div_10_Template, 6, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AppointmentComponent_div_0_div_11_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, AppointmentComponent_div_0_div_13_Template, 4, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AppointmentComponent_div_0_div_14_Template, 4, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AppointmentComponent_div_0_div_15_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AppointmentComponent_div_0_mat_grid_list_16_Template, 3, 1, "mat-grid-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.oEntity.ENAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.oEntity.ADDRESS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.oItem.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r0.oItems[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.oItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.bHasOpenAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.oSelectedTimeSlot != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.bHasOpenAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.oSelectedTimeSlot != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.bHasOpenAppointment == false);
  }
}
// import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
class AppointmentComponent {
  onConnectionStatusChange(sMqttStatus) {
    this.oTBS.titleChange({
      title: this.sTitle,
      status: sMqttStatus
    });
  }
  constructor(oTBS, oLocation, oRouter, oAPIService) {
    this.oTBS = oTBS;
    this.oLocation = oLocation;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.sTitle = 'Book an Appointment';
    this.sEntityID = -9;
    this.sServiceID = -9;
    this.bLoaded = false;
    this.oOpenHours = [];
    this.oItems = [];
    this.oFreeTimeSlots = [];
    this.oSelectedDateItem = null;
    this.bHasOpenAppointment = false;
    this.oSelectedTimeSlot = null;
    this.onConnectionStatusChange('');
    var oState = this.oLocation.getState();
    this.oItem = oState['oServiceItem'];
    this.oEntity = oState['oEntityItem'];
    console.log(this.oEntity);
    console.log(this.oItem);
    // this.oEntity = this.oLocation.getState();
    // console.log(this.oEntity) ;
    if (this.oItem === undefined) {
      this.oRouter.navigateByUrl('entities');
      return;
    }
    //    console.log(this.oItem);
    this.sEntityID = this.oItem.ENTITYID;
    this.sServiceID = this.oItem.ID;
  }
  groupByDay(oItems) {
    var groups = oItems.reduce(function (o, a) {
      var m = a.DAYOFWEEK;
      o[m] ? o[m].data.push(a) : o[m] = {
        DAYOFWEEK: m,
        data: [a],
        DOW: _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.DOW[Number(m)]
      };
      return o;
    }, {});
    var result = Object.keys(groups).map(function (k) {
      return groups[k];
    });
    //    console.log ( result ) ;
    return result;
  }
  ngOnInit() {
    var today = moment__WEBPACK_IMPORTED_MODULE_0__();
    var dt = today;
    for (var i = 0; i < 15; i++) {
      this.oItems.push({
        date: dt.format('YYYY-MMM-DD'),
        title: dt.format('DD'),
        dow: dt.format('ddd')
      });
      dt = today.add(1, 'd');
    }
    this.oAPIService.send2ServerP("services/" + this.sServiceID + "/wh/fetch").then(data => {
      this.oOpenHours = this.groupByDay(data.result);
      //      console.log(this.oOpenHours);
      var v = this.oItems[0];
      this.onDateClick(v);
      this.bLoaded = true;
    });
  }
  onDateClick(oItem) {
    this.bHasOpenAppointment = false;
    this.oSelectedDateItem = oItem;
    //    console.log(oItem);
    this.oSelectedTimeSlot = null;
    var booked_times = []; // [1000, 1330, 1500, 1100, 1130];
    this.oAPIService.send2ServerP("services/appointments/fetch/" + this.sEntityID + "/" + this.sServiceID, true, {
      DATE: this.oSelectedDateItem.date
    }).then(data => {
      //      console.log(data);
      // booked_times = [];
      if (data.result.length > 0) {
        data.result.forEach(e => {
          if (e.UID == _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.iUserID) {
            this.bHasOpenAppointment = true;
          }
          booked_times.push(e.AQNUMBER);
        });
      }
      var now = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MMM-DD');
      //     console.log("" + moment().format("HHmm"));
      var dtNow = moment__WEBPACK_IMPORTED_MODULE_0__(now, "YYYY-MMM-DD");
      this.oFreeTimeSlots = [];
      // console.log(this.oOpenHours);
      this.oOpenHours.forEach(e => {
        if (e.DOW === oItem.dow) {
          // console.log(oItem.dow);
          // console.log(this.oSelectedDateItem.date, now);
          if (moment__WEBPACK_IMPORTED_MODULE_0__(this.oSelectedDateItem.date, "YYYY-MMM-DD").isBefore(dtNow, 'day')) {
            // console.log("isBefore");
            return;
          }
          //        console.log(e);
          //          if (moment(this.oSelectedDateItem.date, "YYYY-MMM-DD").isSame(dtNow, 'day') && parseInt(e.data[0].TIME_CLOSE) < parseInt(moment().format("HHmm"))) return;
          this.oFreeTimeSlots = [];
          for (var i = 0; i < e.data.length; i++) {
            console.log(e.data[i].TIME_OPEN);
            this.oFreeTimeSlots = this.oFreeTimeSlots.concat(this.getUnbookedTime(e.data[i].TIME_OPEN, e.data[i].TIME_CLOSE, 30, booked_times));
            // console.log(this.oFreeTimeSlots);
          }
        }
      });
    });
  }

  onSelectTimeSlot(oTimeSlot) {
    if (this.bHasOpenAppointment) return;
    this.oSelectedTimeSlot = oTimeSlot;
    //    console.log(this.oSelectedTimeSlot);
  }

  confirmBooking() {
    //    console.log(this.oSelectedDateItem.date + " " + JSON.stringify(this.oSelectedTimeSlot));
    this.oAPIService.send2ServerP("services/appointments/book/" + this.sEntityID + "/" + this.sServiceID + "", true, {
      DATE: this.oSelectedDateItem.date,
      TIME: this.oSelectedTimeSlot.db_time
    }).then(data => {
      if (data._error) {
        alert("Sorry, that slot was just taken.");
        return;
      }
      //     console.log(data);
      //      this.onDateClick(this.oSelectedDateItem) ;
      this.oRouter.navigateByUrl('myappointments');
    });
  }
  // TODO Once verified use timeslot module - Changed already replicated
  // Provides time slots given some interval
  getTime(num) {
    var tempHour = String(Math.trunc(num / 60));
    var hour = tempHour + "".length === 1 ? "0" + tempHour : tempHour;
    var min = num % 60 === 0 ? "00" : num % 60;
    var sAMPM = 'am';
    var hr = hour;
    if (hour >= 12) {
      hr = hour - 12;
      if (hr == 0) hr = 12;
      sAMPM = 'pm';
    }
    return {
      num: num,
      time: hour + ':' + min,
      db_time: +hour * 100 + +min,
      time_am_pm: hr + ':' + min + ' ' + sAMPM
    };
  }
  getTimeSlots(blockTimes, showTimeAsString, interval, includeStartBlockedTime, includeEndBlockedTime) {
    var times = 1,
      sums = 60;
    var me = this;
    includeStartBlockedTime = includeStartBlockedTime === true ? true : false;
    includeEndBlockedTime = includeEndBlockedTime === true ? true : false;
    sums = interval;
    times = 60 / sums;
    var start = 0;
    var dateTimes = Array(Math.round(24 * times)).fill(0).map(function (_) {
      start = start + sums;
      return start;
    });
    blockTimes = Array.isArray(blockTimes) === true && blockTimes.length > 0 ? blockTimes : [];
    if (blockTimes.length > 0) {
      dateTimes = blockTimes.reduce(function (acc, x) {
        return acc.filter(function (y) {
          return includeStartBlockedTime == true ? y <= x[0] : y < x[0];
        }).concat(acc.filter(function (y) {
          return includeEndBlockedTime == true ? y >= x[1] : y > x[1];
        }));
      }, dateTimes);
    }
    if (showTimeAsString === true) {
      return dateTimes.map(function (x) {
        return me.getTime(x);
      }).reduce(function (accc, element) {
        accc["" + element.num] = element.time;
        return accc;
      }, {});
    }
    return dateTimes;
  }
  convertTime2Numbers(num) {
    //this is what is stored in DB
    console.log("Converting", num, "" + parseInt(num) / 100 * 60, "+", +num % 100);
    return parseInt("" + parseInt(num) / 100) * 60 + num % 100;
  }
  getUnbookedTime(start_time, end_time, interval, booked_times) {
    var me = this;
    var blocked_times = [];
    for (var i = 0; i < booked_times.length; i++) {
      var b = this.convertTime2Numbers(booked_times[i]);
      blocked_times.push([b, b]);
    }
    var st = this.convertTime2Numbers(start_time);
    var et = this.convertTime2Numbers(end_time);
    var oFree = me.getTimeSlots(blocked_times, false, interval, true, false);
    let oAvailableTimes = oFree.filter(time => {
      return time >= st && time < et;
    }).map(function (x) {
      return me.getTime(x);
    });
    return oAvailableTimes;
  }
  static #_ = this.ɵfac = function AppointmentComponent_Factory(t) {
    return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_2__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__.APIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppointmentComponent,
    selectors: [["app-appointment"]],
    decls: 1,
    vars: 1,
    consts: [["class", "full-height", 4, "ngIf"], [1, "full-height"], [1, "entity-title"], [1, "service-title"], [1, "scroll"], [3, "value"], ["group", "matButtonToggleGroup"], [4, "ngFor", "ngForOf"], ["class", "example-selected-value", 4, "ngIf"], [1, "center"], ["style", "padding:10px", 4, "ngIf"], [4, "ngIf"], ["cols", "3", "rowHeight", "4:2", 4, "ngIf"], [1, "dateDDWWW", 3, "value", "click"], [1, "day"], [1, "dow"], [1, "example-selected-value"], [2, "padding", "10px"], ["mat-raised-button", "", "color", "accent", "full", "", 3, "disabled", "click"], ["cols", "3", "rowHeight", "4:2"], [1, "appointment-slots"], ["mat-raised-button", "", "color", "accent", 1, "time", 3, "disabled", "click"]],
    template: function AppointmentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppointmentComponent_div_0_Template, 17, 10, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridTile],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7937:
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuardService: () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 4289);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties */ 8101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 6466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






class AuthGuardService {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    var _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(yield _this.authService.checkAuthenticated())) {
        // this.router.navigate(['']);
        var data = {};
        data.DEVICEUID = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
        // data.email = uuidv4();
        // data.password = data.email;
        _this.authService.login(_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.AUTH_URL, data, 'entities');
        return false;
      }
      return true;
    })();
  }
  static #_ = this.ɵfac = function AuthGuardService_Factory(t) {
    return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthGuardService,
    factory: AuthGuardService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6466:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 8789);
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage-service */ 4878);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/properties */ 8101);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ 951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);








const STORAGE_KEY = "token";
const DEMOGRAPICS = "location";
const DEVICE_UID = "user_identification";
class AuthService {
  constructor(oAPI, oStorage, router) {
    this.oAPI = oAPI;
    this.oStorage = oStorage;
    this.router = router;
    this.oAPIService = null;
    this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.oAPIService = oAPI;
    this.clearToken();
  }
  checkAuthenticated() {
    var _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.info("checkAuthenticated");
      const authenticated = yield _this.exists();
      console.info(authenticated);
      if (authenticated) _this.isAuthenticated.next(authenticated);
      return authenticated;
    })();
  }
  login(sService, data, sRedirectURL = null) {
    var _this2 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const id = yield _this2.oAPIService?.performLogin(sService, data);
        // console.info(id);
        _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.token = id;
        if (id) {
          console.log("***ID", id);
          if (id['status'] == 'error') {
            console.error("*** FATAL Login Failed. ", id);
          }
          // let o = this.jwtHelper.decodeToken(id.access_token);
          let o = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(id.access_token);
          let user_fields = JSON.parse(o.user_fields);
          // console.log(user_fields)
          // o = o.data;
          // Global_Variables.sEntityID = o.ENTITYID;
          _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.iUserID = user_fields.UID;
          _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.sUserType = user_fields.TYPE;
          _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.token = id;
          _this2.oStorage.set(STORAGE_KEY, id);
          // console.log(Global_Variables)
          _this2.isAuthenticated.next(true);
          if (sRedirectURL != null) _this2.router.navigate([sRedirectURL]);
          return;
        }
      } catch (err) {
        console.error(err);
        // Global_Variables.token = "SkipValidation"
        // this.isAuthenticated.next(true);
        // await this.router.navigate(['qdisplay']);
        // return ;
        throw Error(JSON.stringify(err.error));
      }
      // console.log("Not Authenticated") ;
      // throw Error('Not Authenticated ');
    })();
  }

  logout(redirect) {
    var _this3 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this3.oStorage.remove(STORAGE_KEY);
        _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.token = null;
        _this3.isAuthenticated.next(false);
        _this3.router.navigate([redirect]);
      } catch (err) {
        console.error(err);
      }
    })();
  }
  getDeviceID() {
    return this.oStorage.get(DEVICE_UID);
  }
  saveDeviceID(sDeviceID) {
    this.oStorage.set(DEVICE_UID, sDeviceID);
    return sDeviceID;
  }
  getDemographics() {
    return this.oStorage.get(DEMOGRAPICS);
  }
  saveDemographics(o) {
    // if (o.latitude === undefined) {
    //   var t = this.oStorage.get(DEMOGRAPICS);
    //   if (t !== undefined) {
    //     o.lat = t.latitude;
    //     o.lng = t.latitude;
    //   }
    // }
    this.oStorage.set(DEMOGRAPICS, o);
  }
  clearToken() {
    this.oStorage.remove(STORAGE_KEY);
    _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.bSaved = false;
  }
  exists() {
    var id = this.oStorage.get(STORAGE_KEY);
    if (id) {
      try {
        console.log(">>ID", id);
        let o = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(id.access_token);
        let user_fields = JSON.parse(o.user_fields);
        // console.info(user_fields);
        _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.sEntityID = user_fields.ENTITYID;
        _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.iUserID = user_fields.UID;
        _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.sUserType = user_fields.TYPE;
        _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.token = id;
        //TODO check for Expiry
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  }
  storeDeviceRegistrationInfo() {
    // NOT TESTED
    if (_app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.bSaved) return;
    if (_app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.sNewDeviceReg != null && _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.sDeviceReg != _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.sNewDeviceReg) {
      // console.log("*** NEW DEVICE *** ", Global_Variables.sNewDeviceReg);
      // this.oAPIService.send2ServerP("registerdevice/" + Global_Variables.sNewDeviceReg, true, { DEVICEUID: Global_Variables.sDeviceUUID }).then((data: any) => {
      //   Global_Variables.bSaved = true;
      // });
    }
    return;
  }
  loadUserInfo(data) {
    var _this4 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.exists()) return true;
      return _this4.login(_app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.AUTH_URL, data, "entities");
    })();
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.APIService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_6__.LOCAL_STORAGE), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 3810:
/*!************************************************************!*\
  !*** ./src/app/business-hours/business-hours.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessHoursComponent: () => (/* binding */ BusinessHoursComponent)
/* harmony export */ });
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/time-format.pipe */ 8041);










function BusinessHoursComponent_div_0_mat_card_title_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Open Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BusinessHoursComponent_div_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Sorry, we are closed today");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BusinessHoursComponent_div_0_mat_card_content_9_mat_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 10)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, o_r7.TIME_OPEN), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, o_r7.TIME_CLOSE), "");
  }
}
function BusinessHoursComponent_div_0_mat_card_content_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-content")(1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BusinessHoursComponent_div_0_mat_card_content_9_mat_list_item_2_Template, 5, 6, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.oToday);
  }
}
function BusinessHoursComponent_div_0_mat_grid_list_12_mat_list_item_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 10)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, o_r10.TIME_OPEN), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, o_r10.TIME_CLOSE), "");
  }
}
function BusinessHoursComponent_div_0_mat_grid_list_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-grid-list", 11)(1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-grid-tile", 12)(4, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BusinessHoursComponent_div_0_mat_grid_list_12_mat_list_item_5_Template, 5, 6, "mat-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const g_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](g_r8.DOW);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", g_r8.data);
  }
}
function BusinessHoursComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "mat-card", 3)(5, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BusinessHoursComponent_div_0_mat_card_title_6_Template, 2, 0, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BusinessHoursComponent_div_0_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BusinessHoursComponent_div_0_mat_card_content_9_Template, 3, 1, "mat-card-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BusinessHoursComponent_div_0_mat_grid_list_12_Template, 6, 2, "mat-grid-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.oService.ENAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.oToday.length > 0)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.oToday.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.oEntities);
  }
}
class BusinessHoursComponent {
  onConnectionStatusChange(sMqttStatus) {
    this.oTBS.titleChange({
      title: this.sTitle,
      status: sMqttStatus
    });
  }
  constructor(oTBS, oLocation, oRoute, oAPIService) {
    this.oTBS = oTBS;
    this.oLocation = oLocation;
    this.oRoute = oRoute;
    this.oAPIService = oAPIService;
    this.sTitle = 'Working Hours';
    this.bLoaded = false;
    this.oToday = [];
    this.oEntities = [];
    this.oService = this.oLocation.getState();
    console.log(this.oService);
  }
  ngOnInit() {
    this.onConnectionStatusChange('');
    this.oAPIService.send2ServerP("services/" + this.oService.ENTITYID + "/" + this.oService.ID + "/wh/today").then(data => {
      this.oToday = data.result;
      console.log(this.oToday.length);
    });
    this.oAPIService.send2ServerP("services/" + this.oService.ID + "/wh/fetch").then(data => {
      this.oEntities = this.groupByDay(data.result);
      this.bLoaded = true;
    });
  }
  groupByDay(oEntities) {
    var groups = oEntities.reduce(function (o, a) {
      var m = a.DAYOFWEEK;
      o[m] ? o[m].data.push(a) : o[m] = {
        DAYOFWEEK: m,
        data: [a],
        DOW: _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables.DOW[Number(m)]
      };
      return o;
    }, {});
    var result = Object.keys(groups).map(function (k) {
      return groups[k];
    });
    //    console.log ( result ) ;
    return result;
  }
  static #_ = this.ɵfac = function BusinessHoursComponent_Factory(t) {
    return new (t || BusinessHoursComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_1__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.APIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BusinessHoursComponent,
    selectors: [["app-business-hours"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "entity-title"], [1, "container"], ["appearance", "outlined", 1, "custom-card"], [4, "ngIf", "ngIfElse"], ["closedTitle", ""], [1, "row"], [1, "col-md-12"], ["cols", "4", "rowHeight", "1:1", 4, "ngFor", "ngForOf"], ["class", "time", 4, "ngFor", "ngForOf"], [1, "time"], ["cols", "4", "rowHeight", "1:1"], ["colspan", "3"]],
    template: function BusinessHoursComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BusinessHoursComponent_div_0_Template, 13, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridTile, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_3__.TimeFormatPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2004:
/*!**********************************************!*\
  !*** ./src/app/clinics/clinics.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClinicsComponent: () => (/* binding */ ClinicsComponent)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abstract-mqtt */ 1820);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(abstract_mqtt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../env.properties */ 2430);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 8540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pipes */ 4901);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/time-format.pipe */ 8041);
















function ClinicsComponent_div_0_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "open");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ClinicsComponent_div_0_div_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ClinicsComponent_div_0_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19)(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClinicsComponent_div_0_div_8_div_6_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.onBusinessHours(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Business Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ClinicsComponent_div_0_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, o_r3.TIME_OPEN), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 4, o_r3.TIME_CLOSE), " ");
  }
}
function ClinicsComponent_div_0_div_8_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](2, 2, o_r3.PREFIX, 2, " "), "", o_r3.CURRENTQN_T, " ");
  }
}
function ClinicsComponent_div_0_div_8_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ClinicsComponent_div_0_div_8_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](2, 2, o_r3.PREFIX, 2, " "), "", o_r3.ISSUEDQN_T, " ");
  }
}
function ClinicsComponent_div_0_div_8_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ClinicsComponent_div_0_div_8_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClinicsComponent_div_0_div_8_div_29_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.goToStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("Your Q# ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind3"](3, 2, o_r3.PREFIX, 2, " "), "", o_r3._D[0].QUEUEN_T, "");
  }
}
function ClinicsComponent_div_0_div_8_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClinicsComponent_div_0_div_8_div_30_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.onGetQN(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Join Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function ClinicsComponent_div_0_div_8_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Closed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ClinicsComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div")(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, ClinicsComponent_div_0_div_8_span_3_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, ClinicsComponent_div_0_div_8_span_4_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ClinicsComponent_div_0_div_8_div_6_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ClinicsComponent_div_0_div_8_div_7_Template, 4, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "br")(10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Now AAAA Servicing");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 11)(16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 10)(19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, ClinicsComponent_div_0_div_8_ng_container_20_Template, 3, 6, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, ClinicsComponent_div_0_div_8_ng_template_21_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, ClinicsComponent_div_0_div_8_ng_container_24_Template, 3, 6, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, ClinicsComponent_div_0_div_8_ng_template_25_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 10)(28, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, ClinicsComponent_div_0_div_8_div_29_Template, 4, 6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ClinicsComponent_div_0_div_8_div_30_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, ClinicsComponent_div_0_div_8_div_31_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 11)(33, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClinicsComponent_div_0_div_8_Template_a_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const o_r3 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r29.onBookAppointment(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](35, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", o_r3.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", o_r3.CURRENTQN_T != "null")("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", o_r3.ISSUEDQN_T)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !o_r3.bClosed && o_r3._D.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !o_r3.bClosed && o_r3._D.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", o_r3.bClosed);
  }
}
const _c0 = function (a0, a1) {
  return {
    expanded: a0,
    collapsed: a1
  };
};
function ClinicsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ClinicsComponent_div_0_Template_div_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const oo_r1 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.showDetails(oo_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ClinicsComponent_div_0_div_8_Template, 36, 12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const oo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", oo_r1.ENAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", oo_r1.ADDRESS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](4, _c0, (oo_r1 == null ? null : oo_r1.bExpanded) == true, (oo_r1 == null ? null : oo_r1.bExpanded) == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.oServices);
  }
}
// import { MatGridList, MatGridTile } from "@angular/material/grid-list";
// import { MatList, MatListItem } from "@angular/material/list";
// import { UUID } from "angular2-uuid";
const NO_QUEUE_MESSAGE = "Services are shown during Business Hours only";
const NO_SERVICES_MESSAGE = "No Services Defined";
class ClinicsComponent extends abstract_mqtt__WEBPACK_IMPORTED_MODULE_2__.MqttService {
  getMqttHost() {
    return this.sMqttHost;
  }
  getClientID() {
    //  super.sClientID = "qs-" + this.Global_Variables.UUID;
    // return uuidv4();
    return "qs-" + this.Global_Variables.UUID;
  }
  constructor(activatedRoute, oTBS, oRouter, oAPIService, oAuthService) {
    //, private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    super(_env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_HOST, _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_PORT, _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables, false);
    this.activatedRoute = activatedRoute;
    this.oTBS = oTBS;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.oAuthService = oAuthService;
    this.searchControl = undefined;
    this.bLoaded = false;
    this.sCountry = "None";
    this.sTZ = "TZ";
    this.oEntities = [];
    this.oServices = [];
    this.oEntity = undefined;
    this.sMessage = null;
    this.products = [];
    this.bDisabled = true;
    this.bDebug = true;
    // oItem: any = { CURRENTQN: 0, ISSUEDQN: 0 };
    // oAItem: any = { CURRENTQN: 0, ISSUEDQN: 0 };
    //  oService: any = {};
    this.COUNTERN = -1;
    //  bHasMore: boolean = false;
    this.sEmail = "";
    this.bIsServicingAppointment = false;
    this.oOptions = {
      useSSL: _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_USESSL,
      userName: "test",
      password: "test12"
    };
    this.sMqttHost = _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_HOST;
    this.bErrorLoading = false;
    if (_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.isMobile == false) {
      this.oRouter.navigate(["not_mobile"]);
      return;
    }
    if (_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry == "") {
      this.oRouter.navigate([""]);
      return;
    }
    this.sCountry = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry;
    this.sTZ = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sTZ;
    console.info(this.sCountry);
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl();
    this.load();
    this.oTBS.titleChange({
      title: "Clinics",
      status: ""
    });
    this.sMqttHost = _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_HOST; //'m-ezq.ignorelist.com';
  }
  //  bActive = false;
  showDetails(oEntity) {
    var _superprop_getSetConnect = () => super.setConnect,
      _superprop_getSubscribe = () => super.subscribe,
      _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.oEntity !== undefined && oEntity != _this.oEntity) {
        _this.oEntity.bExpanded = false;
      }
      oEntity.bExpanded = !oEntity.bExpanded;
      _this.oEntity = oEntity;
      console.log(oEntity.bExpanded, _this.oEntity.bExpanded);
      //  this.bActive = !this.bActive;
      _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID = oEntity.ID;
      if (!_this.oEntity.bExpanded) {
        try {
          _superprop_getSetConnect().call(_this, false);
          // super.disconnectMQTT();
        } catch (err) {
          //      console.log("ERROR ", err);
        }
      }
      if (_this.oEntity.bExpanded) {
        _this.oAPIService.send2ServerP("services/" + _this.oEntity.ID + "/f", true).then(data => {
          _this.oServices = data.result;
          // console.log(this.oServices);
          _this.sMessage = null;
          //      console.log(this.oItems);
          if (_this.oServices.length > 0) {
            // this.sMqttHost = this.oItems[0].MQTTHOST;
            _superprop_getSetConnect().call(_this, true);
            _this.oServices.forEach((oItem, index) => {
              //          console.log("*** ", oItem);
              if (oItem._D.length > 0) oItem._D[0].QUEUEN_T = _this.padLeft(oItem._D[0].QUEUEN, "0", 3);
              oItem.CURRENTQN_T = _this.padLeft(oItem.CURRENTQN, "0", 3);
              oItem.ISSUEDQN_T = _this.padLeft(oItem.ISSUEDQN, "0", 3);
              _this.setCanQueueUpNow(oItem);
              if (index == _this.oServices.length - 1) {
                setTimeout(() => {
                  _this.bLoaded = true;
                }, 500);
              }
            });
            _superprop_getSubscribe().call(_this, "CQ/" + _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID + "/#");
          } else {
            _superprop_getSetConnect().call(_this, false);
            //        this.bShouldConnect = false;
            _this.sMessage = NO_SERVICES_MESSAGE;
            _this.bLoaded = true;
          }
        });
      }
    })();
  }
  load() {
    var _this2 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.bErrorLoading = false;
      // var b = await (this.oAuthService.loadUserInfo({}));
      //    console.log("Logged In " + b);
      let a = 1;
      _this2.oAPIService.send2ServerP("entities", true, {
        COUNTRY: _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry
      }).then(data => {
        if (data) {
          _this2.oEntities = data.result;
          //        console.log(this.oItems);
        }

        _this2.bLoaded = true;
      }).catch( /*#__PURE__*/function () {
        var _ref = (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          console.error(err);
          if (err.status == 403) {
            // token expired
            console.warn("JWT Expired.  Refresing");
            var data = {};
            // data.DEVICEUID = this.oAuthService.getDeviceID(); 
            data.email = _this2.oAuthService.getDeviceID();
            data.password = data.email;
            console.log("DeviceUID: ", data.email);
            yield _this2.oAuthService.login(_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.AUTH_URL, data, "entities");
            return;
          } else _this2.bErrorLoading = true;
          // this.swUpdate.available.subscribe(evt => {
          //   let snack = this.snackbar.open('Update Available', 'Reload Please.');
          //   snack.onAction().subscribe(() => {
          //     window.location.reload();
          //   });
          //   setTimeout(() => {
          //     snack.dismiss();
          //   }, 10000);
          // });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  // public onConnectionStatusChange(sMqttStatus) {
  //   this.oTBS.titleChange({ title: this.sTitle, status: sMqttStatus });
  // }
  getUserName() {
    //TODO get a new JWT token that expires in few minutes.
    return _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.token?.['access_token'] || '';
  }
  goToStatus() {
    // try {
    //   super.setConnect(false);
    // }
    // catch (err) { }
    this.oRouter.navigate(["queuestatus"]);
  }
  padLeft(text, padChar, size) {
    return (String(padChar).repeat(size) + text).substr(size * -1, size);
  }
  isClosedNow(oItem) {
    oItem.bClosed = true;
    oItem._BusinessHours.forEach(o => {
      //      console.log(o);
      //get current time and check if it is inbetwen
      var currentTime = moment__WEBPACK_IMPORTED_MODULE_4__(o.LOCAL_TIME).format("Hmm");
      // console.log ( "TIMEZONE: " +  moment().parseZone().localeData ) ;
      var iNow = Number(currentTime);
      var iTO = Number(o.TIME_OPEN);
      var iTC = Number(o.TIME_CLOSE);
      // console.log("Comparing: " + currentTime + " with " + moment(o.TIME_OPEN).format("Hmm") + " and " + moment(o.TIME_CLOSE).format("Hmm"));
      // if (moment(currentTime).isBetween(moment(o.TIME_OPEN, "Hmm"), moment(o, "Hmm")))
      if (iNow >= iTO && iNow <= iTC) {
        oItem.TIME_OPEN = iTO;
        oItem.TIME_CLOSE = iTC;
        //     console.log("Open NOW...");
        oItem.bClosed = false;
      }
      oItem.bLoading = false;
    });
  }
  // onPurchase(oItem: any) {
  //   //https://medium.com/@andrew.thielcole/in-app-purchases-with-ionic-3-af13b21f49f2
  //   // ionic cordova plugin add cc.fovea.cordova.purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY>"
  //   // $ npm install --save @ionic-native/in-app-purchase-2
  // }
  onBookAppointment(oItem) {
    console.log(oItem);
    //send oService
    this.oRouter.navigateByUrl("appointment", {
      state: {
        oServiceItem: oItem,
        oEntityItem: this.oEntity
      }
    });
    //   this.navCtrl.setRoot('AppointmentPage') ;
  }

  onGetQN(oItem) {
    //    this.oIAP.buy(this.products[0]).then(data => {
    /*
    data will contain {
     transactionId: ...
     receipt: ...
     signature: ...
    }
    */
    this.oAPIService.send2ServerP("gqn/" + _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID + "/" + oItem.ID, true).then(data => {
      if (data._error) {
        console.error(data._error);
        return;
      }
      // Required for Android.  However, can be called for iOS as well.
      //      this.oIAP.consume ( data.productType, data.receipt, data.signature ) ;
      this.goToStatus();
    });
    //  });
  }

  setCanQueueUpNow(oItem) {
    oItem.bLoading = true;
    this.oAPIService.send2ServerP("q/opened/" + _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID + "/" + oItem.ID).then(data => {
      //      console.log(JSON.stringify(data.result));
      if (data.result.length > 0) {
        //        this.zone.run(() => {
        oItem._bQOpened = true;
        oItem._BusinessHours = data.result;
        this.isClosedNow(oItem);
        //          console.log("Setting Opened = TRUE");
        //        });
      } else {
        oItem.bClosed = true;
        oItem.PREFIX = "";
        oItem.CURRENTQN_T = "closed";
        oItem.ISSUEDQN_T = "closed";
      }
    });
  }
  onBusinessHours(oItem) {
    var _this3 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      oItem.ENAME = _this3.oEntity.ENAME;
      yield _this3.oRouter.navigateByUrl("businesshours", {
        state: oItem
      });
    })();
  }
  ngOnInit() {
    // this.sMessage = null;
    // if (this.bLoaded && this.oItems.length > 0) {
    //   // this.bShouldConnect = true;
    //   //      super.subscribe("CQ/" + Global_Variables.oEID + "/#");
    //   super.setConnect(true);
    //   this.oItems.forEach(oItem => {
    //     this.setCanQueueUpNow(oItem);
    //   })
    // }
    // else {
    //   this.sMessage = NO_SERVICES_MESSAGE;
    // }
  }
  ngOnDestroy() {
    try {
      super.setConnect(false);
      // super.disconnectMQTT();
    } catch (err) {
      //      console.log("ERROR ", err);
    }
  }
  processMessage(message) {
    // ./pushMessage.sh 'CQ/1/11' '21,49'
    //    var t = message.destinationName.split('/');
    //    console.log(d[0] + " " + d[1] + " " + d[2]);
    //    var m = message.payloadString.split(',');
    //    console.log(m[0] + " and " + m[1]);
    var t = super.getTopicPathInArray(message);
    var m = super.getMessageInArray(message);
    if (t[0] == "ServerUp") {
      return;
    }
    if (t[0] == "IP") {
      this.onConnectionStatusChange(m);
      return;
    }
    if (t[0] == "CQ") {
      this.oServices.forEach(oItem => {
        if (oItem.ID == t[2]) {
          // if ( m[0] == '0' && m[1] == '0')
          //   return ;
          oItem.CURRENTQN = Number(m[0]);
          oItem.CURRENTQN_T = this.padLeft(oItem.CURRENTQN, "0", 3);
          oItem.ISSUEDQN = Number(m[1]);
          oItem.ISSUEDQN_T = this.padLeft(oItem.ISSUEDQN, "0", 3);
        }
      });
    }
  }
  static #_ = this.ɵfac = function ClinicsComponent_Factory(t) {
    return new (t || ClinicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_5__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_6__.APIService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ClinicsComponent,
    selectors: [["app-clinics"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "task"], [1, "entity-title", 3, "click"], [1, "details", "service-title", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], ["text-center", "", "class", "float-right", 4, "ngIf"], [1, "row"], [1, "column"], [1, "badge", "badge-warning"], [4, "ngIf", "ngIfElse"], ["nullTemplate", ""], [4, "ngIf"], ["color", "accent", "mat-raised-button", "", 3, "click"], [1, "badge", "badge-success"], [1, "badge", "badge-danger"], ["text-center", "", 1, "float-right"], ["mat-raised-button", "", "color", "accent", 3, "click"]],
    template: function ClinicsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ClinicsComponent_div_0_Template, 9, 7, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.oEntities);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatAnchor, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__.DefaultClassDirective, ngx_pipes__WEBPACK_IMPORTED_MODULE_15__.LeftPadPipe, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_8__.TimeFormatPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4439:
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsComponent: () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);










function ContactUsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Your message was recieved. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "We will contact you shortly after reviewing your message. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Thank you.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "-Business Development Team. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ContactUsComponent_div_4_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Clinic Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContactUsComponent_div_4_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Contact Person is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContactUsComponent_div_4_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email is required and must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContactUsComponent_div_4_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ContactUsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_div_4_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3)(3, "mat-form-field", 4)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Clinic Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ContactUsComponent_div_4_mat_error_7_Template, 2, 0, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3)(9, "mat-form-field", 4)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Contact Person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ContactUsComponent_div_4_mat_error_13_Template, 2, 0, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 3)(15, "mat-form-field", 4)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 3)(20, "mat-form-field", 4)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ContactUsComponent_div_4_mat_error_24_Template, 2, 0, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3)(26, "mat-form-field", 4)(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ContactUsComponent_div_4_mat_error_30_Template, 2, 0, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.form.get("NAME")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r1.form.get("NAME")) == null ? null : tmp_1_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r1.form.get("CONTACT")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.form.get("CONTACT")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r1.form.get("EMAIL")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.form.get("EMAIL")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r1.form.get("MESSAGE")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.form.get("MESSAGE")) == null ? null : tmp_4_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.form.valid);
  }
}
class ContactUsComponent {
  onConnectionStatusChange(sMqttStatus) {
    this.oTBS.titleChange({
      title: "Contact Us",
      status: sMqttStatus
    });
  }
  // formData: FormGroup;
  constructor(formBuilder, oTBS, oRouter, oAuthService, oAPI) {
    this.formBuilder = formBuilder;
    this.oTBS = oTBS;
    this.oRouter = oRouter;
    this.oAuthService = oAuthService;
    this.oAPI = oAPI;
    this.bMessageSent = false;
    this._jsonURL = 'assets/ContactUs.json';
    this.oErrorMessage = "";
    this.oFormSchema = {};
    this.oFormLayout = {};
    this.oFormData = {};
    this.onConnectionStatusChange('');
    // constructor(private formBuilder: FormBuilder) { }
    // ngOnInit(): void {
    // Parse the JSON schema and generate form controls dynamically
  }

  onSubmit() {
    // Handle form submission
    if (this.form.valid) {
      console.log('Form submitted successfully:', this.form.value);
      this.oAPI.send2ServerP("contactus/add", true, this.form.value).then(data => {
        // var oItem = data.result[0];
        this.bMessageSent = true;
      });
      // Implement your form submission logic here
    } else {
      console.log('Form is invalid');
      // Optionally, display error messages or handle invalid form
    }
  }

  ngOnInit() {
    var _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.form = _this.formBuilder.group({
        NAME: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        CONTACT: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        PHONE: [''],
        EMAIL: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(/^\S+@\S+$/)]],
        MESSAGE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      });
    })();
  }
  static #_ = this.ɵfac = function ContactUsComponent_Factory(t) {
    return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_1__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__.APIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ContactUsComponent,
    selectors: [["app-contact-us"]],
    decls: 5,
    vars: 3,
    consts: [[1, "full-height"], [4, "ngIf"], [1, "form-container", 3, "formGroup", "ngSubmit"], [1, "form-field"], ["appearance", "fill"], ["matInput", "", "formControlName", "NAME", 1, "input-field"], ["matInput", "", "formControlName", "CONTACT", 1, "input-field"], ["matInput", "", "formControlName", "PHONE", 1, "input-field"], ["matInput", "", "formControlName", "EMAIL", 1, "input-field"], ["matInput", "", "formControlName", "MESSAGE", 1, "input-field"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "disabled"]],
    template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ContactUsComponent_div_1_Template, 10, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ContactUsComponent_div_4_Template, 33, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bMessageSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.oErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.bMessageSent);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton],
    styles: [".form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 300px; \n\n  margin-bottom: 20px; \n\n}\n\n.input-field[_ngcontent-%COMP%] {\n  width: 100%; \n\n  align-self: stretch; \n\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBLEVBQUEsMkJBQUE7RUFDQSxtQkFBQSxFQUFBLDRCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBLEVBQUEsK0RBQUE7RUFDQSxtQkFBQSxFQUFBLGdFQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBLEVBQUEsbUVBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMDBweDsgLyogQWRqdXN0IHdpZHRoIGFzIG5lZWRlZCAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyAvKiBBZGp1c3QgbWFyZ2luIGFzIG5lZWRlZCAqL1xufVxuXG4uaW5wdXQtZmllbGQge1xuICB3aWR0aDogMTAwJTsgLyogRW5zdXJlIHRoZSBpbnB1dCB0YWtlcyB1cCB0aGUgZnVsbCB3aWR0aCBvZiB0aGUgZm9ybSBmaWVsZCAqL1xuICBhbGlnbi1zZWxmOiBzdHJldGNoOyAvKiBTdHJldGNoIHRoZSBpbnB1dCB2ZXJ0aWNhbGx5IHRvIG1hdGNoIHRoZSBmb3JtIGZpZWxkIGhlaWdodCAqL1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTsgLyogRW5zdXJlIHRoZSBmb3JtIGZpZWxkIHRha2VzIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIgKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3393:
/*!*********************************!*\
  !*** ./src/app/decimal.pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecimalPipe: () => (/* binding */ DecimalPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DecimalPipe {
  transform(value, isRound = false) {
    const accuracy = 100 * 1000;
    let ret = null;
    if (value) {
      if (isRound) {
        ret = "" + Math.round(value);
      } else {
        const rounded = Math.round(value * accuracy) / accuracy;
        const str = rounded < 10 && rounded >= 1 ? "0" + rounded : "" + rounded;
        ret = str.padEnd(8, "0");
      }
    }
    return ret;
  }
  static #_ = this.ɵfac = function DecimalPipe_Factory(t) {
    return new (t || DecimalPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "decimal",
    type: DecimalPipe,
    pure: true
  });
}

/***/ }),

/***/ 9674:
/*!************************************************!*\
  !*** ./src/app/entities/entities.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntitiesComponent: () => (/* binding */ EntitiesComponent)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 647);


// import { Paho } from 'mosq-mqtt/mqttws31';
// import { MqttService } from 'abstract-mqtt';
//import { LeftPadPipe } from 'angular-pipes/src/string/left-pad.pipe';
// import * as moment from 'moment';
// import { Location } from '@angular/common';











function EntitiesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function EntitiesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Click here to Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function EntitiesComponent_div_3_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 5)(1, "mat-card-title")(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-content")(7, "mat-grid-list", 7)(8, "mat-grid-tile")(9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EntitiesComponent_div_3_mat_card_1_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const o_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.onEntityClick(o_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", o_r4.ENAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", o_r4.ADDRESS, " ");
  }
}
function EntitiesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EntitiesComponent_div_3_mat_card_1_Template, 11, 2, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.oItems);
  }
}
// import { SwUpdate } from '@angular/service-worker';
// import { MatSnackBar } from '@angular/material/snack-bar';
var bTestIndia = false;
class EntitiesComponent {
  ngOnInit() {}
  constructor(activatedRoute, oTBS, oRouter, oAPIService, oAuthService) {
    //, private swUpdate: SwUpdate, private snackbar: MatSnackBar) {
    // constructor(public navCtrl: NavController,
    // private modalCtrl: ModalController,
    // public oLoginService: LoginServiceProvider,
    // public oAPIService: ApiServiceProvider) {
    this.activatedRoute = activatedRoute;
    this.oTBS = oTBS;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.oAuthService = oAuthService;
    this.bLoaded = false;
    this.sCountry = "None";
    this.sTZ = "TZ";
    this.oItems = [];
    //request for location
    this.bErrorLoading = false;
    //    console.log(Global_Variables);
    if (_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry == "") {
      this.oRouter.navigate([""]);
      return;
    }
    if (bTestIndia) _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry = "IN";
    this.sCountry = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry;
    this.sTZ = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sTZ;
    console.info(this.sCountry);
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
    this.load();
    this.oTBS.titleChange({
      title: "Clinics",
      status: ""
    });
    //    (async () => { await this.checkInstantQ(); })();
    // this.oAuthService.storeDeviceRegistrationInfo();
    // (async => {
    //   (this.activatedRoute.queryParams.subscribe(params => {
    //     console.log("Params***", params);
    //     if (params['qr'] !== undefined)
    //       Global_Variables.InstantQ = params['qr'];
    //     console.log(Global_Variables.InstantQ);
    //     //for QR code
    //     if (Global_Variables.InstantQ !== null && Global_Variables.InstantQ.length > 2
    //       //&& Global_Variables.InstantQ.indexOf("ionic") == -1
    //     ) {
    //       this.getInstantQNumber();
    //     }
    //     else {
    //       this.searchControl = new FormControl();
    //       this.load();
    //     }
    //   }))
    // })();
  }

  load() {
    var _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.bErrorLoading = false;
      // console.log("DEVICEUID", this.oAuthService.getDeviceID());
      // var b = await (this.oAuthService.loadUserInfo({}));
      //    console.log("Logged In " + b);
      _this.oAPIService.send2ServerP("entities", true, {
        COUNTRY: _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry
      }).then(data => {
        if (data) {
          _this.oItems = data.result;
          console.log(_this.oItems);
        }
        _this.bLoaded = true;
      }).catch( /*#__PURE__*/function () {
        var _ref = (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          console.error(err);
          if (err.status == 403) {
            // token expired
            console.warn("JWT Expired.  Refresing");
            var data = {};
            // data.DEVICEUID = this.oAuthService.getDeviceID();
            data.email = _this.oAuthService.getDeviceID();
            data.password = data.email;
            // console.log("Sending DEVICEUID", this.oAuthService.getDeviceID());
            yield _this.oAuthService.login(_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.AUTH_URL, data, "entities");
            return;
          } else _this.bErrorLoading = true;
          // this.swUpdate.available.subscribe(evt => {
          //   let snack = this.snackbar.open('Update Available', 'Reload Please.');
          //   snack.onAction().subscribe(() => {
          //     window.location.reload();
          //   });
          //   setTimeout(() => {
          //     snack.dismiss();
          //   }, 10000);
          // });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  // ionViewWillEnter() {
  //   // this.load();
  // }
  onEntityClick(oItem) {
    var _this2 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID = oItem.ID;
      yield _this2.oRouter.navigateByUrl("services", {
        state: oItem
      });
    })();
  }
  static #_ = this.ɵfac = function EntitiesComponent_Factory(t) {
    return new (t || EntitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_2__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__.APIService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: EntitiesComponent,
    selectors: [["app-entities"]],
    decls: 4,
    vars: 3,
    consts: [[1, "full-height"], [4, "ngIf"], ["diameter", "40", "mode", "indeterminate", 1, "custom-spinner"], ["mat-raised-button", ""], ["appearance", "outlined", 4, "ngFor", "ngForOf"], ["appearance", "outlined"], [1, "entity-title"], ["cols", "2"], ["color", "accent", "mat-raised-button", "", 3, "click"]],
    template: function EntitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EntitiesComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EntitiesComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, EntitiesComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.bLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bErrorLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridTile],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1751:
/*!*****************************************!*\
  !*** ./src/app/geo-location.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoLocationService: () => (/* binding */ GeoLocationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


// import { Position, Coordinates } from "node-geocoder";
class GeoLocationService {
  constructor() {
    this.location$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.errors$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.api = navigator.geolocation;
  }
  getLocation() {
    if (!navigator.geolocation) {
      this.errors$.next("not-available");
    }
    navigator.geolocation.getCurrentPosition(this.success.bind(this), this.failed.bind(this), {
      enableHighAccuracy: true,
      timeout: 5000
    });
  }
  success(data) {
    const payload = this.transformData(data.coords);
    this.location$.next(payload);
    this.errors$.next("");
  }
  failed(e) {
    this.errors$.next(e.code === 1 ? "permission" : "failed");
    this.location$.next(null);
  }
  transformData(data) {
    return {
      latitude: data.latitude === undefined ? null : data.latitude,
      longitude: data.longitude === undefined ? null : data.longitude,
      altitude: data.altitude === undefined ? null : data.altitude,
      accuracyLatitude: data.accuracy ? this.metersToLatitude(data.accuracy) : null,
      accuracyLongitude: data.accuracy ? this.metersToLongitude(data.accuracy) : null,
      accuracyAltitude: data.altitudeAccuracy || null
    };
  }
  metersToLatitude(value) {
    return value / (111321.38 * Math.cos(value * Math.PI / 180));
  }
  metersToLongitude(value) {
    return value / 111000;
  }
  static #_ = this.ɵfac = function GeoLocationService_Factory(t) {
    return new (t || GeoLocationService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: GeoLocationService,
    factory: GeoLocationService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 2720:
/*!******************************!*\
  !*** ./src/app/lang.pipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangPipe: () => (/* binding */ LangPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LangPipe {
  transform(value, args) {
    if (args && typeof args === "object" && args[value]) {
      return args[value];
    }
    return value;
  }
  static #_ = this.ɵfac = function LangPipe_Factory(t) {
    return new (t || LangPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "lang",
    type: LangPipe,
    pure: true
  });
}

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ 4289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _geo_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geo-location.service */ 1751);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-device-detector */ 8851);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);










function LoginComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.showEntities());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Near Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Country ", ctx_r0.sCountry, "");
  }
}
function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Country ", ctx_r1.sCountry, "");
  }
}
// import { LangPipe } from "../lang.pipe";
// import { DecimalPipe } from "../decimal.pipe";
// import { MinutesPipe } from "../minutes.pipe";
/*
Client IP => https://api.ipify.org/?format=json


*/
//var bSQLInjectionTest: boolean = false;
class LoginComponent {
  constructor(activatedRoute, oRouter, oAPIService, oAuthService, oGeoLocationService, deviceService) {
    this.activatedRoute = activatedRoute;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.oAuthService = oAuthService;
    this.oGeoLocationService = oGeoLocationService;
    this.deviceService = deviceService;
    this.bLoaded = false;
    this.sError = "";
    this.lat = 43.653908;
    this.lng = -79.384293;
    //  dLat = 0; dLong = 0;
    this.sCountry = "NotSet";
    this.oDemographics = undefined;
    this.bHasLocation = false;
    this.errMsg = "";
    this.sImage = "";
    _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry = "";
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.isMobile();
      _this.oDemographics = _this.oAuthService.getDemographics();
      if (_this.oDemographics !== undefined) {
        console.info(_this.oDemographics);
        _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry = _this.oDemographics.country_code;
        if (_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry !== undefined && _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry != "") {
          _this.sCountry = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry;
          // console.log("Country: ", Global_Variables.sCountry);
          //        Global_Variables.sCountry = 'IN';
          _this.bLoaded = true;
          console.log("ISMOBILE: ", _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.isMobile);
        }
      }
      if (_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.isMobile) {
        _this.showEntities();
      }
      //    this.getLocation();
      //    https://api.bigdatacloud.net/data/client-info
      // if (Global_Variables.sCountry !== "") {
      //   this.bHasLocation = true;
      //   Global_Variables.sCountry = "IN";
      //   this.showEntities();
      //   return;
      // }
      // if (!bSQLInjectionTest) {
      //   // this.oGeoLocationService.location$.subscribe((pos: UserLocation) => {
      //   //   this.position = pos;
      //   //   console.log(this.position);
      //   // });
      //   // this.oGeoLocationService.errors$.subscribe((type: string) => {
      //   //   this.errorType = type;
      //   //   console.log(this.errorType);
      //   // });
      //   // // this.langService.currentTranslation$.subscribe(
      //   // //   (translation) => (this.currentLang = translation)
      //   // // );
      //   // this.oGeoLocationService.getLocation();
      //   console.log("Country: ", Global_Variables.sCountry);
      // } else {
      //   // Global_Variables.sCountry = "IN";
      //   // this.showEntities();
      //   // this.bLoaded = true;
      // }
      // setInterval(() => {
      //   this.oGeoLocationService.getLocation();
      // }, 10000);
      // }
      // onTypeChange(type) {
      //   this.viewType = type;
    })();
  }

  isMobileBrowser() {
    var deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(deviceInfo);
    console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet); // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
    return !isDesktopDevice;
  }
  isMobile() {
    var _this2 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let me = _this2;
      yield _this2.oAPIService.send2ServerNoHeader("https://api.bigdatacloud.net/data/client-info").then(d => {
        console.log(d);
        if (d.country_code !== undefined) {
          _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry = d.country_code;
          if (d.isMobile == false) d.isMoble = _this2.isMobileBrowser();
          _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.isMobile = d.isMobile;
          console.log("Is Mobile: ", d.isMobile);
          // Global_Variables.isMobile = true ;// unless a solution is found
          me.sCountry = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry;
          me.oAuthService.saveDemographics(d);
          console.log("Fetched Country: ", _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry);
          me.bLoaded = true;
        } else _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.isMobile = true; // unless a solution is found
        _this2.getLocation();
      });
    })();
  }
  getLocation() {
    var _this3 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var me = _this3;
      yield _this3.oAPIService.send2ServerNoHeader("https://ipapi.co/json").then(d => {
        console.log("TEST", d);
        _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry = d.country_code;
        me.sCountry = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry;
        _this3.oAuthService.saveDemographics(d);
        console.log("Fetched Country: ", _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry);
        me.bLoaded = true;
        _this3.showEntities();
      });
    })();
  }
  getLocationGeoV2NotUsed() {
    var _this4 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //    this.sCountry = Global_Variables.sCountry;
      _this4.bHasLocation = true;
      // console.log(Global_Variables);
      // if (Global_Variables.sCountry == "") {
      //      this.sCountry = this.getLocation();
      _this4.getPosition().then(pos => {
        console.info(pos);
        _this4.lat = pos.lat;
        _this4.lng = pos.lng;
        let me = _this4;
        // https://developer.mapquest.com/documentation/geocoding-api/reverse/get/
        _this4.sImage = `https://www.mapquestapi.com/staticmap/v5/map?key=qkcwM3ZHOcX9HAWBhMB41WQhl7Wx8ib8&zoom=17&locations=${_this4.lat},${_this4.lng}`;
        let sURL = `https://www.mapquestapi.com/geocoding/v1/reverse?key=qkcwM3ZHOcX9HAWBhMB41WQhl7Wx8ib8&location=${_this4.lat},${_this4.lng}&outFormat=json&thumbMaps=false`;
        _this4.oAPIService.send2ServerNoHeader(sURL).then(d => {
          console.info(d.results[0].locations[0].adminArea1);
          _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry = d.results[0].locations[0].adminArea1;
          me.sCountry = _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry;
          me.oAuthService.saveDemographics({
            sCountry: _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry,
            lat: me.lat,
            lng: me.lng
          });
          _this4.showEntities();
          _this4.bLoaded = true;
        }).catch(err => {
          _this4.errMsg = err;
          console.error(err);
          //            Global_Variables.sCountry = "IN";
          //              this.showEntities();
        });
        //        https://www.mapquestapi.com/staticmap/v5/map?key=qkcwM3ZHOcX9HAWBhMB41WQhl7Wx8ib8&center=New+York
        //   https://www.mapquestapi.com/staticmap/v5/map?key=qkcwM3ZHOcX9HAWBhMB41WQhl7Wx8ib8&locations=13.111546,80.293128&zoom=17
        //   https://www.mapquestapi.com/geocoding/v1/reverse?key=qkcwM3ZHOcX9HAWBhMB41WQhl7Wx8ib8&location=13.111546%2C80.293128&outFormat=json&thumbMaps=false
      }).catch(err => {
        _this4.errMsg = err;
        console.error(err);
        //          this.showEntities();
        _this4.bLoaded = true;
      });
      // }
      // else {
      //   this.showEntities();
      //   //      (async () => { await this.checkInstantQ(); })();
      // }
      // console.log("***", this.activatedRoute.snapshot.queryParamMap.keys);
      // (async () => { await this.checkInstantQ(); })();
      // console.log("****QRParsing Finished");
      // if (!this.oAuthService.exists()) {
      //   var data: any = {};
      //   data.DEVICEUID = uuidv4();
      //   try {
      //     //        var res = await this.oAuthService.login("auth", data, "entities");
      //     var res = await this.oAuthService.login("auth", data, null);
      //     return;
      //   }
      //   catch (err) {
      //     console.log(err);
      //   }
      // }
      //    this.oRouter.navigate(['entities']);
    })();
  }
  // async checkInstantQ() {
  //   // http://d-ezq.ignorelist.com/?a75bc6ec-344a-006b-28b4-9e949866a485
  //   // http://localhost:8888/?a75bc6ec-344a-006b-28b4-9e949866a485
  //   console.log(this.activatedRoute);
  //   console.log(this.activatedRoute.snapshot.queryParamMap.keys);
  //   if (this.activatedRoute.snapshot.queryParamMap.keys !== undefined) {
  //     // if (this.activatedRoute.snapshot.queryParamMap.keys.length != 1)
  //     Global_Variables.InstantQ = this.activatedRoute.snapshot.queryParamMap.keys[0];
  //     // }
  //     // await (this.activatedRoute.queryParams.subscribe(params => {
  //     //   console.log("Params***", params);
  //     //   if (params['qr'] !== undefined)
  //     //     Global_Variables.InstantQ = params['qr'];
  //     console.log(Global_Variables.InstantQ);
  //     //for QR code
  //     if (Global_Variables.InstantQ !== undefined && Global_Variables.InstantQ.length > 2
  //       //&& Global_Variables.InstantQ.indexOf("ionic") == -1
  //     ) {
  //       this.getInstantQNumber();
  //     }
  //     else {
  //       this.showEntities();
  //       // this.searchControl = new FormControl();
  //       // this.load();
  //       // this.oTBS.titleChange({ title: 'Clinics', status: '' });
  //     }
  //     // }))
  //   }
  //   console.log("Out of checkInstantQ");
  // }
  // async getInstantQNumber() {
  //   var b = await (this.oAuthService.loadUserInfo({}));
  //   var sInstantQServiceID = Global_Variables.InstantQ; //.substr(1);
  //   Global_Variables.InstantQ = null;
  //   console.log(sInstantQServiceID);
  //   // console.log(this.sCountry);
  //   //Dispatch a Q# instantly
  //   this.oAPIService.send2ServerP("instantqn/" + sInstantQServiceID, true, { COUNTRY: Global_Variables.sCountry }).then((data: any) => {
  //     if (data._error) {
  //       if (data._error.indexOf("EX_Q_ALREADY_PRESENT") == -1) {
  //         console.log(data._error);
  //         this.oRouter.navigateByUrl('entities');
  //         //          this.load();
  //         return;
  //       }
  //     }
  //     console.log("queuestatus");
  //     this.oRouter.navigateByUrl('queuestatus');
  //   });
  // }
  showEntities() {
    var _this5 = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.oAuthService.exists()) {
        var data = {};
        data.DEVICEUID = _this5.oAuthService.getDeviceID();
        if (data.DEVICEUID === undefined || data.DEVICEUID == null) {
          data.DEVICEUID = _this5.oAuthService.saveDeviceID((0,uuid__WEBPACK_IMPORTED_MODULE_6__["default"])());
        }
        //RUST requires only email and password
        // data.email = this.oAuthService.getDeviceID();
        // if (data.email === undefined || data.email == null)
        // {
        //   data.email = this.oAuthService.saveDeviceID(uuidv4());
        // }
        // data.password = data.email ;
        try {
          console.log("Authenticating");
          yield _this5.oAuthService.login("auth", data, "entities");
        } catch (err) {
          // var data: any = {};
          // data.DEVICEUID = uuidv4();
          // try {
          //   var res = await this.oAuthService.login("auth", data, "entities");
          //   // var res = await this.oAuthService.login("auth", data, null);
          //   return;
          // }
          console.log(err);
        }
        return;
      }
      _this5.oRouter.navigate(["entities"]);
    })();
  }
  locationError(error) {
    console.log(error);
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.sError = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        this.sError = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        this.sError = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        this.sError = "An unknown error occurred.";
        break;
      default:
        this.sError = "???";
    }
  }
  fromOptions(options) {
    return {
      enableHighAccuracy: options.enableHighAccuracy,
      timeout: undefined,
      maximumAge: options.maximumAge._0 || 0
    };
  }
  //function that gets the location and returns it
  getPosition() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
          resolve({
            lng: resp.coords.longitude,
            lat: resp.coords.latitude
          });
        }, err => {
          reject(err);
        });
      });
    }
    console.log("FATAL getPosition failed.  navigator.geolocation is not persent, returing 0, 0");
    return new Promise(resolve => {
      resolve({
        lng: 0,
        lat: 0
      });
    });
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.APIService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_geo_location_service__WEBPACK_IMPORTED_MODULE_4__.GeoLocationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_8__.DeviceDetectorService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], ["id", "action", 1, "btn", "btn-orange", "btn-radius", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 4, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.bLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9099:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);












class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule],
    exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule]
  });
})();

/***/ }),

/***/ 5248:
/*!*********************************!*\
  !*** ./src/app/minutes.pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinutesPipe: () => (/* binding */ MinutesPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MinutesPipe {
  transform(value) {
    let ret = null;
    if (value) {
      const degrees = Math.floor(value);
      const decimal = value - degrees;
      const minutes = Math.floor(decimal * 60);
      const seconds = Math.round((decimal - minutes / 60) * 3600 * 100) / 100;
      const strDegrees = this.toStr(degrees);
      const strMinutes = this.toStr(minutes);
      const strSeconds = this.toStr(seconds, true);
      ret = `${strDegrees}° ${strMinutes}' ${strSeconds}''`;
    }
    return ret;
  }
  toStr(value, isSeconds) {
    let int = ("" + value).split(".")[0];
    if (int.length === 1 && value >= 1) {
      int = int.padStart(2, "0");
    }
    let decimal = ("" + value).split(".")[1];
    if (decimal) {
      decimal = decimal.padEnd(2, "0");
    }
    return isSeconds && decimal ? `${int}.${decimal}` : int;
  }
  static #_ = this.ɵfac = function MinutesPipe_Factory(t) {
    return new (t || MinutesPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "minutes",
    type: MinutesPipe,
    pure: true
  });
}

/***/ }),

/***/ 1461:
/*!**************************************************************!*\
  !*** ./src/app/my-appointments/my-appointments.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyAppointmentsComponent: () => (/* binding */ MyAppointmentsComponent)
/* harmony export */ });
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var _env_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env.properties */ 2430);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! abstract-mqtt */ 1820);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(abstract_mqtt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _time24to12_format_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../time24to12-format.pipe */ 5023);













function MyAppointmentsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "You don't have any Appointments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function MyAppointmentsComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Today's Appointments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyAppointmentsComponent_div_0_mat_card_3_mat_grid_tile_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](o_r6.AQNUMBER);
  }
}
function MyAppointmentsComponent_div_0_mat_card_3_mat_grid_tile_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](o_r6.AQNUMBER);
  }
}
function MyAppointmentsComponent_div_0_mat_card_3_mat_grid_list_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-list", 15)(1, "mat-grid-tile")(2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyAppointmentsComponent_div_0_mat_card_3_mat_grid_list_17_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const o_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.onCancelAppointment(o_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cancel Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function MyAppointmentsComponent_div_0_mat_card_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "** Another number called.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyAppointmentsComponent_div_0_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 6)(1, "mat-card-title")(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-content")(7, "mat-grid-list", 8)(8, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Your Apt#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Current #");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-grid-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, MyAppointmentsComponent_div_0_mat_card_3_mat_grid_tile_13_Template, 2, 1, "mat-grid-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, MyAppointmentsComponent_div_0_mat_card_3_mat_grid_tile_14_Template, 2, 1, "mat-grid-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-grid-tile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, MyAppointmentsComponent_div_0_mat_card_3_mat_grid_list_17_Template, 4, 0, "mat-grid-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, MyAppointmentsComponent_div_0_mat_card_3_div_18_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", o_r6.ENAME, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", o_r6.ADDRESS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", o_r6.CURRENTAQN == o_r6.AQNUMBER);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", o_r6.CURRENTAQN != o_r6.AQNUMBER);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", o_r6.CURRENTAQN, "", o_r6.moved, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", o_r6.CURRENTAQN != o_r6.AQNUMBER);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", o_r6.moved == "**");
  }
}
function MyAppointmentsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Appointments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MyAppointmentsComponent_div_0_mat_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 17)(1, "mat-card-title")(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-content")(7, "mat-grid-list", 18)(8, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "time24to12Format");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-grid-list", 18)(13, "mat-grid-tile")(14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyAppointmentsComponent_div_0_mat_card_6_Template_a_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const o_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.onCancelAppointment(o_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Cancel Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const o_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](o_r16.ENAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](o_r16.SNAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("On ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 4, o_r16.ADATE, "mediumDate"), " @ ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 7, o_r16.AQNUMBER), "");
  }
}
function MyAppointmentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyAppointmentsComponent_div_0_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MyAppointmentsComponent_div_0_div_2_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MyAppointmentsComponent_div_0_mat_card_3_Template, 19, 8, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, MyAppointmentsComponent_div_0_div_5_Template, 2, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MyAppointmentsComponent_div_0_mat_card_6_Template, 16, 9, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.oItems.length == 0 && ctx_r0.oTodaysAppointment.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.oTodaysAppointment.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.oTodaysAppointment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.oItems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.oItems);
  }
}
class MyAppointmentsComponent extends abstract_mqtt__WEBPACK_IMPORTED_MODULE_2__.MqttService {
  onConnectionStatusChange(sMqttStatus) {
    this.oTBS.titleChange({
      title: this.sTitle,
      status: sMqttStatus
    });
  }
  constructor(oTBS, oLocation, oRouter, oAPIService) {
    super(_env_properties__WEBPACK_IMPORTED_MODULE_1__.MQTT_HOST, _env_properties__WEBPACK_IMPORTED_MODULE_1__.MQTT_PORT, _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables, false);
    this.oTBS = oTBS;
    this.oLocation = oLocation;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.sTitle = "My Appointments";
    this.bLoaded = false;
    this.oItems = [];
    this.oOptions = {
      useSSL: _env_properties__WEBPACK_IMPORTED_MODULE_1__.MQTT_USESSL,
      userName: "test",
      password: "test12"
    };
    this.oTodaysAppointment = [];
    this.sMqttHost = _env_properties__WEBPACK_IMPORTED_MODULE_1__.MQTT_HOST;
    this.onConnectionStatusChange("");
    super.setMqttOptions(this.oOptions);
  }
  ngOnInit() {
    try {
      this.sMqttHost = "";
      super.setConnect(false);
    } catch (err) {}
    this.oAPIService.send2ServerP("services/appointments/mybookings/today", true).then(data => {
      this.oTodaysAppointment = data.result;
      if (this.oTodaysAppointment.length > 0) {
        //          var me = this;
        this.sMqttHost = _env_properties__WEBPACK_IMPORTED_MODULE_1__.MQTT_HOST; //'m-ezq.ignorelist.com';
        this.setConnect(true);
        this.oTodaysAppointment.forEach(oItem => {
          //          console.log(oItem);
          this.subscribe("AQ/" + oItem.ENTITYID + "/" + oItem.SERVICEID);
        });
      }
      this.bLoaded = true;
    });
    this.oAPIService.send2ServerP("services/appointments/mybookings", true).then(data => {
      this.oItems = data.result;
      //      console.log(this.oItems) ;
      this.bLoaded = true;
    });
  }
  ngOnDestroy() {
    try {
      this.setConnect(false);
    } catch (err) {}
  }
  getMqttHost() {
    //    console.log(this.sMqttHost);
    return this.sMqttHost;
  }
  getUserName() {
    //TODO get a new JWT token that expires in few minutes.
    return _app_properties__WEBPACK_IMPORTED_MODULE_0__.Global_Variables.token?.['access_token'] || '';
  }
  onCancelAppointment(oItem) {
    this.oAPIService.send2ServerP("services/appointments/cancel", true, {
      ID: oItem.ID
    }).then(data => {
      this.ngOnInit();
    });
  }
  processMessage(message) {
    // ./pushMessage.sh 'CQ/1/11' '23,<LastQ>'
    var t = super.getTopicPathInArray(message);
    if (t[0] == "ServerUp") {
      return;
    }
    if (t[0] == "IP") {
      this.onConnectionStatusChange(m);
      return;
    }
    var m = super.getMessageInArray(message);
    if (t[0] == "CQ") {
      // this.oItems.forEach((oItem) => {
      //   if (oItem.ENTITYID == t[1] && oItem.SERVICEID == t[2])
      //     oItem.moved = '**';
      //   // oItem.CURRENTAQN = Number(m[0]);
      //   // oItem.CURRENTAQN_T = this.padLeft(oItem.CURRENTQN, '0', 3);
      // });
      this.oTodaysAppointment.forEach(oItem => {
        //        console.log(oItem);
        if (oItem.ENTITYID == t[1] && oItem.SERVICEID == t[2]) {
          // oItem.CURRENTAQN = Number(m[0]);
          // oItem.CURRENTAQN_T = oItem.CURRENTAQN;
          oItem.moved = "**";
          //          console.log(oItem);
        }
      });

      return;
    }
    if (t[0] == "AQ") {
      // Appointment
      this.oTodaysAppointment.forEach(oItem => {
        //        console.log(oItem);
        if (oItem.ENTITYID == t[1] && oItem.SERVICEID == t[2]) {
          oItem.CURRENTAQN = Number(m[0]);
          oItem.CURRENTAQN_T = oItem.CURRENTAQN;
          oItem.moved = "";
          //          console.log(oItem);
        }
      });
    }
  }
  static #_ = this.ɵfac = function MyAppointmentsComponent_Factory(t) {
    return new (t || MyAppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_3__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_4__.APIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MyAppointmentsComponent,
    selectors: [["app-my-appointments"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "full-height", 4, "ngIf"], [1, "full-height"], [4, "ngIf"], ["appearance", "outlined", "class", "custom", 4, "ngFor", "ngForOf"], ["appearance", "outlined", 4, "ngFor", "ngForOf"], [1, "centered-message"], ["appearance", "outlined", 1, "custom"], [1, "entity-title"], ["cols", "2", "rowHeight", "4:1"], ["class", "ksd-mq-calling", 4, "ngIf"], ["class", "ksd-mq", 4, "ngIf"], [1, "ksd-cq"], ["cols", "1", "rowHeight", "4:1", 4, "ngIf"], [1, "ksd-mq-calling"], [1, "ksd-mq"], ["cols", "1", "rowHeight", "4:1"], ["color", "accent", "mat-raised-button", "", 3, "click"], ["appearance", "outlined"], ["cols", "1", "rowHeight", "8:1"]],
    template: function MyAppointmentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MyAppointmentsComponent_div_0_Template, 7, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridTile, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _time24to12_format_pipe__WEBPACK_IMPORTED_MODULE_5__.Time24to12FormatPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6918:
/*!**********************************************************!*\
  !*** ./src/app/not-supported/not-supported.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotSupportedComponent: () => (/* binding */ NotSupportedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotSupportedComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function NotSupportedComponent_Factory(t) {
    return new (t || NotSupportedComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NotSupportedComponent,
    selectors: [["app-not-supported"]],
    decls: 2,
    vars: 0,
    template: function NotSupportedComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Device Not Supported!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1211:
/*!*****************************************************!*\
  !*** ./src/app/pipes/hours-minutes-seconds.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoursMinutesSecondsPipe: () => (/* binding */ HoursMinutesSecondsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

// import {  } from "rxjs/util/isNumeric";
//import * as rxjsNumeric from "rxjs/util/isNumeric"
class HoursMinutesSecondsPipe {
  transform(value, ...args) {
    // if ( isNumeric ( value ) == false )
    //   return value ;
    value = +value;
    let minutes = Math.floor(value / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = Math.floor(value % 60);
    minutes = Math.floor(minutes % 60);
    if (hours > 0) return hours + "h " + minutes + "m " + seconds + "s";else return minutes + "m " + seconds + "s";
  }
  static #_ = this.ɵfac = function HoursMinutesSecondsPipe_Factory(t) {
    return new (t || HoursMinutesSecondsPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "hoursMinutesSeconds",
    type: HoursMinutesSecondsPipe,
    pure: true
  });
}

/***/ }),

/***/ 2898:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PipesModule: () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _time_format_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-format.pipe */ 8041);
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./truncate.pipe */ 1875);
/* harmony import */ var _hours_minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hours-minutes-seconds.pipe */ 1211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
//import { CommonModule } from '@angular/common';




class PipesModule {
  static #_ = this.ɵfac = function PipesModule_Factory(t) {
    return new (t || PipesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: PipesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_time_format_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeFormatPipe, _truncate_pipe__WEBPACK_IMPORTED_MODULE_1__.TruncatePipe, _hours_minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_2__.HoursMinutesSecondsPipe],
    exports: [_time_format_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeFormatPipe, _truncate_pipe__WEBPACK_IMPORTED_MODULE_1__.TruncatePipe, _hours_minutes_seconds_pipe__WEBPACK_IMPORTED_MODULE_2__.HoursMinutesSecondsPipe]
  });
})();

/***/ }),

/***/ 8041:
/*!*******************************************!*\
  !*** ./src/app/pipes/time-format.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeFormatPipe: () => (/* binding */ TimeFormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TimeFormatPipe {
  transform(value, ...args) {
    var i = Number(value);
    var ampm = i >= 1200 ? 'pm' : 'am';
    i = i >= 1300 ? i - 1200 : i;
    var s = i / 100 | 0;
    var n = i % 100 <= 9 ? '0' + i % 100 : i % 100;
    var a = s <= 9 ? '      ' + s : s;
    return a + ":" + n + " " + ampm;
  }
  static #_ = this.ɵfac = function TimeFormatPipe_Factory(t) {
    return new (t || TimeFormatPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "timeFormat",
    type: TimeFormatPipe,
    pure: true
  });
}

/***/ }),

/***/ 1875:
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TruncatePipe: () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TruncatePipe {
  transform(value, ...args) {
    // transform(value: string, args: string[]): string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 10;
    // let trail = args.length > 1 ? args[1] : '...';
    //   return value.length > limit ? value.substring(0, limit) + trail : value;
    return value.length > limit ? value.substring(0, limit) : value;
  }
  static #_ = this.ɵfac = function TruncatePipe_Factory(t) {
    return new (t || TruncatePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "truncate",
    type: TruncatePipe,
    pure: true
  });
}

/***/ }),

/***/ 8101:
/*!*******************************!*\
  !*** ./src/app/properties.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Global_Variables: () => (/* binding */ Global_Variables),
/* harmony export */   sDOWNLOAD_URL: () => (/* binding */ sDOWNLOAD_URL),
/* harmony export */   sIMAGE_URL: () => (/* binding */ sIMAGE_URL),
/* harmony export */   sURL: () => (/* binding */ sURL)
/* harmony export */ });
/* harmony import */ var _env_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env.properties */ 2430);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 4289);

//import { UUID } from "angular2-uuid";

const sURL = _env_properties__WEBPACK_IMPORTED_MODULE_0__.sEndPoint + "api/";
const sIMAGE_URL = _env_properties__WEBPACK_IMPORTED_MODULE_0__.sEndPoint + "image/";
var Global_Variables = {
  iUserID: "",
  sUserType: "N",
  isConnected: true,
  isMobile: false,
  token: null,
  DeviceID: "None",
  oEID: -1,
  sEntityID: 0,
  //  oRItem: null,
  //  oMenuItems: [],
  sCurrentPage: "entities",
  bSaved: false,
  InstantQ: "",
  sDeviceUUID: null,
  sDeviceReg: null,
  sCountry: "",
  sCity: "",
  sTZ: "",
  sNewDeviceReg: "",
  DOW: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "PH"],
  UUID: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
  //  AUTH_URL: "auth" // NodeJS
  AUTH_URL: "api/uuid/login" // Rust
};

const sDOWNLOAD_URL = _env_properties__WEBPACK_IMPORTED_MODULE_0__.sEndPoint + "download/uat/yq";

/***/ }),

/***/ 5617:
/*!********************************************************!*\
  !*** ./src/app/queue-status/queue-status.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueueStatusComponent: () => (/* binding */ QueueStatusComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 8540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! abstract-mqtt */ 1820);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(abstract_mqtt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var _env_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../env.properties */ 2430);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ 4289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pipes */ 4901);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/time-format.pipe */ 8041);
//import { sIMAGE_URL } from '../../app/properties';
//import { Subscription } from "rxjs";




//import { UUID } from "angular2-uuid";













function QueueStatusComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Currently you don't have any active Queue number(s). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function QueueStatusComponent_div_0_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, o_r3.TIME_OPEN), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, o_r3.TIME_CLOSE), "");
  }
}
function QueueStatusComponent_div_0_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Now Servicing");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Last Serviced");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 2, o_r3.PREFIX, 2, " "), "", o_r3.QUEUEN_T, "");
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 2, o_r3.PREFIX, 2, " "), "", o_r3.QUEUEN_T, "");
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 2, o_r3.PREFIX, 2, " "), "", o_r3.QUEUEN_T, "");
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile", 21)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QueueStatusComponent_div_0_div_2_mat_grid_tile_27_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      o_r3.bCanRequeue = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.onGiveUpQ(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Give Up Q#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QueueStatusComponent_div_0_div_2_mat_grid_tile_34_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      o_r3.bCanRequeue = false;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.onRequeue(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Requeue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QueueStatusComponent_div_0_div_2_mat_grid_tile_34_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !o_r3.bClosed && o_r3.bCanRequeue);
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "fetching...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_tile_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", o_r3.UsersInQ, " person(s) are in front");
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_list_39_mat_grid_tile_10_mat_grid_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-list", 32)(1, "mat-grid-tile")(2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QueueStatusComponent_div_0_div_2_mat_grid_list_39_mat_grid_tile_10_mat_grid_list_1_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const oo_r31 = restoredCtx.$implicit;
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.onExchangeWith(o_r3, oo_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const oo_r31 = ctx.$implicit;
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Exchange with Q# ", o_r3.PREFIX, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](4, 2, oo_r31 == null ? null : oo_r31.AVAILABLEQN.toString(), 3, "0"), " ");
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_list_39_mat_grid_tile_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QueueStatusComponent_div_0_div_2_mat_grid_list_39_mat_grid_tile_10_mat_grid_list_1_Template, 5, 6, "mat-grid-list", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", o_r3.oFreeSlots);
  }
}
function QueueStatusComponent_div_0_div_2_mat_grid_list_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-list", 25)(1, "mat-grid-tile")(2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QueueStatusComponent_div_0_div_2_mat_grid_list_39_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.onExchangeQN(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-grid-tile")(5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QueueStatusComponent_div_0_div_2_mat_grid_list_39_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r40.showFreeSlots(o_r3, 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-grid-tile")(8, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QueueStatusComponent_div_0_div_2_mat_grid_list_39_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r42.showFreeSlots(o_r3, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, QueueStatusComponent_div_0_div_2_mat_grid_list_39_mat_grid_tile_10_Template, 2, 1, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", o_r3.bShowFreeSlots == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", o_r3.bShowFreeSlots == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.bShowFreeSlots);
  }
}
function QueueStatusComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-card", 6)(6, "mat-card-title", 7)(7, "mat-grid-list", 8)(8, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, QueueStatusComponent_div_0_div_2_div_10_Template, 5, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, QueueStatusComponent_div_0_div_2_div_11_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-grid-list", 8)(15, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Your Q#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, QueueStatusComponent_div_0_div_2_mat_grid_tile_17_Template, 2, 0, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, QueueStatusComponent_div_0_div_2_mat_grid_tile_18_Template, 2, 0, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-grid-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, QueueStatusComponent_div_0_div_2_mat_grid_tile_20_Template, 4, 6, "mat-grid-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, QueueStatusComponent_div_0_div_2_mat_grid_tile_21_Template, 3, 6, "mat-grid-tile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, QueueStatusComponent_div_0_div_2_mat_grid_tile_22_Template, 3, 6, "mat-grid-tile", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-grid-tile", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-grid-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, QueueStatusComponent_div_0_div_2_mat_grid_tile_27_Template, 3, 0, "mat-grid-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "mat-grid-list", 15)(29, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Last in Q# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, QueueStatusComponent_div_0_div_2_mat_grid_tile_34_Template, 2, 1, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-grid-list", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, QueueStatusComponent_div_0_div_2_mat_grid_tile_36_Template, 2, 0, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, QueueStatusComponent_div_0_div_2_mat_grid_tile_37_Template, 2, 1, "mat-grid-tile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "mat-grid-tile", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, QueueStatusComponent_div_0_div_2_mat_grid_list_39_Template, 11, 3, "mat-grid-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", o_r3.ENAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", o_r3.ADDRESS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](o_r3.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.CURRENTQN < o_r3.QUEUEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.CURRENTQN > o_r3.QUEUEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.CURRENTQN == o_r3.QUEUEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](25, 19, o_r3 == null ? null : o_r3.PREFIX, 2, " "), "", o_r3 == null ? null : o_r3.CURRENTQN_T, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.CURRENTQN < o_r3.QUEUEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("\u00A0\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 23, o_r3.PREFIX, 2, " "), "", o_r3.LASTQ_T, "\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !o_r3.bLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.Loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", o_r3.UsersInQ > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !o_r3.bClosed && o_r3.UsersInQ > 1);
  }
}
function QueueStatusComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, QueueStatusComponent_div_0_div_1_Template, 3, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, QueueStatusComponent_div_0_div_2_Template, 40, 27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.oItems.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.oItems);
  }
}
const bDebug = true;
class QueueStatusComponent extends abstract_mqtt__WEBPACK_IMPORTED_MODULE_1__.MqttService {
  getMqttHost() {
    return this.sMqttHost;
  }
  getClientID() {
    //  super.sClientID = "qs-" + this.Global_Variables.UUID;
    return (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])();
  }
  constructor(oTBS, oLocation, oRouter, oAPIService) {
    super(_env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_HOST, _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_PORT, _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables, false);
    this.oTBS = oTBS;
    this.oLocation = oLocation;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.sTitle = "Queue Status";
    //const REQUEUE_TEXT = 'Requeue' ;
    //const REQUEING_TEXT = 'Processing..' ;
    this.oOptions = {
      useSSL: _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_USESSL,
      userName: "test",
      password: "test12"
      //    reconnect: true
    };
    //  oEntity: any = {};
    this.oItems = [];
    this.bDisabled = true;
    this.bLoaded = false;
    this.bShowWaitTime = false;
    //  sRequeueText = REQUEUE_TEXT ;
    // private onResumeSubscription: Subscription;
    // ngOnDestroy() {
    //   // always unsubscribe your subscriptions to prevent leaks
    //   this.onResumeSubscription.unsubscribe();
    // }
    this.sMqttHost = _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_HOST;
    super.setMqttOptions(this.oOptions);
    this.sMqttHost = _env_properties__WEBPACK_IMPORTED_MODULE_3__.MQTT_HOST; //'m-ezq.ignorelist.com';
    this.oTBS.titleChange({
      title: this.sTitle,
      status: super.getMqttStatus()
    });
    // this.Global_Variables.UUID = undefined;
    // try {
    //   this.oAPIService.send2ServerP("mqtthost/" + Global_Variables.oEID, true).then((data: any) => {
    //     var o = data.result;
    //     console.log(o);
    //     if (o.length > 0) {
    //       this.sMqttHost = o[0].MQTTHOST;
    //       if (this.oItems.length > 0)
    //         super.setConnect(true);
    //       if (bDebug)
    //         console.log(this.sMqttHost);
    //     }
    //     else
    //       this.sMqttHost = 'm-ezq.ignorelist.com';
    //   });
    // }
    // catch (err) {
    //   console.error(err);
    //   this.sMqttHost = 'm-ezq.ignorelist.com';
    // }
    //    this.oEntity = this.oLocation.getState();
    //     this.onResumeSubscription = platform.resume.subscribe(() => {
    // //      this.connect2MQTT();
    //       this.subscribe("CQ/" + this.oItems[0].ENTITYID + "/#");
    //     });
    // this.oAPIService.send2ServerP("mq", true).then((data: any) => {
    //   this.oItems = data.result;
    //   this.bLoaded = true;
    //   if (this.oItems.length > 0) {
    //     /*
    //       Topics:
    //         Current Queue ( for all services )
    //           CQ/<EntityID>/#
    //     */
    //     this.subscribe("CQ/" + this.oItems[0].ENTITYID + "/#");
    //   }
    // });
  }

  getUserName() {
    //TODO get a new JWT token that expires in few minutes.
    return _app_properties__WEBPACK_IMPORTED_MODULE_2__.Global_Variables.token?.['access_token'] || '';
  }
  //  ionViewDidEnter() {
  ngOnInit() {
    this.bLoaded = false;
    // this.setConnect(false);
    this.setConnect(true);
    // this.reconnect();
    try {
      this.oAPIService.send2ServerP("mq", true).then(data => {
        this.oItems = data.result;
        if (this.oItems.length > 0) {
          this.oItems.forEach((oItem, index) => {
            console.log(oItem);
            oItem.QUEUEN_T = this.padLeft(oItem.QUEUEN, "0", 3);
            oItem.CURRENTQN_T = this.padLeft(oItem.CURRENTQN, "0", 3);
            oItem.LASTQ_T = this.padLeft(oItem.ISSUEDQN, "0", 3);
            this.setCanQueueUpNow(oItem);
            if (index == this.oItems.length - 1) {
              setTimeout(() => {
                this.bLoaded = true;
              }, 500);
            }
          });
          this.setConnect(true);
          // this.reconnect();
          this.oItems.forEach((oItem, index) => {
            //          this.subscribe("CQ/" + this.oItems[0].ENTITYID + "/" + oItem.SERVICEID);
            this.subscribe("CQ/" + oItem.ENTITYID + "/" + oItem.SERVICEID);
            this.showFreeSlots(oItem, 0);
          });
        } else {
          this.bLoaded = true;
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  onConnectionStatusChange(sMqttStatus) {
    this.oTBS.titleChange({
      title: this.sTitle,
      status: sMqttStatus
    });
  }
  ngOnDestroy() {
    try {
      super.setConnect(false);
      // super.disconnectMQTT();
      console.log("Disconnected");
    } catch (err) {
      //console.log(err);
    }
  }
  padLeft(text, padChar, size) {
    return (String(padChar).repeat(size) + text).substr(size * -1, size);
  }
  processMessage(message) {
    // ./pushMessage.sh 'CQ/1/11' '23,<LastQ>'
    var t = super.getTopicPathInArray(message);
    if (t[0] == "ServerUp") {
      return;
    }
    if (t[0] == "IP") {
      this.onConnectionStatusChange(m);
      return;
    }
    var m = super.getMessageInArray(message);
    console.log(m);
    if (t[0] == "CQ") {
      this.oItems.forEach(oItem => {
        // console.log(oItem);
        if (oItem.ENTITYID == t[1] && oItem.SERVICEID == t[2]) {
          oItem.CURRENTQN = Number(m[0]);
          oItem.CURRENTQN_T = this.padLeft(oItem.CURRENTQN, "0", 3);
          //          oItem.LASTQ = m[1] ;
          oItem.LASTQ_T = this.padLeft(m[1], "0", 3);
          oItem.bCanRequeue = Number(m[1]) > Number(oItem.QUEUEN) + 2;
          if (oItem.CURRENTQN >= Number(oItem.QUEUEN)) oItem.bCanRequeue = false;
          //TO ENABLE LATER
          if (this.bShowWaitTime) this.onGetWaitTime(oItem);
        }
      });
    }
    // if (t[0] == 'AQ') { // Appointment
    //   this.oItems.forEach((oItem) => {
    //     if (oItem.ENTITYID == t[1] && oItem.SERVICEID == t[2]) {
    //       oItem.CURRENTAQN = Number(m[0]);
    //       oItem.CURRENTAQN_T = oItem.CURRENTAQN ;
    //     }
    //   });
    // }
  }

  showFreeSlots(oItem, iDir) {
    oItem.bShowFreeSlots = false;
    oItem.oFreeSlots = [];
    if (oItem.bClosed) return;
    if (oItem.UsersInQ <= 1) return;
    var sAPI = "freeslotsfront/";
    if (iDir == 1) sAPI = "freeslotsback/";
    this.oAPIService.send2ServerP(sAPI + oItem.ENTITYID + "/" + oItem.SERVICEID + "/" + oItem.QUEUEN + "/" + oItem.CURRENTQN, true, {
      DIR: iDir
    }).then(data => {
      oItem.oFreeSlots = data.result;
      oItem.bShowFreeSlots = true;
    }).catch(() => {
      oItem.bShowFreeSlots = true;
    });
  }
  onGetWaitTime(oItem) {
    this.oAPIService.send2ServerP("WaitTime/" + oItem.ENTITYID + "/" + oItem.SERVICEID + "/" + oItem.QUEUEN + "/" + oItem.CURRENTQN, true).then(data => {
      if (data === undefined) return;
      //      console.log(JSON.stringify(data));
      if (data.result[0].WAIT_TIME !== "-1")
        //        oItem.EstimatedWait = '--';
        //      else
        oItem.EstimatedWait = Number(data.result[0].WAIT_TIME);
      oItem.UsersInQ = data.result[0].USERSINQ;
    });
  }
  onExchangeWith(oItem, oFreeItem) {
    this.oAPIService.send2ServerP("exfreeq/" + oItem.ENTITYID + "/" + oItem.SERVICEID + "/" + oItem.QUEUEN + "/" + oFreeItem.UID + "/" + oFreeItem.AVAILABLEQN, true).then(data => {
      this.showFreeSlots(oItem, 0);
      if (data._error) {
        //        console.log("Exchanged Failed: " + data._error);
        //TODO add TOAST
        alert("sorry, requested Q# was taken.");
        return;
      }
      oItem.QUEUEN = data.result[0].QUEUEN;
      oItem.QUEUEN_T = this.padLeft(oItem.QUEUEN, "0", 3);
      //TODO add TOAST
      oItem.bShowFreeSlots = false;
      if (this.bShowWaitTime) this.onGetWaitTime(oItem);
    });
  }
  onExchangeQN(oItem) {
    this.oRouter.navigateByUrl("exchange", {
      state: oItem
    });
  }
  onGiveUpQ(oItem) {
    this.oAPIService.send2ServerP("leaveq/" + oItem.ENTITYID + "/" + oItem.SERVICEID + "/" + oItem.QUEUEN, true).then(data => {
      if (data._error === undefined) {
        console.log("LeaveQ:  " + JSON.stringify(data));
        try {
          super.setConnect(false);
        } catch (err) {
          //console.log(err);
        }
        this.ngOnInit();
      } else {
        if (bDebug) console.log(data);
      }
    });
  }
  onRequeue(oItem) {
    var iNow = Number(moment__WEBPACK_IMPORTED_MODULE_0__().format("Hmm"));
    if (iNow >= oItem._TC) {
      oItem.bClosed = true;
      oItem.bCanRequeue = false;
      return;
    }
    this.oAPIService.send2ServerP("qagain/" + oItem.ENTITYID + "/" + oItem.SERVICEID + "/" + oItem.QUEUEN, true).then(data => {
      if (data._error === undefined) {
        console.log("Requeue:  " + JSON.stringify(data));
        oItem.QUEUEN = data.result[0].QUEUEN;
        oItem.QUEUEN_T = this.padLeft(oItem.QUEUEN, "0", 3);
        oItem.bCanRequeue = false;
        this.showFreeSlots(oItem, 0);
        this.checkIfCanRequeue(oItem);
      } else {
        if (bDebug) console.log(data);
      }
    });
  }
  checkIfCanRequeue(oItem) {
    this.oAPIService.send2ServerP("canqagain/" + oItem.ENTITYID + "/" + oItem.SERVICEID + "/" + oItem.QUEUEN, true).then(data => {
      oItem.bCanRequeue = data.result[0].COUNT == 0;
    });
  }
  isClosedNow(oItem) {
    oItem.bClosed = true;
    oItem._BusinessHours.forEach(o => {
      var iNow = Number(moment__WEBPACK_IMPORTED_MODULE_0__(o.LOCAL_TIME).format("Hmm"));
      var iTO = Number(o.TIME_OPEN);
      var iTC = Number(o.TIME_CLOSE);
      if (iNow >= iTO && iNow <= iTC) {
        oItem.TIME_OPEN = iTO;
        oItem.TIME_CLOSE = iTC;
        oItem.bClosed = false;
        this.subscribe("CQ/" + o.ENTITYID + "/" + o.SERVICEID);
        oItem._TC = iTC;
      }
      oItem.bLoading = false;
    });
  }
  setCanQueueUpNow(oItem) {
    oItem.bLoading = true;
    try {
      this.oAPIService.send2ServerP("q/opened/" + oItem.ENTITYID + "/" + oItem.SERVICEID).then(data => {
        //     console.log("setCanQueueUpNow: " + JSON.stringify(data.result));
        if (data.result.length > 0) {
          oItem._bQOpened = true;
          oItem._BusinessHours = data.result;
          this.isClosedNow(oItem);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  static #_ = this.ɵfac = function QueueStatusComponent_Factory(t) {
    return new (t || QueueStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_4__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_5__.APIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: QueueStatusComponent,
    selectors: [["app-queue-status"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "full-height", 4, "ngIf"], [1, "full-height"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "centered-message"], [1, "entity-title"], ["appearance", "outlined"], [1, "service-title"], ["cols", "2", "rowHeight", "4:1"], ["text-center", "", "class", "ksd-smallfont", 4, "ngIf"], ["class", "ksd-mq", 4, "ngIf"], ["class", "ksd-mq-missed", 4, "ngIf"], ["class", "ksd-mq-calling blinking", 4, "ngIf"], [1, "ksd-cq"], ["cols", "2", "rowHeight", "8:1"], ["cols", "1", "rowHeight", "4:1"], [1, "ksd-lq"], ["cols", "3", "rowHeight", "4:3"], [1, "left"], ["cols", "3", "rowHeight", "4:1", 4, "ngIf"], ["text-center", "", 1, "ksd-smallfont"], [1, "ksd-mq"], [1, "ksd-mq-missed"], [1, "ksd-mq-calling", "blinking"], ["color", "accent", "mat-raised-button", "", "round", "", "full", "", 3, "click"], ["cols", "3", "rowHeight", "4:1"], ["color", "accent", "mat-raised-button", "", "round", "", 3, "click"], ["svgIcon", "ksd-exchange"], ["color", "accent", "mat-raised-button", "", "round", "", 3, "disabled", "click"], ["svgIcon", "ksd-left"], ["svgIcon", "ksd-right"], ["class", "ksd-items", 4, "ngFor", "ngForOf"], [1, "ksd-items"]],
    template: function QueueStatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, QueueStatusComponent_div_0_Template, 3, 2, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.bLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridTile, ngx_pipes__WEBPACK_IMPORTED_MODULE_16__.LeftPadPipe, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_6__.TimeFormatPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8946:
/*!************************************************!*\
  !*** ./src/app/reach-us/reach-us.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReachUsComponent: () => (/* binding */ ReachUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




class ReachUsComponent {
  constructor() {
    this.fields = [{
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true
    }, {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true
    }, {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true
    }, {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      //      required: true,
      onUpload: this.onUpload.bind(this)
    }, {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [{
        key: 'in',
        label: 'India'
      }, {
        key: 'us',
        label: 'USA'
      }]
    }, {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: 'm',
      required: true,
      options: [{
        key: 'm',
        label: 'Male'
      }, {
        key: 'f',
        label: 'Female'
      }]
    }, {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [{
        key: 'f',
        label: 'Fishing'
      }, {
        key: 'c',
        label: 'Cooking'
      }]
    }];
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
      fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(JSON.stringify(this.fields))
    });
    this.unsubcribe = this.form.valueChanges.subscribe(update => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }
  onUpload(e) {
    console.log(e);
  }
  getFields() {
    return this.fields;
  }
  ngDistroy() {
    this.unsubcribe();
  }
  static #_ = this.ɵfac = function ReachUsComponent_Factory(t) {
    return new (t || ReachUsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ReachUsComponent,
    selectors: [["app-reach-us"]],
    decls: 14,
    vars: 5,
    consts: [[1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "fields"], [1, "form-group", 3, "formGroup"], ["formControlName", "fields", "rows", "3", 1, "form-control"]],
    template: function ReachUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Reach Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dynamic-form-builder", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 0)(7, "div", 5)(8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fields", ctx.getFields());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 3, ctx.fields), "\n");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2231:
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var _env_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../env.properties */ 2430);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ 1525);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! abstract-mqtt */ 1820);
/* harmony import */ var abstract_mqtt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(abstract_mqtt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _title_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title-bar.service */ 9018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pipes */ 4901);
/* harmony import */ var _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/time-format.pipe */ 8041);




//import countriesAndTimezones from "countries-and-timezones";












function ServicesComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.sMessage);
  }
}
function ServicesComponent_div_0_mat_card_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 11)(1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "timeFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, o_r3.TIME_OPEN), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, o_r3.TIME_CLOSE), "");
  }
}
function ServicesComponent_div_0_mat_card_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-grid-tile")(4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicesComponent_div_0_mat_card_6_div_6_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.onBusinessHours(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Open Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function ServicesComponent_div_0_mat_card_6_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "mat-grid-tile")(2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicesComponent_div_0_mat_card_6_div_21_div_1_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.onGetQN(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Join Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function ServicesComponent_div_0_mat_card_6_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function ServicesComponent_div_0_mat_card_6_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ServicesComponent_div_0_mat_card_6_div_21_div_1_Template, 4, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ServicesComponent_div_0_mat_card_6_div_21_div_2_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", o_r3.bClosed);
  }
}
function ServicesComponent_div_0_mat_card_6_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "mat-grid-tile")(2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicesComponent_div_0_mat_card_6_div_22_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.goToStatus());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const o_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("Your Q# ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](4, 2, o_r3.PREFIX, 2, " "), "", o_r3._D[0].QUEUEN_T, "");
  }
}
function ServicesComponent_div_0_mat_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 5)(1, "mat-card-title", 6)(2, "mat-grid-list", 7)(3, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ServicesComponent_div_0_mat_card_6_div_5_Template, 5, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ServicesComponent_div_0_mat_card_6_div_6_Template, 6, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-card-content")(8, "mat-grid-list", 7)(9, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Now AA Servicing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Last");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-grid-list", 7)(14, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "lpad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-grid-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ServicesComponent_div_0_mat_card_6_div_21_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, ServicesComponent_div_0_mat_card_6_div_22_Template, 5, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-grid-tile")(24, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ServicesComponent_div_0_mat_card_6_Template_a_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22);
      const o_r3 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.onBookAppointment(o_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Book Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](o_r3.NAME);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", o_r3.bClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](16, 9, o_r3 == null ? null : o_r3.PREFIX, 2, " "), "", o_r3 == null ? null : o_r3.CURRENTQN_T, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](19, 13, o_r3 == null ? null : o_r3.PREFIX, 2, " "), "", o_r3 == null ? null : o_r3.ISSUEDQN_T, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", o_r3._D.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", o_r3._D.length > 0);
  }
}
function ServicesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ServicesComponent_div_0_div_5_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ServicesComponent_div_0_mat_card_6_Template, 27, 17, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.oEntity.NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r0.oEntity.ADDRESS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.sMessage != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.oItems);
  }
}
//import { UUID } from "angular2-uuid";
const NO_QUEUE_MESSAGE = "Services are shown during Business Hours only";
const NO_SERVICES_MESSAGE = "No Services Defined";
class ServicesComponent extends abstract_mqtt__WEBPACK_IMPORTED_MODULE_4__.MqttService {
  getMqttHost() {
    return this.sMqttHost;
  }
  getClientID() {
    //  super.sClientID = "qs-" + this.Global_Variables.UUID;
    // return uuidv4();
    return "qs-" + _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.UUID;
  }
  // public getClientID() {
  //   super.sClientID = "svc-" + this.Global_Variables.UUID;
  //   return super.sClientID;
  // }
  constructor(oTBS, oLocation, oRouter, oAPIService) {
    super(_env_properties__WEBPACK_IMPORTED_MODULE_2__.MQTT_HOST, _env_properties__WEBPACK_IMPORTED_MODULE_2__.MQTT_PORT, _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables, false);
    this.oTBS = oTBS;
    this.oLocation = oLocation;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.sTitle = "Services";
    this.sMessage = null;
    this.products = [];
    this.oEntity = {};
    this.oItems = [];
    this.bDisabled = true;
    this.bLoaded = false;
    this.bDebug = true;
    // oItem: any = { CURRENTQN: 0, ISSUEDQN: 0 };
    // oAItem: any = { CURRENTQN: 0, ISSUEDQN: 0 };
    this.oService = {};
    this.COUNTERN = -1;
    //  bHasMore: boolean = false;
    this.sEmail = "";
    this.bIsServicingAppointment = false;
    this.oOptions = {
      useSSL: _env_properties__WEBPACK_IMPORTED_MODULE_2__.MQTT_USESSL,
      userName: "test",
      password: "test12"
    };
    //  bShouldConnect = false;
    this.sMqttHost = _env_properties__WEBPACK_IMPORTED_MODULE_2__.MQTT_HOST;
    this.oEntity = this.oLocation.getState();
    if (this.oEntity.ID === undefined) {
      this.oRouter.navigate([""]);
      return;
    }
    console.log(">>>>> Entitiy", this.oEntity.ID);
    // this.Global_Variables.UUID = undefined;
    super.setMqttOptions(this.oOptions);
    this.COUNTERN = -1;
    this.sMessage = null;
    //    console.log(this.oEntity.ID, Global_Variables.oEID);
    //this.sMqttHost = MQTT_HOST; //'m-ezq.ignorelist.com';
    // this.oAPIService.send2ServerP("mqtthost/" + this.oEntity.ID, true).then((data: any) => {
    //   var o = data.result;
    //   console.log(o);
    //   if (o.length > 0) {
    //     this.sMqttHost = o[0].MQTTHOST;
    //     super.setConnect(true);
    //     // super.setConnect(this.bShouldConnect);
    //     console.log(this.sMqttHost);
    //   }
    // });
    console.log(">>>>> Entitiy", this.oEntity.ID);
    this.oAPIService.send2ServerP("services/" + this.oEntity.ID + "/f", true).then(data => {
      this.oItems = data.result;
      this.sMessage = null;
      //      console.log(this.oItems);
      if (this.oItems.length > 0) {
        // this.sMqttHost = this.oItems[0].MQTTHOST;
        super.setConnect(true);
        this.oItems.forEach((oItem, index) => {
          //          console.log("*** ", oItem);
          if (oItem._D.length > 0) oItem._D[0].QUEUEN_T = this.padLeft(oItem._D[0].QUEUEN, "0", 3);
          if (oItem.ISSUEDQN !== null) {
            oItem.CURRENTQN_T = this.padLeft(oItem.CURRENTQN, "0", 3);
            oItem.ISSUEDQN_T = this.padLeft(oItem.ISSUEDQN, "0", 3);
          }
          this.setCanQueueUpNow(oItem);
          if (index == this.oItems.length - 1) {
            setTimeout(() => {
              this.bLoaded = true;
            }, 500);
          }
        });
        super.subscribe("CQ/" + _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID + "/#");
      } else {
        super.setConnect(false);
        //        this.bShouldConnect = false;
        this.sMessage = NO_SERVICES_MESSAGE;
        this.bLoaded = true;
      }
    });
  }
  onConnectionStatusChange(sMqttStatus) {
    this.oTBS.titleChange({
      title: this.sTitle,
      status: sMqttStatus
    });
  }
  getUserName() {
    //TODO get a new JWT token that expires in few minutes.
    return _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.token?.['access_token'] || '';
  }
  goToStatus() {
    // try {
    //   super.setConnect(false);
    // }
    // catch (err) { }
    this.oRouter.navigate(["queuestatus"]);
  }
  padLeft(text, padChar, size) {
    return (String(padChar).repeat(size) + text).substr(size * -1, size);
  }
  isClosedNow(oItem) {
    oItem.bClosed = true;
    oItem._BusinessHours.forEach(o => {
      //      console.log(o);
      //get current time and check if it is inbetwen
      var currentTime = moment_timezone__WEBPACK_IMPORTED_MODULE_3__(o.LOCAL_TIME).format("Hmm");
      // console.log ( "TIMEZONE: " +  moment().parseZone().localeData ) ;
      var iNow = Number(currentTime);
      var iTO = Number(o.TIME_OPEN);
      var iTC = Number(o.TIME_CLOSE);
      // console.log("Comparing: " + currentTime + " with " + moment(o.TIME_OPEN).format("Hmm") + " and " + moment(o.TIME_CLOSE).format("Hmm"));
      // if (moment(currentTime).isBetween(moment(o.TIME_OPEN, "Hmm"), moment(o, "Hmm")))
      if (iNow >= iTO && iNow <= iTC) {
        oItem.TIME_OPEN = iTO;
        oItem.TIME_CLOSE = iTC;
        //     console.log("Open NOW...");
        oItem.bClosed = false;
      }
      oItem.bLoading = false;
    });
  }
  // onPurchase(oItem: any) {
  //   //https://medium.com/@andrew.thielcole/in-app-purchases-with-ionic-3-af13b21f49f2
  //   // ionic cordova plugin add cc.fovea.cordova.purchase --variable BILLING_KEY="<ANDROID_BILLING_KEY>"
  //   // $ npm install --save @ionic-native/in-app-purchase-2
  // }
  onBookAppointment(oItem) {
    console.log(oItem);
    //send oService
    this.oRouter.navigateByUrl("appointment", {
      state: {
        oServiceItem: oItem,
        oEntityItem: this.oEntity
      }
    });
    //   this.navCtrl.setRoot('AppointmentPage') ;
  }

  onGetQN(oItem) {
    //    this.oIAP.buy(this.products[0]).then(data => {
    /*
    data will contain {
     transactionId: ...
     receipt: ...
     signature: ...
    }
    */
    this.oAPIService.send2ServerP("gqn/" + _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID + "/" + oItem.ID, true).then(data => {
      if (data._error) {
        console.error(data._error);
        return;
      }
      // Required for Android.  However, can be called for iOS as well.
      //      this.oIAP.consume ( data.productType, data.receipt, data.signature ) ;
      this.goToStatus();
    });
    //  });
  }

  setCanQueueUpNow(oItem) {
    oItem.bLoading = true;
    this.oAPIService.send2ServerP("q/opened/" + _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.oEID + "/" + oItem.ID).then(data => {
      //      console.log(JSON.stringify(data.result));
      if (data.result?.length > 0) {
        //        this.zone.run(() => {
        oItem._bQOpened = true;
        oItem._BusinessHours = data.result;
        this.isClosedNow(oItem);
        //          console.log("Setting Opened = TRUE");
        //        });
      } else {
        oItem.bClosed = true;
        oItem.PREFIX = "";
        oItem.CURRENTQN_T = "closed";
        oItem.ISSUEDQN_T = "closed";
      }
    });
  }
  onBusinessHours(oItem) {
    var _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      oItem.ENAME = _this.oEntity.ENAME;
      yield _this.oRouter.navigateByUrl("businesshours", {
        state: oItem
      });
    })();
  }
  ngOnInit() {
    var me = this;
    this.oTBS.oCurrentTitle.subscribe(obj => {
      console.log("Connection", obj);
      setTimeout(() => {
        this.sTitle = obj.title;
        me.oMqttStatus = obj.status;
        // console.log(this.sColor, this.sMqttStatus);
      }, 1);
    });
    // this.sMessage = null;
    // if (this.bLoaded && this.oItems.length > 0) {
    //   // this.bShouldConnect = true;
    //   //      super.subscribe("CQ/" + Global_Variables.oEID + "/#");
    //   super.setConnect(true);
    //   this.oItems.forEach(oItem => {
    //     this.setCanQueueUpNow(oItem);
    //   })
    // }
    // else {
    //   this.sMessage = NO_SERVICES_MESSAGE;
    // }
  }

  ngOnDestroy() {
    try {
      super.setConnect(false);
      super.disconnectMQTT();
    } catch (err) {
      //      console.log("ERROR ", err);
    }
  }
  processMessage(message) {
    // ./pushMessage.sh 'CQ/1/11' '21,49'
    //    var t = message.destinationName.split('/');
    //    console.log(d[0] + " " + d[1] + " " + d[2]);
    //    var m = message.payloadString.split(',');
    //    console.log(m[0] + " and " + m[1]);
    var t = super.getTopicPathInArray(message);
    var m = super.getMessageInArray(message);
    if (t[0] == "ServerUp") {
      return;
    }
    if (t[0] == "IP") {
      this.onConnectionStatusChange(m);
      return;
    }
    if (t[0] == "CQ") {
      this.oItems.forEach(oItem => {
        if (oItem.ID == t[2]) {
          // if ( m[0] == '0' && m[1] == '0')
          //   return ;
          oItem.CURRENTQN = Number(m[0]);
          oItem.CURRENTQN_T = this.padLeft(oItem.CURRENTQN, "0", 3);
          oItem.ISSUEDQN = Number(m[1]);
          oItem.ISSUEDQN_T = this.padLeft(oItem.ISSUEDQN, "0", 3);
        }
      });
    }
  }
  static #_ = this.ɵfac = function ServicesComponent_Factory(t) {
    return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_title_bar_service__WEBPACK_IMPORTED_MODULE_5__.TitleBarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_6__.APIService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: ServicesComponent,
    selectors: [["app-services"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "full-height", 4, "ngIf"], [1, "full-height"], [1, "entity-title"], [4, "ngIf"], ["appearance", "outlined", 4, "ngFor", "ngForOf"], ["appearance", "outlined"], [1, "service-title"], ["cols", "2", "rowHeight", "4:1"], ["text-center", "", "class", "ksd-smallfont", 4, "ngIf"], ["cols", "2", "rowHeight", "3:1"], ["color", "accent", "mat-raised-button", "", 3, "click"], ["text-center", "", 1, "ksd-smallfont"], ["mat-button", "", "block", "", "color", "accent", 3, "click"]],
    template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ServicesComponent_div_0_Template, 7, 4, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.bLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridTile, ngx_pipes__WEBPACK_IMPORTED_MODULE_15__.LeftPadPipe, _pipes_time_format_pipe__WEBPACK_IMPORTED_MODULE_7__.TimeFormatPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4509:
/*!****************************************************!*\
  !*** ./src/app/take-queue/take-queue.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TakeQueueComponent: () => (/* binding */ TakeQueueComponent)
/* harmony export */ });
/* harmony import */ var _Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/properties */ 8101);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 4289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 8789);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ 6466);







const bDebug = true;
class TakeQueueComponent {
  constructor(activatedRoute, oRouter, oAPIService, oAuthService) {
    this.activatedRoute = activatedRoute;
    this.oRouter = oRouter;
    this.oAPIService = oAPIService;
    this.oAuthService = oAuthService;
  }
  // http://d-ezq.ignorelist.com/?a75bc6ec-344a-006b-28b4-9e949866a485
  // http://localhost:8888/#/takequeue?334b9a07-e8f6-f2a9-f837-14f4891a6ab9
  ngOnInit() {
    if (this.activatedRoute.snapshot.queryParamMap.keys !== undefined) {
      _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.InstantQ = this.activatedRoute.snapshot.queryParamMap.keys[0];
      if (_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.InstantQ !== undefined && _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.InstantQ.length > 2) {
        var sCountry = "SG";
        var lat = "0.010";
        var lng = "22.00";
        this.getInstantQNumber(_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.InstantQ, sCountry, lat, lng);
      }
    }
    console.log(_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.InstantQ);
  }
  getInstantQNumber(sInstantQServiceID, sCountry, lat, lng) {
    var _this = this;
    return (0,_Users_uqapp_qstatus_qmobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.InstantQ = ''; // reset
      console.log(sInstantQServiceID);
      _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry = sCountry;
      // this.oDemographics = this.oAuthService.getDemographics();
      // if (this.oDemographics !== undefined || this.oDemographics != null) {
      //   Global_Variables.sCountry = this.oDemographics.sCountry;
      // }
      _this.oAuthService.clearToken();
      _this.oAuthService.saveDemographics({
        sCountry: _app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.sCountry
        // lat: lat,
        // lng: lng
      });

      var data = {};
      // data.DEVICEUID = this.oAuthService.getDeviceID();
      // if (data.DEVICEUID === undefined || data.DEVICEUID == null)
      //   data.DEVICEUID = this.oAuthService.saveDeviceID(uuidv4());
      data.email = _this.oAuthService.getDeviceID();
      if (data.email === undefined || data.email == null) {
        data.email = _this.oAuthService.saveDeviceID((0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])());
        data.password = data.email;
      }
      try {
        yield _this.oAuthService.login(_app_properties__WEBPACK_IMPORTED_MODULE_1__.Global_Variables.AUTH_URL, data);
      } catch (err) {
        console.error(err);
      }
      //    var b = await (this.oAuthService.loadUserInfo({}));
      _this.oAPIService.send2ServerP("instantqn/" + sInstantQServiceID, true, {
        COUNTRY: sCountry
      }).then(d => {
        if (d._error) console.error(d._error);
        //   // TODO Handle Error Messages like
        //   // EX_Q_UNAVAILABLE
        //   // EX_Q_MAX_REACHED
        //   if (data._error.indexOf("EX_Q_ALREADY_PRESENT") == -1) {
        //     // console.log(data._error);
        //     // this.oRouter.navigateByUrl('entities');
        //     return;
        //   }
        //    }
        _this.oRouter.navigateByUrl('queuestatus');
      });
    })();
  }
  static #_ = this.ɵfac = function TakeQueueComponent_Factory(t) {
    return new (t || TakeQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__.APIService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: TakeQueueComponent,
    selectors: [["app-take-queue"]],
    decls: 2,
    vars: 0,
    template: function TakeQueueComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "take-queue works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5023:
/*!*******************************************!*\
  !*** ./src/app/time24to12-format.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Time24to12FormatPipe: () => (/* binding */ Time24to12FormatPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class Time24to12FormatPipe {
  transform(time) {
    let ap = "am";
    let t = +time;
    if (t < 59) t += 1200;else {
      if (t > 1159) ap = "pm";
      if (t > 1259) {
        t -= 1200;
      }
    }
    let sT = "" + t;
    let position = sT.length - 2;
    return time + " ( " + sT.substring(0, position) + ":" + sT.substring(position) + " " + ap + " ) ";
  }
  static #_ = this.ɵfac = function Time24to12FormatPipe_Factory(t) {
    return new (t || Time24to12FormatPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "time24to12Format",
    type: Time24to12FormatPipe,
    pure: true
  });
}

/***/ }),

/***/ 9018:
/*!**************************************!*\
  !*** ./src/app/title-bar.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleBarService: () => (/* binding */ TitleBarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class TitleBarService {
  constructor() {
    this.oTitleObject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      title: 'EzQueue',
      status: ''
    });
    this.oCurrentTitle = this.oTitleObject.asObservable();
  }
  titleChange(obj) {
    this.oTitleObject.next(obj);
  }
  static #_ = this.ɵfac = function TitleBarService_Factory(t) {
    return new (t || TitleBarService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TitleBarService,
    factory: TitleBarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6366:
/*!*********************************************!*\
  !*** ./src/app/web-notification.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebNotificationService: () => (/* binding */ WebNotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ 1509);



// https://medium.com/@arjenbrandenburgh/angulars-pwa-swpush-and-swupdate-15a7e5c154ac
class WebNotificationService {
  constructor(http, swPush) {
    this.http = http;
    this.swPush = swPush;
    this.VAPID_PUBLIC_KEY = '<VAPID-PUBLIC-KEY-HERE>';
    this.baseUrl = 'http://localhost:5000/notifications';
  }
  subscribeToNotification() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then(sub => this.sendToServer(sub)).catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendToServer(params) {
    this.http.post(this.baseUrl, {
      notification: params
    }).subscribe();
  }
  static #_ = this.ɵfac = function WebNotificationService_Factory(t) {
    return new (t || WebNotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__.SwPush));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: WebNotificationService,
    factory: WebNotificationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2430:
/*!*******************************!*\
  !*** ./src/env.properties.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MQTT_HOST: () => (/* binding */ MQTT_HOST),
/* harmony export */   MQTT_PORT: () => (/* binding */ MQTT_PORT),
/* harmony export */   MQTT_USESSL: () => (/* binding */ MQTT_USESSL),
/* harmony export */   sEndPoint: () => (/* binding */ sEndPoint)
/* harmony export */ });
const sEndPoint = "https://api.bullish.sg/";
const MQTT_HOST = 'msg.bullish.sg';
const MQTT_PORT = 443;
const MQTT_USESSL = true;

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 5528,
	"./af.js": 5528,
	"./ar": 1036,
	"./ar-dz": 7579,
	"./ar-dz.js": 7579,
	"./ar-kw": 9588,
	"./ar-kw.js": 9588,
	"./ar-ly": 1650,
	"./ar-ly.js": 1650,
	"./ar-ma": 3258,
	"./ar-ma.js": 3258,
	"./ar-sa": 4085,
	"./ar-sa.js": 4085,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 1036,
	"./az": 9757,
	"./az.js": 9757,
	"./be": 9620,
	"./be.js": 9620,
	"./bg": 1139,
	"./bg.js": 1139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 9641,
	"./bn-bd": 9126,
	"./bn-bd.js": 9126,
	"./bn.js": 9641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 934,
	"./br.js": 934,
	"./bs": 6274,
	"./bs.js": 6274,
	"./ca": 5831,
	"./ca.js": 5831,
	"./cs": 2354,
	"./cs.js": 2354,
	"./cv": 9692,
	"./cv.js": 9692,
	"./cy": 8774,
	"./cy.js": 8774,
	"./da": 8955,
	"./da.js": 8955,
	"./de": 1557,
	"./de-at": 4954,
	"./de-at.js": 4954,
	"./de-ch": 1881,
	"./de-ch.js": 1881,
	"./de.js": 1557,
	"./dv": 6475,
	"./dv.js": 6475,
	"./el": 8877,
	"./el.js": 8877,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 7356,
	"./en-ca.js": 7356,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 9481,
	"./en-ie.js": 9481,
	"./en-il": 5471,
	"./en-il.js": 5471,
	"./en-in": 9664,
	"./en-in.js": 9664,
	"./en-nz": 7672,
	"./en-nz.js": 7672,
	"./en-sg": 805,
	"./en-sg.js": 805,
	"./eo": 7390,
	"./eo.js": 7390,
	"./es": 1564,
	"./es-do": 1473,
	"./es-do.js": 1473,
	"./es-mx": 2089,
	"./es-mx.js": 2089,
	"./es-us": 4156,
	"./es-us.js": 4156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 2687,
	"./fi.js": 2687,
	"./fil": 32,
	"./fil.js": 32,
	"./fo": 6845,
	"./fo.js": 6845,
	"./fr": 8875,
	"./fr-ca": 6425,
	"./fr-ca.js": 6425,
	"./fr-ch": 1746,
	"./fr-ch.js": 1746,
	"./fr.js": 8875,
	"./fy": 7037,
	"./fy.js": 7037,
	"./ga": 1217,
	"./ga.js": 1217,
	"./gd": 7010,
	"./gd.js": 7010,
	"./gl": 1931,
	"./gl.js": 1931,
	"./gom-deva": 4488,
	"./gom-deva.js": 4488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 4984,
	"./gu.js": 4984,
	"./he": 9090,
	"./he.js": 9090,
	"./hi": 2085,
	"./hi.js": 2085,
	"./hr": 8787,
	"./hr.js": 8787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 9819,
	"./hy-am.js": 9819,
	"./id": 4074,
	"./id.js": 4074,
	"./is": 715,
	"./is.js": 715,
	"./it": 3838,
	"./it-ch": 7040,
	"./it-ch.js": 7040,
	"./it.js": 3838,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 4346,
	"./jv.js": 4346,
	"./ka": 5538,
	"./ka.js": 5538,
	"./kk": 7108,
	"./kk.js": 7108,
	"./km": 7905,
	"./km.js": 7905,
	"./kn": 9125,
	"./kn.js": 9125,
	"./ko": 9140,
	"./ko.js": 9140,
	"./ku": 6780,
	"./ku.js": 6780,
	"./ky": 3768,
	"./ky.js": 3768,
	"./lb": 4016,
	"./lb.js": 4016,
	"./lo": 3169,
	"./lo.js": 3169,
	"./lt": 2353,
	"./lt.js": 2353,
	"./lv": 3243,
	"./lv.js": 3243,
	"./me": 2338,
	"./me.js": 2338,
	"./mi": 5555,
	"./mi.js": 5555,
	"./mk": 5794,
	"./mk.js": 5794,
	"./ml": 3151,
	"./ml.js": 3151,
	"./mn": 6458,
	"./mn.js": 6458,
	"./mr": 9165,
	"./mr.js": 9165,
	"./ms": 8680,
	"./ms-my": 7477,
	"./ms-my.js": 7477,
	"./ms.js": 8680,
	"./mt": 9684,
	"./mt.js": 9684,
	"./my": 285,
	"./my.js": 285,
	"./nb": 5922,
	"./nb.js": 5922,
	"./ne": 9040,
	"./ne.js": 9040,
	"./nl": 5066,
	"./nl-be": 4460,
	"./nl-be.js": 4460,
	"./nl.js": 5066,
	"./nn": 3693,
	"./nn.js": 3693,
	"./oc-lnc": 8676,
	"./oc-lnc.js": 8676,
	"./pa-in": 2341,
	"./pa-in.js": 2341,
	"./pl": 7416,
	"./pl.js": 7416,
	"./pt": 4344,
	"./pt-br": 113,
	"./pt-br.js": 113,
	"./pt.js": 4344,
	"./ro": 2643,
	"./ro.js": 2643,
	"./ru": 1305,
	"./ru.js": 1305,
	"./sd": 6095,
	"./sd.js": 6095,
	"./se": 4486,
	"./se.js": 4486,
	"./si": 8742,
	"./si.js": 8742,
	"./sk": 6722,
	"./sk.js": 6722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 2416,
	"./sq.js": 2416,
	"./sr": 9450,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 9450,
	"./ss": 2222,
	"./ss.js": 2222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 9638,
	"./sw.js": 9638,
	"./ta": 6494,
	"./ta.js": 6494,
	"./te": 4435,
	"./te.js": 4435,
	"./tet": 5003,
	"./tet.js": 5003,
	"./tg": 3706,
	"./tg.js": 3706,
	"./th": 6025,
	"./th.js": 6025,
	"./tk": 9780,
	"./tk.js": 9780,
	"./tl-ph": 2068,
	"./tl-ph.js": 2068,
	"./tlh": 9167,
	"./tlh.js": 9167,
	"./tr": 2494,
	"./tr.js": 2494,
	"./tzl": 8707,
	"./tzl.js": 8707,
	"./tzm": 1296,
	"./tzm-latn": 4532,
	"./tzm-latn.js": 4532,
	"./tzm.js": 1296,
	"./ug-cn": 2086,
	"./ug-cn.js": 2086,
	"./uk": 5069,
	"./uk.js": 5069,
	"./ur": 9304,
	"./ur.js": 9304,
	"./uz": 5115,
	"./uz-latn": 7609,
	"./uz-latn.js": 7609,
	"./uz.js": 5115,
	"./vi": 4802,
	"./vi.js": 4802,
	"./x-pseudo": 5605,
	"./x-pseudo.js": 5605,
	"./yo": 8456,
	"./yo.js": 8456,
	"./zh-cn": 3272,
	"./zh-cn.js": 3272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 4025,
	"./zh-mo.js": 4025,
	"./zh-tw": 262,
	"./zh-tw.js": 262
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map