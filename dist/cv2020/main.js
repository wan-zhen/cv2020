(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/@core/model/chart.ts":
/*!**************************************!*\
  !*** ./src/app/@core/model/chart.ts ***!
  \**************************************/
/*! exports provided: chartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartData", function() { return chartData; });
const chartData = {
    "name": "Zhen",
    "children": [
        {
            "name": "HTML",
            "children": [
                {
                    "name": "HTML5 Semantic",
                }
            ]
        },
        {
            "name": "CSS",
            "children": [
                {
                    "name": "Preprocessors",
                    "children": [
                        { "name": "Sass" },
                        { "name": "Scss" },
                        { "name": "Less" },
                    ]
                }, {
                    "name": "RWD"
                },
                {
                    "name": "Frameworks",
                    "children": [
                        { "name": "Bootstrap 3/4" },
                    ]
                },
            ]
        },
        {
            "name": "JavaScript",
            "children": [
                { "name": "ES5/ES6" },
                { "name": "Fetch API" },
                { "name": "TypeScript" },
                {
                    "name": "WebSockets",
                    "children": [
                        { "name": "SignalR Client" },
                    ]
                },
                {
                    "name": "GraphQL",
                }
            ]
        },
        {
            "name": "Framework",
            "children": [
                {
                    "name": "Angular",
                    "children": [
                        { "name": "RxJS", },
                        {
                            "name": "UI Framework",
                            "children": [
                                { "name": "Nebular", },
                                { "name": "Material", },
                                { "name": "PrimeNG", },
                            ]
                        },
                        { "name": "Protractor E2E Test", },
                        { "name": "Store ( Akita )", },
                        { "name": "Schematic", }
                    ]
                },
                {
                    "name": "AngularJS",
                    "children": [
                        { "name": "Unit Test ( Jasmine )", },
                    ]
                },
                { "name": "Vue.js" },
                { "name": "single-spa" },
            ]
        },
        {
            "name": "Build Tools",
            "children": [
                { "name": "Webpack" }
            ]
        },
        {
            "name": "CI/CD",
            "children": [
                { "name": "Gitlab CI" },
                { "name": "Azure DevOps" },
                { "name": "Travis CI" },
            ]
        },
        {
            "name": "Version Control Systems",
            "children": [
                {
                    "name": "Basic Usage of Git",
                    "children": [
                        { "name": "GitHub" },
                        { "name": "GitLab" },
                    ]
                },
                {
                    "name": "Visual Studio Team Services",
                    "children": [
                        { "name": " Team Foundation Server (Microsoft TFS)" },
                    ]
                },
            ]
        },
    ]
};


/***/ }),

/***/ "./src/app/abilities/abilities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/abilities/abilities.component.ts ***!
  \**************************************************/
/*! exports provided: AbilitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesComponent", function() { return AbilitiesComponent; });
/* harmony import */ var _core_model_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../@core/model/chart */ "./src/app/@core/model/chart.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../arrow-btn/arrow-btn.component */ "./src/app/arrow-btn/arrow-btn.component.ts");





