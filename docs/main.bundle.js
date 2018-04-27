webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-player></app-player>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_service__ = __webpack_require__("./src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_player_component__ = __webpack_require__("./src/app/player/player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent_1 = AppComponent;
    AppComponent = AppComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                AppComponent_1,
                __WEBPACK_IMPORTED_MODULE_2__player_player_component__["a" /* PlayerComponent */]
            ],
            imports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_0__player_service__["a" /* PlayerService */]]
        })
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_player_component__ = __webpack_require__("./src/app/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_service__ = __webpack_require__("./src/app/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__player_player_component__["a" /* PlayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__player_service__["a" /* PlayerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_howler__ = __webpack_require__("./node_modules/howler/dist/howler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_howler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_howler__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  use those 2 sources for the data visualisation
  https://s3.amazonaws.com/mixgenius.testing/howler-test/visualization-original-1000.json

  https://s3.amazonaws.com/mixgenius.testing/howler-test/visualization-rawmaster-1000.json
*/
var PlayerService = /** @class */ (function () {
    function PlayerService() {
        this.currentSource = 0;
        this.sources = [];
        this.howls = [];
        this.mastered = this.addTrack(['https://s3.amazonaws.com/mixgenius.testing/howler-test/LANDR-30s_quickWorking.wav']);
        this.original = this.addTrack(['https://s3.amazonaws.com/mixgenius.testing/howler-test/30s_quickWorking.wav']);
    }
    PlayerService.prototype.addTrack = function (sources) {
        var track = new __WEBPACK_IMPORTED_MODULE_1_howler__["Howl"]({
            src: sources,
            preload: true,
            autoplay: false,
        });
        this.howls.push(track);
        return track;
    };
    PlayerService.prototype.getInfos = function (id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (o) {
            setInterval(function () {
                _this.howls.map(function (h) { return console.log(h.seek()); });
                var h = _this.howls[id];
                o.next({
                    'position': h.seek(),
                    'duration': h.duration(),
                    'state': h.state(),
                    'muted': h.mute(),
                });
            }, 300);
        });
    };
    PlayerService.prototype.getDuration = function (id) {
        this.howls[id].duration();
    };
    PlayerService.prototype.playTrackById = function (id) {
        this.howls[id].play();
    };
    PlayerService.prototype.pauseTrackById = function (id) {
        this.howls[id].pause();
    };
    PlayerService.prototype.playAll = function () {
        this.howls.map(function (h) { return h.playing() ? null : h.play(); });
    };
    PlayerService.prototype.pauseAll = function () {
        this.howls.map(function (h) { return h.pause(); });
    };
    PlayerService.prototype.playOriginal = function () {
        this.playAll();
        this.original.mute(false);
        this.mastered.mute(true);
    };
    PlayerService.prototype.playMastered = function () {
        this.playAll();
        this.mastered.mute(false);
        this.original.mute(true);
    };
    PlayerService.prototype.seekTo = function (sec) {
        this.howls.map(function (howl) { return howl.seek(sec); });
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/***/ (function(module, exports) {

module.exports = ".waveform{\n    width:100%;\n    height: 200px;\n    background: pink;\n}\n\n.position{\n  width: 5px;\n  height: 200px;\n  left: 100px;\n  position: absolute;\n  background-color: black;\n}\n\nmenu{\n  background: blue;\n}\n\n.container{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n"

/***/ }),

/***/ "./src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"waveform\" (click)=\"seek($event)\">\n    <div class=\"position\"></div>\n    <h2>original drums</h2>\n    <h3> Current position:  {{original.pos}}</h3>\n    <h3> Duration:  {{original.duration}}</h3>\n    <h3> State:  {{original.state}}</h3>\n  </div>\n  <menu type=\"context\">\n    <button  (click)=\"play(0)\">Play</button>\n    <button (click)=\"pause(0)\">Pause</button>\n  </menu>\n</div>\n\n<div class=\"container\">\n  <div class=\"waveform\" (click)=\"seek($event)\">\n    <div class=\"position\"></div>\n    <h2>mastered drums</h2>\n    <h3> Current position:  {{mastered.pos}}</h3>\n    <h3> Duration:  {{mastered.duration}}</h3>\n    <h3> State:  {{mastered.state}}</h3>\n  </div>\n  <menu type=\"context\">\n    <button  (click)=\"play(1)\">Play</button>\n    <button (click)=\"pause(1)\">Pause</button>\n  </menu>\n</div>\n\n<button  (click)=\"playall()\">PlayAll</button>\n<button  (click)=\"pauseAll()\">PauseAll</button>\n<button  (click)=\"playOriginal()\">playOriginal</button>\n<button  (click)=\"playMastered()\">playMastered</button>\n<button  (click)=\"playMastered()\">playMastered</button>\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_service__ = __webpack_require__("./src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService) {
        this.playerService = playerService;
        this.original = { pos: 0, duration: 0 };
        this.mastered = { pos: 0, duration: 0 };
    }
    PlayerComponent.prototype.play = function (id) {
        this.playerService.playTrackById(id);
    };
    PlayerComponent.prototype.pause = function (id) {
        this.playerService.pauseTrackById(id);
    };
    PlayerComponent.prototype.seek = function (e) {
        this.playerService.seekTo(Math.random() * 31);
    };
    PlayerComponent.prototype.playall = function () {
        this.playerService.playAll();
    };
    PlayerComponent.prototype.pauseAll = function () {
        this.playerService.pauseAll();
    };
    PlayerComponent.prototype.playOriginal = function () {
        this.playerService.playOriginal();
    };
    PlayerComponent.prototype.playMastered = function () {
        this.playerService.playMastered();
    };
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getInfos(0).subscribe(function (h) {
            _this.original.pos = h.position;
            _this.original.duration = h.duration;
            _this.original.state = h.state;
        });
        this.playerService.getInfos(1).subscribe(function (h) {
            _this.mastered.pos = h.position;
            _this.mastered.duration = h.duration;
            _this.mastered.state = h.state;
        });
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("./src/app/player/player.component.html"),
            styles: [__webpack_require__("./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__player_service__["a" /* PlayerService */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map