class AbilitiesComponent {
    constructor() { }
    ngOnInit() {
        this.options = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    data: [_core_model_chart__WEBPACK_IMPORTED_MODULE_0__["chartData"]],
                    top: '1%',
                    left: '5%',
                    bottom: '5%',
                    right: '5%',
                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 16
                    },
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    initialTreeDepth: 5,
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };
    }
}
AbilitiesComponent.ɵfac = function AbilitiesComponent_Factory(t) { return new (t || AbilitiesComponent)(); };
AbilitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AbilitiesComponent, selectors: [["app-abilities"]], decls: 2, vars: 2, consts: [["echarts", "", 1, "chart", 3, "options"], [3, "index"]], template: function AbilitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-arrow-btn", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("index", 3);
    } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_2__["NgxEchartsDirective"], _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_3__["ArrowBtnComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.3);\n  background-image: url(\"/cv2020/dist/cv2020/assets/images/egg_shell.jpg\");\n  position: relative;\n}\n\n.chart[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJpbGl0aWVzL2FiaWxpdGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hYmlsaXRpZXMvYWJpbGl0aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9jdjIwMjAvZGlzdC9jdjIwMjAvYXNzZXRzL2ltYWdlcy9lZ2dfc2hlbGwuanBnJyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jaGFydHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AbilitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-abilities',
                templateUrl: './abilities.component.html',
                styleUrls: ['./abilities.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/abount/abount.component.ts":
/*!********************************************!*\
  !*** ./src/app/abount/abount.component.ts ***!
  \********************************************/
/*! exports provided: AbountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbountComponent", function() { return AbountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arrow-btn/arrow-btn.component */ "./src/app/arrow-btn/arrow-btn.component.ts");



class AbountComponent {
    constructor() { }
    ngOnInit() {
    }
}
AbountComponent.ɵfac = function AbountComponent_Factory(t) { return new (t || AbountComponent)(); };
AbountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbountComponent, selectors: [["app-abount"]], decls: 19, vars: 1, consts: [[1, "row", "animate__animated", "animate__zoomInRight"], [1, "col-xl-5", "col-4", "align-self-center"], [1, "text-right"], [1, "col-xl-2", "col-4", "me"], [3, "index"]], template: function AbountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1992/11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Taichung City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Front end developer / 5 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wan-zhen Shiou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "National Taichung University of Science and Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Department of Information Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-arrow-btn", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", 2);
    } }, directives: [_arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_1__["ArrowBtnComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.3);\n  background-image: url(\"/cv2020/dist/cv2020/assets/images/white_brick_wall.png\");\n  position: relative;\n}\n\n.row[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 96vw;\n  margin: 0 auto;\n}\n\n.me[_ngcontent-%COMP%] {\n  background-image: url(\"/cv2020/dist/cv2020/assets/images/me.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdW50L2Fib3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSwrRUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlFQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3VudC9hYm91bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2N2MjAyMC9kaXN0L2N2MjAyMC9hc3NldHMvaW1hZ2VzL3doaXRlX2JyaWNrX3dhbGwucG5nJyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiA5NnZ3O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9jdjIwMjAvZGlzdC9jdjIwMjAvYXNzZXRzL2ltYWdlcy9tZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-abount',
                templateUrl: './abount.component.html',
                styleUrls: ['./abount.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _abount_abount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abount/abount.component */ "./src/app/abount/abount.component.ts");
/* harmony import */ var _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abilities/abilities.component */ "./src/app/abilities/abilities.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");







class AppComponent {
    constructor() {
        this.title = 'cv2020';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-abount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-abilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-nav");
    } }, directives: [_start_start_component__WEBPACK_IMPORTED_MODULE_1__["StartComponent"], _abount_abount_component__WEBPACK_IMPORTED_MODULE_2__["AbountComponent"], _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_3__["AbilitiesComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _abount_abount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abount/abount.component */ "./src/app/abount/abount.component.ts");
/* harmony import */ var _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arrow-btn/arrow-btn.component */ "./src/app/arrow-btn/arrow-btn.component.ts");
/* harmony import */ var _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./abilities/abilities.component */ "./src/app/abilities/abilities.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"].forRoot({
                echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "./node_modules/echarts/index.js", 7))
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"],
        _abount_abount_component__WEBPACK_IMPORTED_MODULE_5__["AbountComponent"],
        _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_6__["ArrowBtnComponent"],
        _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_7__["AbilitiesComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"],
                    _abount_abount_component__WEBPACK_IMPORTED_MODULE_5__["AbountComponent"],
                    _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_6__["ArrowBtnComponent"],
                    _abilities_abilities_component__WEBPACK_IMPORTED_MODULE_7__["AbilitiesComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"].forRoot({
                        echarts: () => __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.t.bind(null, /*! echarts */ "./node_modules/echarts/index.js", 7))
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/arrow-btn/arrow-btn.component.ts":
/*!**************************************************!*\
  !*** ./src/app/arrow-btn/arrow-btn.component.ts ***!
  \**************************************************/
/*! exports provided: ArrowBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowBtnComponent", function() { return ArrowBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ArrowBtnComponent__svg_svg_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArrowBtnComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ArrowBtnComponent {
    constructor() { }
    ngOnInit() {
    }
    scroll() {
        window.scrollTo({
            top: window.innerHeight * this.index,
            behavior: 'smooth'
        });
    }
}
ArrowBtnComponent.ɵfac = function ArrowBtnComponent_Factory(t) { return new (t || ArrowBtnComponent)(); };
ArrowBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArrowBtnComponent, selectors: [["app-arrow-btn"]], inputs: { index: "index" }, decls: 3, vars: 2, consts: [[1, "btn", "btn-primary", "animate__animated", "animate__bounce", "arrow-btn", 3, "click"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-chevron-down", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-chevron-up", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-down"], ["fill-rule", "evenodd", "d", "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-chevron-up"], ["fill-rule", "evenodd", "d", "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"]], template: function ArrowBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrowBtnComponent_Template_button_click_0_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArrowBtnComponent__svg_svg_1_Template, 2, 0, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArrowBtnComponent__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.index === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".arrow-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJyb3ctYnRuL2Fycm93LWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXJyb3ctYnRuL2Fycm93LWJ0bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnJvdy1idG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrowBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-arrow-btn',
                templateUrl: './arrow-btn.component.html',
                styleUrls: ['./arrow-btn.component.scss']
            }]
    }], function () { return []; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arrow-btn/arrow-btn.component */ "./src/app/arrow-btn/arrow-btn.component.ts");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 4, vars: 1, consts: [["href", "https://github.com/wan-zhen", "target", "_blank"], [3, "index"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click to my Github https://github.com/wan-zhen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-arrow-btn", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", 0);
    } }, directives: [_arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_1__["ArrowBtnComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.3);\n  background-image: url(\"/cv2020/dist/cv2020/assets/images/texture.png\");\n  background-color: #dbdbdb;\n  position: relative;\n  text-align: center;\n  padding-top: 20vh;\n}\n\na[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20vw;\n  height: 40vh;\n  background-image: url(\"/cv2020/dist/cv2020/assets/images/github_PNG20.png\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxrREFBQTtFQUNBLHNFQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyRUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9jdjIwMjAvZGlzdC9jdjIwMjAvYXNzZXRzL2ltYWdlcy90ZXh0dXJlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvY3YyMDIwL2Rpc3QvY3YyMDIwL2Fzc2V0cy9pbWFnZXMvZ2l0aHViX1BORzIwLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { "animate__animated animate__jello": a0, "bigger": a1 }; };
function NavComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NavComponent_li_1_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.enter(i_r2); })("mouseout", function NavComponent_li_1_Template_li_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.out(i_r2); })("click", function NavComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toPage(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, i_r2 === ctx_r0.nowIndex, i_r2 === ctx_r0.nowPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class NavComponent {
    constructor() {
        this.menu = ['Start', 'About Me', 'Skill Tree', 'Github'];
    }
    onScroll(event) {
        this.nowPage = this.getPage();
    }
    ngOnInit() {
        this.nowPage = this.getPage();
    }
    enter(index) {
        this.nowIndex = index;
    }
    out() {
        this.nowIndex = null;
    }
    getPage() {
        return Math.floor(scrollY / window.innerHeight);
    }
    toPage(i) {
        window.scrollTo({
            top: window.innerHeight * i,
            behavior: 'smooth'
        });
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 1, consts: [[3, "ngClass", "mouseenter", "mouseout", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "mouseenter", "mouseout", "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_li_1_Template, 2, 5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 20px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  text-decoration: underline;\n  font-weight: bolder;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\nul[_ngcontent-%COMP%]   li.bigger[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFDUjs7QUFDUTtFQUNJLGlCQUFBO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMjBweDtcclxufVxyXG5cclxudWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcblxyXG4gICAgICAgICYuYmlnZ2VyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return []; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../arrow-btn/arrow-btn.component */ "./src/app/arrow-btn/arrow-btn.component.ts");



class StartComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 1, vars: 1, consts: [[3, "index"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-arrow-btn", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", 1);
    } }, directives: [_arrow_btn_arrow_btn_component__WEBPACK_IMPORTED_MODULE_1__["ArrowBtnComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.3);\n  background-color: #FFF5DD;\n  background-image: url(\"/cv2020/dist/cv2020/assets/images/logotitle.gif\");\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0EseUJBQUE7RUFDQSx3RUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGNUREO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvY3YyMDIwL2Rpc3QvY3YyMDIwL2Fzc2V0cy9pbWFnZXMvbG9nb3RpdGxlLmdpZicpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\code\cv2020\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map