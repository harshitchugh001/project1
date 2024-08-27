"use strict";
(self["webpackChunkribo_ng"] = self["webpackChunkribo_ng"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_pages_seo_agency_seo_agency_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/seo-agency/seo-agency.component */ 5669);
/* harmony import */ var _components_pages_ai_startup_ai_startup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/ai-startup/ai-startup.component */ 1094);
/* harmony import */ var _components_pages_machine_learning_machine_learning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/machine-learning/machine-learning.component */ 581);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/about/about.component */ 5650);
/* harmony import */ var _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/team/team.component */ 8498);
/* harmony import */ var _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/pricing/pricing.component */ 5842);
/* harmony import */ var _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/faq/faq.component */ 8030);
/* harmony import */ var _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/testimonials/testimonials.component */ 7039);
/* harmony import */ var _components_pages_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/case-study/case-study.component */ 6188);
/* harmony import */ var _components_pages_case_study_details_case_study_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/case-study-details/case-study-details.component */ 448);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/error/error.component */ 5948);
/* harmony import */ var _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/sign-in/sign-in.component */ 4594);
/* harmony import */ var _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/sign-up/sign-up.component */ 9314);
/* harmony import */ var _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/terms-conditions/terms-conditions.component */ 3823);
/* harmony import */ var _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/privacy-policy/privacy-policy.component */ 4587);
/* harmony import */ var _components_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/coming-soon/coming-soon.component */ 2736);
/* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/services/services.component */ 9343);
/* harmony import */ var _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/services-details/services-details.component */ 7564);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 506);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2338);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 6953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);
























const routes = [
    { path: '', component: _components_pages_seo_agency_seo_agency_component__WEBPACK_IMPORTED_MODULE_0__.SeoAgencyComponent },
    { path: 'ai-startup', component: _components_pages_ai_startup_ai_startup_component__WEBPACK_IMPORTED_MODULE_1__.AiStartupComponent },
    { path: 'machine-learning', component: _components_pages_machine_learning_machine_learning_component__WEBPACK_IMPORTED_MODULE_2__.MachineLearningComponent },
    { path: 'about', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent },
    { path: 'team', component: _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_4__.TeamComponent },
    { path: 'pricing', component: _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_5__.PricingComponent },
    { path: 'faq', component: _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__.FaqComponent },
    { path: 'testimonials', component: _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_7__.TestimonialsComponent },
    { path: 'case-study', component: _components_pages_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_8__.CaseStudyComponent },
    { path: 'case-study-details', component: _components_pages_case_study_details_case_study_details_component__WEBPACK_IMPORTED_MODULE_9__.CaseStudyDetailsComponent },
    { path: 'error', component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent },
    { path: 'sign-in', component: _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__.SignInComponent },
    { path: 'sign-up', component: _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_12__.SignUpComponent },
    { path: 'terms-conditions', component: _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_13__.TermsConditionsComponent },
    { path: 'privacy-policy', component: _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__.PrivacyPolicyComponent },
    { path: 'coming-soon', component: _components_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_15__.ComingSoonComponent },
    { path: 'services', component: _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_16__.ServicesComponent },
    { path: 'services-details', component: _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_17__.ServicesDetailsComponent },
    { path: 'blog', component: _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__.BlogComponent },
    { path: 'blog-details', component: _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_19__.BlogDetailsComponent },
    { path: 'contact', component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__.ContactComponent },
    { path: '**', component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_10__.ErrorComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 4425);






class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.recallJsFuntions();
    }
    recallJsFuntions() {
        this.router.events
            .subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel))
            .subscribe(event => {
            $.getScript('../assets/js/custom.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location, {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy,
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__.PathLocationStrategy
            }
        ])], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-preloader")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_0__.PreloaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_pages_seo_agency_seo_agency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/seo-agency/seo-agency.component */ 5669);
/* harmony import */ var _components_pages_ai_startup_ai_startup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/ai-startup/ai-startup.component */ 1094);
/* harmony import */ var _components_pages_machine_learning_machine_learning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/machine-learning/machine-learning.component */ 581);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 4425);
/* harmony import */ var _components_common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/navbar-style-one/navbar-style-one.component */ 5532);
/* harmony import */ var _components_common_footer_style_one_footer_style_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/footer-style-one/footer-style-one.component */ 8872);
/* harmony import */ var _components_common_navbar_style_two_navbar_style_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/common/navbar-style-two/navbar-style-two.component */ 3292);
/* harmony import */ var _components_common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _components_common_navbar_style_three_navbar_style_three_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/navbar-style-three/navbar-style-three.component */ 1675);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/about/about.component */ 5650);
/* harmony import */ var _components_common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/common/navbar-style-four/navbar-style-four.component */ 4418);
/* harmony import */ var _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/team/team.component */ 8498);
/* harmony import */ var _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/pricing/pricing.component */ 5842);
/* harmony import */ var _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/faq/faq.component */ 8030);
/* harmony import */ var _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/testimonials/testimonials.component */ 7039);
/* harmony import */ var _components_pages_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/case-study/case-study.component */ 6188);
/* harmony import */ var _components_pages_case_study_details_case_study_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/case-study-details/case-study-details.component */ 448);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/error/error.component */ 5948);
/* harmony import */ var _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/sign-in/sign-in.component */ 4594);
/* harmony import */ var _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/sign-up/sign-up.component */ 9314);
/* harmony import */ var _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/terms-conditions/terms-conditions.component */ 3823);
/* harmony import */ var _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/privacy-policy/privacy-policy.component */ 4587);
/* harmony import */ var _components_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/coming-soon/coming-soon.component */ 2736);
/* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/services/services.component */ 9343);
/* harmony import */ var _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pages/services-details/services-details.component */ 7564);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2338);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 506);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 6953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 2560);
































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_pages_seo_agency_seo_agency_component__WEBPACK_IMPORTED_MODULE_2__.SeoAgencyComponent,
        _components_pages_ai_startup_ai_startup_component__WEBPACK_IMPORTED_MODULE_3__.AiStartupComponent,
        _components_pages_machine_learning_machine_learning_component__WEBPACK_IMPORTED_MODULE_4__.MachineLearningComponent,
        _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_5__.PreloaderComponent,
        _components_common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_6__.NavbarStyleOneComponent,
        _components_common_footer_style_one_footer_style_one_component__WEBPACK_IMPORTED_MODULE_7__.FooterStyleOneComponent,
        _components_common_navbar_style_two_navbar_style_two_component__WEBPACK_IMPORTED_MODULE_8__.NavbarStyleTwoComponent,
        _components_common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_9__.FooterStyleTwoComponent,
        _components_common_navbar_style_three_navbar_style_three_component__WEBPACK_IMPORTED_MODULE_10__.NavbarStyleThreeComponent,
        _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__.AboutComponent,
        _components_common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_12__.NavbarStyleFourComponent,
        _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_13__.TeamComponent,
        _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_14__.PricingComponent,
        _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__.FaqComponent,
        _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__.TestimonialsComponent,
        _components_pages_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_17__.CaseStudyComponent,
        _components_pages_case_study_details_case_study_details_component__WEBPACK_IMPORTED_MODULE_18__.CaseStudyDetailsComponent,
        _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_19__.ErrorComponent,
        _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__.SignInComponent,
        _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_21__.SignUpComponent,
        _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_22__.TermsConditionsComponent,
        _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__.PrivacyPolicyComponent,
        _components_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_24__.ComingSoonComponent,
        _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_25__.ServicesComponent,
        _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_26__.ServicesDetailsComponent,
        _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_27__.BlogDetailsComponent,
        _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_28__.BlogComponent,
        _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__.ContactComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 8872:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/footer-style-one/footer-style-one.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterStyleOneComponent": () => (/* binding */ FooterStyleOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterStyleOneComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterStyleOneComponent.ɵfac = function FooterStyleOneComponent_Factory(t) { return new (t || FooterStyleOneComponent)(); };
FooterStyleOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterStyleOneComponent, selectors: [["app-footer-style-one"]], decls: 104, vars: 0, consts: [[1, "footer-area", "footer-bg", "pt-100", "pb-70"], [1, "container"], [1, "footer-top"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-sm-6"], [1, "footer-img"], ["src", "assets/img/logo/logo1.png", "alt", "Images"], [1, "footer-social-icon"], [1, "social-link"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-instagram"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-youtube"], [1, "footer-midal", "pt-45", "pb-70"], [1, "row"], [1, "col-lg-3", "col-sm-5"], [1, "footer-widget"], [1, "footer-list"], ["routerLink", "/"], [1, "col-lg-2", "col-sm-7"], [1, "footer-widget", "pl-5"], [1, "col-lg-4", "col-sm-7"], [1, "newsletter-area"], [1, "newsletter-form"], ["type", "email", "placeholder", "Your Email*", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "default-btn"], [1, "copy-right-area"], [1, "copy-right-text", "text-center"], ["href", "https://hibootstrap.com/", "target", "_blank"]], template: function FooterStyleOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "div", 7)(9, "ul", 8)(10, "li")(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 19)(32, "li")(33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "International SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Enterprise SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "SEO for Small Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "SEO for Local Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "National SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21)(48, "div", 18)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 19)(52, "li")(53, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "About the Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "For Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "SEO Blog & News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Careers & Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Sitemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 17)(68, "div", 22)(69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 19)(72, "li")(73, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "About the Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li")(76, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "International SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li")(79, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "National SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Careers & Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li")(85, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sitemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23)(88, "div", 18)(89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "To get the latest news and latest up- dates from us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 24)(94, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 28)(99, "div", 29)(100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u00A9 Ribo is Proudly Owned by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "HiBootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXItc3R5bGUtb25lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3511:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/footer-style-two/footer-style-two.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterStyleTwoComponent": () => (/* binding */ FooterStyleTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterStyleTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterStyleTwoComponent.ɵfac = function FooterStyleTwoComponent_Factory(t) { return new (t || FooterStyleTwoComponent)(); };
FooterStyleTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterStyleTwoComponent, selectors: [["app-footer-style-two"]], decls: 100, vars: 0, consts: [[1, "footer-area", "footer-bg2", "pt-100"], [1, "container"], [1, "footer-midal", "pb-70"], [1, "row"], [1, "col-lg-4", "col-sm-7"], [1, "footer-widget"], [1, "footer-img"], ["src", "assets/img/logo/logo1.png", "alt", "Images"], [1, "footer-social-icon"], [1, "social-link"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-instagram"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-youtube"], [1, "col-lg-2", "col-sm-5"], [1, "footer-list"], ["routerLink", "/"], [1, "col-lg-3", "col-sm-7"], [1, "footer-widget", "pl-5"], ["routerLink", "/about"], ["routerLink", "/case-study"], ["routerLink", "/blog"], ["routerLink", "/contact"], [1, "col-lg-3", "col-sm-5"], [1, "footer-list-two"], [1, "flaticon-telephone"], ["href", "tel:+4498886660000"], [1, "flaticon-email-1"], ["href", "mailto:hello@zinka.com"], [1, "flaticon-place"], [1, "copy-right-area"], [1, "col-lg-8"], [1, "copy-right-text", "text-start"], ["href", "https://hibootstrap.com/", "target", "_blank"], [1, "col-lg-4"], [1, "copy-right-list"], ["routerLink", "/privacy-policy"], ["routerLink", "/terms-conditions"]], template: function FooterStyleTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "ul", 9)(12, "li")(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16)(28, "div", 5)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 17)(32, "li")(33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Our Scientists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "SaaS Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "eCommerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19)(48, "div", 20)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 17)(52, "li")(53, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Case Studies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Our Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25)(68, "div", 5)(69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 26)(72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "+449 888 666 0000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "hello@zinka.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "855 road, brooklyn street new york 600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 32)(84, "div", 3)(85, "div", 33)(86, "div", 34)(87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u00A9 Ribo is Proudly Owned by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "HiBootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 36)(92, "div", 37)(93, "ul")(94, "li")(95, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li")(98, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXItc3R5bGUtdHdvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4418:
/*!************************************************************************************!*\
  !*** ./src/app/components/common/navbar-style-four/navbar-style-four.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarStyleFourComponent": () => (/* binding */ NavbarStyleFourComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return { exact: true }; };
class NavbarStyleFourComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarStyleFourComponent.ɵfac = function NavbarStyleFourComponent_Factory(t) { return new (t || NavbarStyleFourComponent)(); };
NavbarStyleFourComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarStyleFourComponent, selectors: [["app-navbar-style-four"]], decls: 148, vars: 42, consts: [[1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo/logo1.png", "alt", "Logo"], [1, "main-nav", "nav-bar-two"], [1, "container-fluid"], [1, "container-max-2", "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/img/logo/logo2.png", "alt", "Logo"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link"], [1, "bx", "bx-plus"], [1, "dropdown-menu"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/ai-startup", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/machine-learning", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/pricing", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/testimonials", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-in", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-up", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/terms-conditions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/privacy-policy", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/coming-soon", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "side-nav", "d-in-line", "align-items-center"], [1, "side-item"], [1, "search-box"], [1, "flaticon-loupe"], [1, "user-btn"], ["routerLink", "/"], [1, "flaticon-contact"], [1, "nav-add-btn"], ["routerLink", "/contact", 1, "nav-menu-btn"], [1, "side-nav-responsive"], [1, "container"], [1, "dot-menu"], [1, "circle-inner"], [1, "circle", "circle-one"], [1, "circle", "circle-two"], [1, "circle", "circle-three"], [1, "side-nav-inner"], [1, "side-nav", "justify-content-center", "align-items-center"], [1, "search-overlay"], [1, "d-table"], [1, "d-table-cell"], [1, "search-layer"], [1, "search-close"], [1, "search-close-line"], [1, "search-form"], ["type", "text", "placeholder", "Search here...", 1, "input-search"], ["type", "submit"]], template: function NavbarStyleFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 14)(16, "li", 11)(17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SEO Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11)(20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AI Startup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11)(23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11)(26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11)(29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 14)(33, "li", 11)(34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 11)(37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 11)(40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 11)(43, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 11)(46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Case study ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 14)(50, "li", 11)(51, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Case study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 11)(54, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Case study Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 11)(57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 11)(60, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 11)(63, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 11)(66, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 11)(69, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 11)(72, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 11)(75, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 14)(79, "li", 11)(80, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 11)(83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Services Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 11)(86, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 14)(90, "li", 11)(91, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 11)(94, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 11)(97, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36)(100, "div", 37)(101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 37)(104, "div", 40)(105, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37)(108, "div", 43)(109, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45)(113, "div", 46)(114, "div", 47)(115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 49)(117, "div", 50)(118, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46)(120, "div", 52)(121, "div", 53)(122, "div", 37)(123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 37)(126, "div", 40)(127, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 37)(130, "div", 43)(131, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 54)(135, "div", 55)(136, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 57)(138, "div", 57)(139, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "span", 59)(142, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 60)(144, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItc3R5bGUtZm91ci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5532:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/navbar-style-one/navbar-style-one.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarStyleOneComponent": () => (/* binding */ NavbarStyleOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return { exact: true }; };
class NavbarStyleOneComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarStyleOneComponent.ɵfac = function NavbarStyleOneComponent_Factory(t) { return new (t || NavbarStyleOneComponent)(); };
NavbarStyleOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarStyleOneComponent, selectors: [["app-navbar-style-one"]], decls: 148, vars: 42, consts: [[1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo/logo1.png", "alt", "Logo"], [1, "main-nav"], [1, "container-fluid"], [1, "container-max-2", "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link"], [1, "bx", "bx-plus"], [1, "dropdown-menu"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/ai-startup", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/machine-learning", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/pricing", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/testimonials", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-in", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-up", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/terms-conditions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/privacy-policy", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/coming-soon", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "side-nav", "d-in-line", "align-items-center"], [1, "side-item"], [1, "search-box"], [1, "flaticon-loupe"], [1, "user-btn"], ["routerLink", "/"], [1, "flaticon-contact"], [1, "nav-add-btn"], ["routerLink", "/contact", 1, "nav-menu-btn"], [1, "side-nav-responsive"], [1, "container"], [1, "dot-menu"], [1, "circle-inner"], [1, "circle", "circle-one"], [1, "circle", "circle-two"], [1, "circle", "circle-three"], [1, "side-nav-inner"], [1, "side-nav", "justify-content-center", "align-items-center"], [1, "search-overlay"], [1, "d-table"], [1, "d-table-cell"], [1, "search-layer"], [1, "search-close"], [1, "search-close-line"], [1, "search-form"], ["type", "text", "placeholder", "Search here...", 1, "input-search"], ["type", "submit"]], template: function NavbarStyleOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li", 10)(12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 13)(16, "li", 10)(17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SEO Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AI Startup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10)(23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10)(26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10)(29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 13)(33, "li", 10)(34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 10)(37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 10)(40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 10)(43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 10)(46, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Case study ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 13)(50, "li", 10)(51, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Case study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 10)(54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Case study Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 10)(57, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 10)(60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 10)(63, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 10)(66, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 10)(69, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 10)(72, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 10)(75, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 13)(79, "li", 10)(80, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 10)(83, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Services Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 10)(86, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 13)(90, "li", 10)(91, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 10)(94, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 10)(97, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35)(100, "div", 36)(101, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 36)(104, "div", 39)(105, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 36)(108, "div", 42)(109, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 44)(113, "div", 45)(114, "div", 46)(115, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 48)(117, "div", 49)(118, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45)(120, "div", 51)(121, "div", 52)(122, "div", 36)(123, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 36)(126, "div", 39)(127, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 36)(130, "div", 42)(131, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53)(135, "div", 54)(136, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 56)(138, "div", 56)(139, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "span", 58)(142, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 59)(144, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItc3R5bGUtb25lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1675:
/*!**************************************************************************************!*\
  !*** ./src/app/components/common/navbar-style-three/navbar-style-three.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarStyleThreeComponent": () => (/* binding */ NavbarStyleThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return { exact: true }; };
class NavbarStyleThreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarStyleThreeComponent.ɵfac = function NavbarStyleThreeComponent_Factory(t) { return new (t || NavbarStyleThreeComponent)(); };
NavbarStyleThreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarStyleThreeComponent, selectors: [["app-navbar-style-three"]], decls: 132, vars: 42, consts: [[1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo/logo1.png", "alt", "Logo"], [1, "main-nav", "nav-bar-three"], [1, "container-fluid"], [1, "container-max-2", "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link"], [1, "bx", "bx-plus"], [1, "dropdown-menu"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/ai-startup", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/machine-learning", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/pricing", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/testimonials", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-in", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-up", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/terms-conditions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/privacy-policy", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/coming-soon", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "side-nav", "d-in-line", "align-items-center"], [1, "side-item"], [1, "search-box-2"], [1, "search-form"], ["name", "search", "placeholder", "Search Your Result", "type", "text", 1, "form-control"], ["type", "submit", 1, "search-btn"], [1, "bx", "bx-search"], [1, "nav-add-btn"], ["routerLink", "/contact", 1, "nav-menu-btn", "border-radius"], [1, "side-nav-responsive"], [1, "container"], [1, "dot-menu"], [1, "circle-inner"], [1, "circle", "circle-one"], [1, "circle", "circle-two"], [1, "circle", "circle-three"], [1, "side-nav-inner"], [1, "side-nav", "side-nav-two", "justify-content-center", "align-items-center"]], template: function NavbarStyleThreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li", 10)(12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 13)(16, "li", 10)(17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SEO Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AI Startup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10)(23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10)(26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10)(29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 13)(33, "li", 10)(34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 10)(37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 10)(40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 10)(43, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 10)(46, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Case study ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 13)(50, "li", 10)(51, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Case study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 10)(54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Case study Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 10)(57, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 10)(60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 10)(63, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 10)(66, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 10)(69, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 10)(72, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 10)(75, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 13)(79, "li", 10)(80, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 10)(83, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Services Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 10)(86, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 13)(90, "li", 10)(91, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 10)(94, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 10)(97, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 35)(100, "div", 36)(101, "div", 37)(102, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 36)(107, "div", 42)(108, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 44)(112, "div", 45)(113, "div", 46)(114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 48)(116, "div", 49)(117, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 45)(119, "div", 51)(120, "div", 52)(121, "div", 36)(122, "div", 37)(123, "form", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 36)(128, "div", 42)(129, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItc3R5bGUtdGhyZWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3292:
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/navbar-style-two/navbar-style-two.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarStyleTwoComponent": () => (/* binding */ NavbarStyleTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return { exact: true }; };
class NavbarStyleTwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarStyleTwoComponent.ɵfac = function NavbarStyleTwoComponent_Factory(t) { return new (t || NavbarStyleTwoComponent)(); };
NavbarStyleTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarStyleTwoComponent, selectors: [["app-navbar-style-two"]], decls: 148, vars: 42, consts: [[1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo/logo1.png", "alt", "Logo"], [1, "main-nav", "nav-bar-two"], [1, "container-fluid"], [1, "container-max-2", "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/img/logo/logo2.png", "alt", "Logo"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], ["href", "javascript:void(0);", 1, "nav-link"], [1, "bx", "bx-plus"], [1, "dropdown-menu"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/ai-startup", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/machine-learning", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/pricing", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/testimonials", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-study-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-in", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-up", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/terms-conditions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/privacy-policy", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/coming-soon", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/services-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/blog-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "side-nav", "d-in-line", "align-items-center"], [1, "side-item"], [1, "search-box"], [1, "flaticon-loupe"], [1, "user-btn"], ["routerLink", "/"], [1, "flaticon-contact"], [1, "nav-add-btn"], ["routerLink", "/contact", 1, "nav-menu-btn"], [1, "side-nav-responsive"], [1, "container"], [1, "dot-menu"], [1, "circle-inner"], [1, "circle", "circle-one"], [1, "circle", "circle-two"], [1, "circle", "circle-three"], [1, "side-nav-inner"], [1, "side-nav", "justify-content-center", "align-items-center"], [1, "search-overlay"], [1, "d-table"], [1, "d-table-cell"], [1, "search-layer"], [1, "search-close"], [1, "search-close-line"], [1, "search-form"], ["type", "text", "placeholder", "Search here...", 1, "input-search"], ["type", "submit"]], template: function NavbarStyleTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 14)(16, "li", 11)(17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SEO Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11)(20, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AI Startup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11)(23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11)(26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 11)(29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 14)(33, "li", 11)(34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 11)(37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 11)(40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 11)(43, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 11)(46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Case study ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 14)(50, "li", 11)(51, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Case study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 11)(54, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Case study Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 11)(57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 11)(60, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 11)(63, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 11)(66, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 11)(69, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 11)(72, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 11)(75, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 14)(79, "li", 11)(80, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 11)(83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Services Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 11)(86, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 14)(90, "li", 11)(91, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 11)(94, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Blog Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 11)(97, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 36)(100, "div", 37)(101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 37)(104, "div", 40)(105, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37)(108, "div", 43)(109, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45)(113, "div", 46)(114, "div", 47)(115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 49)(117, "div", 50)(118, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46)(120, "div", 52)(121, "div", 53)(122, "div", 37)(123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 37)(126, "div", 40)(127, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 37)(130, "div", 43)(131, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 54)(135, "div", 55)(136, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "div", 57)(138, "div", 57)(139, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "span", 59)(142, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 60)(144, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXItc3R5bGUtdHdvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4425:
/*!********************************************************************!*\
  !*** ./src/app/components/common/preloader/preloader.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderComponent": () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PreloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) { return new (t || PreloaderComponent)(); };
PreloaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreloaderComponent, selectors: [["app-preloader"]], decls: 4, vars: 0, consts: [[1, "preloader"], [1, "d-table"], [1, "d-table-cell"], [1, "spinner"]], template: function PreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5650:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 487, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "about-widget-area", "pt-50", "pb-70"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "about-widget-img"], ["src", "assets/img/about/about-img4.png", "alt", ""], [1, "about-widget-content"], [1, "section-title"], [1, "sp-before", "sp-after"], [1, "about-widget-list"], [1, "bx", "bx-check"], [1, "about-video"], ["href", "https://www.youtube.com/watch?v=07d2dXHYb94&t=6s", 1, "video-btn", "popup-btn"], [1, "flaticon-forward"], [1, "counter-area-two", "pt-100"], [1, "row"], [1, "col-lg-3", "col-sm-6", "col-md-3"], [1, "counter-card"], [1, "counter-shape-top"], ["src", "assets/img/counter/counter-shape.png", "alt", "Images"], [1, "service-list-area", "pt-100", "pb-70"], [1, "section-title", "text-center"], [1, "row", "pt-45"], [1, "col-lg-4", "col-md-6"], [1, "service-list-content"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], [1, "work-area-two", "pt-100", "pb-70"], [1, "h2-color2"], [1, "col-lg-4", "col-md-12"], [1, "work-item-list"], [1, "text-end"], [1, "work-img-2"], ["src", "assets/img/work-img.png", "alt", "Images"], [1, "work-item-list-2"], [1, "history-area", "pt-100", "pb-70"], [1, "history-list"], [1, "active"], [1, "content"], [1, "history-content"], ["routerLink", "/about", 1, "default-btn"], [1, "bx", "bx-plus"], [1, "history-img"], ["src", "assets/img/history-img.png", "alt", "Images"], [1, "team-area-two", "pb-70"], [1, "team-slider-two", "owl-carousel", "owl-theme"], [1, "team-card", "active"], ["src", "assets/img/team/team-img7.jpg", "alt", "Images"], [1, "social-link"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-youtube"], [1, "team-card", "team-rotated"], ["src", "assets/img/team/team-img8.jpg", "alt", "Images"], [1, "team-card"], ["src", "assets/img/team/team-img9.jpg", "alt", "Images"], [1, "team-card", "team-rotated-2"], ["src", "assets/img/team/team-img10.jpg", "alt", "Images"], ["src", "assets/img/team/team-img11.jpg", "alt", "Images"], ["src", "assets/img/team/team-img12.jpg", "alt", "Images"], [1, "team-two-shape"], [1, "shape1"], ["src", "assets/img/shape/shape13.png", "alt", "Images"], [1, "shape2"], ["src", "assets/img/shape/shape11.png", "alt", "Images"], [1, "shape3"], ["src", "assets/img/shape/shape10.png", "alt", "Images"], [1, "shape4"], ["src", "assets/img/shape/shape9.png", "alt", "Images"], [1, "shape5"], ["src", "assets/img/shape/shape12.png", "alt", "Images"], [1, "shape6"], ["src", "assets/img/shape/shape7.png", "alt", "Images"], [1, "shape7"], ["src", "assets/img/shape/shape14.png", "alt", "Images"], [1, "testimonial-area", "testimonial-area-mb", "ptb-100"], [1, "testimonial-list"], [1, "list-img-1"], ["src", "assets/img/testimonial/testimonial1.png", "alt", "Images"], [1, "list-img-2"], ["src", "assets/img/testimonial/testimonial2.png", "alt", "Images"], [1, "list-img-3"], ["src", "assets/img/testimonial/testimonial3.png", "alt", "Images"], [1, "list-img-4"], ["src", "assets/img/testimonial/testimonial4.png", "alt", "Images"], [1, "list-img-5"], ["src", "assets/img/testimonial/testimonial5.png", "alt", "Images"], [1, "testimonial-title"], [1, "testimonial-slider", "owl-carousel", "owl-theme"], [1, "testimonial-item"], ["src", "assets/img/testimonial/testimonial-img1.png", "alt", "Images"], [1, "content-title"], ["src", "assets/img/testimonial/testimonial-img2.png", "alt", "Images"], ["src", "assets/img/testimonial/testimonial-img3.png", "alt", "Images"], [1, "brand-logo-area", "pt-100"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "div", 17)(27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17)(30, "div", 20)(31, "div", 21)(32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Grow Your Business With Our Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "We have 30 yearsOur strategy includes consistently evolving, to ensure we\u2019re producing exceptional SEO for business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna tetur adipisicing saliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 23)(41, "ul")(42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "High standards of professionalism, integrity. Establishment of close working relationships.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "A different way of thinking, both inside and outside the box. We do not have to be the best.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "We do not have to be the best, we do have to give our best Ability to learn. Multicultural competence.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 25)(61, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Play Video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 28)(66, "div", 1)(67, "div", 29)(68, "div", 30)(69, "div", 31)(70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "10 Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "GLORIOUS YEARS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 30)(75, "div", 31)(76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "SATISFACTION RATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 30)(81, "div", 31)(82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "70+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "TEAM MEMBERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 30)(87, "div", 31)(88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "25+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "SENIOR SCIENTIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 34)(95, "div", 1)(96, "div", 35)(97, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Our Journey\u2019s Path");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 36)(102, "div", 37)(103, "div", 38)(104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "ul")(109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " Creating Results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " Good Thinking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " Expect More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, " Brilliant Minds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 37)(122, "div", 38)(123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Who We Are");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "ul")(128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, " We Have You Covered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " Stay Real Always");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, " We Turn Heads");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " Stay Real Always");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 39)(141, "div", 38)(142, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Our History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "ul")(147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " Activate Listening");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, " Better Best Wow!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " Brilliant Minds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " Activate Listening");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 40)(160, "div", 1)(161, "div", 35)(162, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Working Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Simple & Clean Work Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 36)(167, "div", 42)(168, "div", 43)(169, "ul")(170, "li", 44)(171, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Frame the Problem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "li", 44)(178, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Collect the Raw Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "li", 44)(185, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Process the Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 42)(192, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 42)(195, "div", 47)(196, "ul")(197, "li")(198, "h3")(199, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Explore the Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "li")(205, "h3")(206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Perform Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "li")(212, "h3")(213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Communicate Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 48)(219, "div", 1)(220, "div", 35)(221, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Our History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "The Facts About Our Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 49)(226, "ul")(227, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 51)(230, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "February 20th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](235, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 51)(237, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "January 14th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 51)(244, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "March 25th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](249, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "div", 51)(251, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254, "December 10th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 51)(258, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](261, "February 01th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "div", 29)(263, "div", 17)(264, "div", 52)(265, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "Great Success of the Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip comodo consequa dolor consectetur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](273, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 17)(275, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](276, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 57)(278, "div", 1)(279, "div", 35)(280, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "Meet Our Data Scientist to Grow Your Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "div", 58)(285, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](286, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "div", 51)(288, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Cristiono Kopper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "ul", 61)(293, "li")(294, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](295, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "li")(297, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](298, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "li")(300, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](301, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "li")(303, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](304, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](306, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "div", 51)(308, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "ul", 61)(313, "li")(314, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](315, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "li")(317, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](318, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "li")(320, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](321, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "li")(323, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](324, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](326, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "div", 51)(328, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "ul", 61)(333, "li")(334, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](335, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "li")(337, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](338, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "li")(340, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](341, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "li")(343, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](344, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](346, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "div", 51)(348, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "ul", 61)(353, "li")(354, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](355, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "li")(357, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](358, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "li")(360, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](361, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "li")(363, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](364, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](366, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "div", 51)(368, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](371, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "ul", 61)(373, "li")(374, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](375, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "li")(377, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](378, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "li")(380, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "li")(383, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](384, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](386, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "div", 51)(388, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](389, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "ul", 61)(393, "li")(394, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](395, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "li")(397, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](398, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "li")(400, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](401, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "li")(403, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](404, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "div", 75)(406, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](407, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](409, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](410, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](411, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](413, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](415, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](417, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](419, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "div", 90)(421, "div", 15)(422, "div", 29)(423, "div", 17)(424, "div", 91)(425, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](426, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](428, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](430, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](432, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](433, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](434, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "div", 17)(436, "div", 102)(437, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](438, "Words From Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "div", 103)(440, "div", 104)(441, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](444, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](445, "div", 106)(446, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](447, "David McLean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](448, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](449, "CEO & Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "div", 104)(451, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](452, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](454, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "div", 106)(456, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](459, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "div", 104)(461, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](462, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](463, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](464, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](465, "div", 106)(466, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](467, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](469, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](470, "div", 109)(471, "div", 15)(472, "div", 110)(473, "div", 111)(474, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](475, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](476, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](477, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](479, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](481, "img", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](483, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](484, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](485, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](486, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1094:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/ai-startup/ai-startup.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AiStartupComponent": () => (/* binding */ AiStartupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_navbar_style_two_navbar_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-two/navbar-style-two.component */ 3292);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);




class AiStartupComponent {
    constructor() { }
    ngOnInit() {
    }
}
AiStartupComponent.ɵfac = function AiStartupComponent_Factory(t) { return new (t || AiStartupComponent)(); };
AiStartupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AiStartupComponent, selectors: [["app-ai-startup"]], decls: 698, vars: 0, consts: [[1, "banner-area-two"], [1, "container-fluid"], [1, "container-max-2"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "banner-content-two"], [1, "banner-content-btn"], ["href", "#", 1, "learn-btn"], [1, "bx", "bx-plus"], ["href", "https://www.youtube.com/watch?v=07d2dXHYb94", 1, "play-on-btn", "popup-btn"], [1, "flaticon-forward"], [1, "col-lg-7", "col-md-12"], [1, "banner-img-2"], ["src", "assets/img/home-two/home-two-img.png", "alt", "Images"], [1, "banner-bottom-shape"], ["data-wow-delay", ".3s", 1, "shape-one", "wow", "fadeInUp"], ["src", "assets/img/home-two/home-two-shape1.png", "alt", "Images"], ["data-wow-delay", ".5s", 1, "shape-two", "wow", "fadeInUp"], ["src", "assets/img/home-two/home-two-shape2.png", "alt", "Images"], ["data-wow-delay", ".7s", 1, "shape-three", "wow", "fadeInUp"], ["src", "assets/img/home-two/home-two-shape3.png", "alt", "Images"], [1, "banner-dots1"], ["src", "assets/img/home-two/home-two-dots.png", "alt", "Images"], [1, "banner-dots2"], ["src", "assets/img/home-two/home-two-dots2.png", "alt", "Images"], [1, "service-area-two"], [1, "container"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "row", "pt-45"], [1, "col-lg-4", "col-md-6"], [1, "services-item"], ["routerLink", "/services-details"], [1, "services-item-img"], ["src", "assets/img/service/service-icon7.png", "alt", "Images"], [1, "img-circle"], ["routerLink", "/services-details", 1, "learn-btn"], ["src", "assets/img/service/service-icon8.png", "alt", "Images"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], ["src", "assets/img/service/service-icon9.png", "alt", "Images"], [1, "service-two-shape"], [1, "shape-in1"], ["src", "assets/img/shape/shape9.png", "alt", "Images"], [1, "shape-in2"], ["src", "assets/img/shape/shape10.png", "alt", "Images"], [1, "shape-in3"], ["src", "assets/img/shape/shape11.png", "alt", "Images"], [1, "shape-in4"], ["src", "assets/img/shape/shape7.png", "alt", "Images"], [1, "shape-in5"], ["src", "assets/img/shape/shape12.png", "alt", "Images"], [1, "about-area-two", "pb-70"], [1, "container-max"], [1, "col-lg-6", "col-md-12"], [1, "about-img-2"], ["src", "assets/img/about/about-img2.png", "alt", ""], [1, "about-content-two"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-sm-6", "pr-0"], [1, "about-list"], [1, "bx", "bx-check"], [1, "counter-area-two", "pt-100"], [1, "col-lg-3", "col-sm-6", "col-md-3"], [1, "counter-card"], [1, "counter-shape-top"], ["src", "assets/img/counter/counter-shape.png", "alt", "Images"], [1, "service-another", "pb-70"], [1, "services-another-card"], [1, "flaticon-research", "service-icon", "service-icon-bg1"], [1, "flaticon-headphones", "service-icon", "service-icon-bg"], [1, "flaticon-caution", "service-icon", "service-icon-bg2"], [1, "flaticon-big-data", "service-icon", "service-icon-bg3"], [1, "flaticon-money", "service-icon", "service-icon-bg4"], [1, "flaticon-share", "service-icon", "service-icon-bg5"], [1, "service-another-shape"], [1, "shape-1"], ["src", "assets/img/shape/shape13.png", "alt", "Images"], [1, "shape-2"], [1, "shape-3"], [1, "shape-4"], [1, "shape-5"], [1, "shape-6"], [1, "work-area-two", "pt-100", "pb-70"], [1, "h2-color2"], [1, "col-lg-4", "col-md-12"], [1, "work-item-list"], [1, "text-end"], [1, "work-img-2"], ["src", "assets/img/work-img.png", "alt", "Images"], [1, "work-item-list-2"], [1, "mission-area", "pt-100"], [1, "mission-content"], [1, "mission-list"], [1, "mission-img"], ["src", "assets/img/mission-img.png", "alt", "Images"], [1, "mission-shape"], [1, "shape1"], [1, "shape2"], [1, "shape3"], [1, "shape4"], [1, "team-area-two", "pb-70"], [1, "team-slider-two", "owl-carousel", "owl-theme"], [1, "team-card", "active"], ["src", "assets/img/team/team-img7.jpg", "alt", "Images"], [1, "content"], [1, "social-link"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-youtube"], [1, "team-card", "team-rotated"], ["src", "assets/img/team/team-img8.jpg", "alt", "Images"], [1, "team-card"], ["src", "assets/img/team/team-img9.jpg", "alt", "Images"], [1, "team-card", "team-rotated-2"], ["src", "assets/img/team/team-img10.jpg", "alt", "Images"], ["src", "assets/img/team/team-img11.jpg", "alt", "Images"], ["src", "assets/img/team/team-img12.jpg", "alt", "Images"], [1, "team-two-shape"], [1, "shape5"], [1, "shape6"], [1, "shape7"], ["src", "assets/img/shape/shape14.png", "alt", "Images"], [1, "testimonial-area", "ptb-100"], [1, "testimonial-list"], [1, "list-img-1"], ["src", "assets/img/testimonial/testimonial1.png", "alt", "Images"], [1, "list-img-2"], ["src", "assets/img/testimonial/testimonial2.png", "alt", "Images"], [1, "list-img-3"], ["src", "assets/img/testimonial/testimonial3.png", "alt", "Images"], [1, "list-img-4"], ["src", "assets/img/testimonial/testimonial4.png", "alt", "Images"], [1, "list-img-5"], ["src", "assets/img/testimonial/testimonial5.png", "alt", "Images"], [1, "testimonial-title"], [1, "testimonial-slider", "owl-carousel", "owl-theme"], [1, "testimonial-item"], ["src", "assets/img/testimonial/testimonial-img1.png", "alt", "Images"], [1, "content-title"], ["src", "assets/img/testimonial/testimonial-img2.png", "alt", "Images"], ["src", "assets/img/testimonial/testimonial-img3.png", "alt", "Images"], [1, "blog-area", "pt-100", "pb-70"], [1, "margin-auto"], [1, "blog-card"], ["routerLink", "/blog-details"], ["src", "assets/img/blog/blog1.png", "alt", "Images"], [1, "bx", "bx-time-five"], [1, "bx", "bx-purchase-tag-alt"], ["routerLink", "/blog"], ["src", "assets/img/blog/blog2.png", "alt", "Images"], ["src", "assets/img/blog/blog3.png", "alt", "Images"], [1, "blog-shape"], ["src", "assets/img/shape/shape1.png", "alt", "Images"], ["src", "assets/img/shape/shape5.png", "alt", "Images"], ["src", "assets/img/shape/shape4.png", "alt", "Images"], ["src", "assets/img/shape/shape6.png", "alt", "Images"], [1, "brand-logo-area"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"], [1, "data-table-area"], [1, "data-table-content"], ["routerLink", "/contact", 1, "default-btn"], [1, "data-table-img"], ["src", "assets/img/data-table-img.png", "alt", "Images"]], template: function AiStartupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-two");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Best for You");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "We\u2019re ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Digital");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " AI Startup Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Lorem ipsum dolor sit ametconsectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6)(17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Learn More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Play Video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11)(24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14)(27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 25)(38, "div", 26)(39, "div", 27)(40, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Our Implementation Mission is to Serve You Best");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 29)(45, "div", 30)(46, "div", 31)(47, "h3")(48, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Consumer Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 33)(51, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 30)(60, "div", 31)(61, "h3")(62, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Marketing Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 33)(65, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 38)(74, "div", 31)(75, "h3")(76, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Sales Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 33)(79, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 40)(88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 51)(99, "div", 1)(100, "div", 52)(101, "div", 3)(102, "div", 53)(103, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 53)(106, "div", 56)(107, "div", 57)(108, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Grow Your Business With Our Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "We have 30 yearsOur strategy includes consistently evolving, to ensure we\u2019re producing exceptional SEO for business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna tetur adipisicing saliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 58)(117, "div", 59)(118, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Retail Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 59)(125, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Data Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 59)(132, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Data Visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 59)(139, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Business Geist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 59)(146, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 59)(153, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "06");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Data Warehousing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 62)(160, "div", 26)(161, "div", 58)(162, "div", 63)(163, "div", 64)(164, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "10 Years");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "GLORIOUS YEARS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 63)(169, "div", 64)(170, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "SATISFACTION RATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 63)(175, "div", 64)(176, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "70+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "TEAM MEMBERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 63)(181, "div", 64)(182, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "25+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "SENIOR SCIENTIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 67)(189, "div", 26)(190, "div", 27)(191, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "We Offer Professional Solutions For Your Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 29)(196, "div", 30)(197, "div", 68)(198, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](199, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "h3")(201, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Customer Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 30)(209, "div", 68)(210, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "h3")(213, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "div", 30)(221, "div", 68)(222, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](223, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "h3")(225, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "Risk Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 30)(233, "div", 68)(234, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](235, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "h3")(237, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Big Data Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 30)(245, "div", 68)(246, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "h3")(249, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "Business Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 30)(257, "div", 68)(258, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](259, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "h3")(261, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "Social Media Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 75)(269, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](276, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](280, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "div", 83)(282, "div", 26)(283, "div", 27)(284, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "Working Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "h2", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "Simple & Clean Work Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "div", 29)(289, "div", 85)(290, "div", 86)(291, "ul")(292, "li", 87)(293, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Frame the Problem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "li", 87)(300, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "Collect the Raw Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](305, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "li", 87)(307, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "Process the Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](312, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 85)(314, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](315, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "div", 85)(317, "div", 90)(318, "ul")(319, "li")(320, "h3")(321, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "Explore the Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "li")(327, "h3")(328, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "Perform Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "li")(334, "h3")(335, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](336, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, "Communicate Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, "Lorem ipsum dolor sit amet, aut odiut podit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "div", 91)(341, "div", 1)(342, "div", 3)(343, "div", 53)(344, "div", 92)(345, "div", 57)(346, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](347, "Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](348, "h2", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, "We Serve As Possible That You Expected");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](351, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna tetur adipisicing saliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "div", 58)(353, "div", 59)(354, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](355, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](357, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](359, "Retail Solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "div", 59)(361, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](362, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](366, "Expert Prepective");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "div", 59)(368, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](369, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](371, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "User Prespective");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "div", 59)(375, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](380, "Global Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "div", 59)(382, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](383, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](385, "05");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](386, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](387, "Value for Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "div", 59)(389, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](390, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](392, "06");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](393, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](394, "Business Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "div", 53)(396, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](397, "img", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "div", 96)(399, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](400, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](402, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](404, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](406, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "div", 101)(408, "div", 26)(409, "div", 27)(410, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](411, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "h2", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "Meet Our Data Scientist to Grow Your Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "div", 102)(415, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](416, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "div", 105)(418, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](419, "Cristiono Kopper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "ul", 106)(423, "li")(424, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](425, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "li")(427, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](428, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "li")(430, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](431, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "li")(433, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](434, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](436, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "div", 105)(438, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](439, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](440, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](441, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "ul", 106)(443, "li")(444, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](445, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "li")(447, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](448, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "li")(450, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](451, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "li")(453, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](454, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](456, "img", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "div", 105)(458, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](459, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "ul", 106)(463, "li")(464, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](465, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "li")(467, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](468, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "li")(470, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](471, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "li")(473, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](474, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](475, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](476, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](477, "\\ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "div", 105)(479, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](480, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "ul", 106)(484, "li")(485, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](486, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](487, "li")(488, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](489, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](490, "li")(491, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](492, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "li")(494, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](495, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](497, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](498, "div", 105)(499, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](500, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](502, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](503, "ul", 106)(504, "li")(505, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](506, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "li")(508, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](509, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "li")(511, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](512, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "li")(514, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](515, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](516, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](517, "img", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](518, "div", 105)(519, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](520, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](521, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](522, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](523, "ul", 106)(524, "li")(525, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](526, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](527, "li")(528, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](529, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](530, "li")(531, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](532, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](533, "li")(534, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](535, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](536, "div", 120)(537, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](538, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](540, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](541, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](542, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](544, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](545, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](546, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](547, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](548, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](549, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](550, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](551, "div", 125)(552, "div", 1)(553, "div", 58)(554, "div", 53)(555, "div", 126)(556, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](557, "img", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](558, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](559, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](560, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](561, "img", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](562, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](563, "img", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](564, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](565, "img", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](566, "div", 53)(567, "div", 137)(568, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](569, "Words From Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "div", 138)(571, "div", 139)(572, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](573, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](574, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](575, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "div", 141)(577, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](578, "David McLean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](579, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](580, "CEO & Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](581, "div", 139)(582, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](583, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](585, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](586, "div", 141)(587, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](588, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](589, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](590, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](591, "div", 139)(592, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](593, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](594, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](595, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](596, "div", 141)(597, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](598, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](599, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](600, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](601, "div", 144)(602, "div", 26)(603, "div", 27)(604, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](605, "Our Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](606, "h2", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](607, "Latest Valuable Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](608, "p", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](609, "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](610, "div", 29)(611, "div", 30)(612, "div", 146)(613, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](614, "img", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](615, "div", 105)(616, "ul")(617, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](618, "i", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](619, "09 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](620, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](621, "i", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](622, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](623, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](624, "h3")(625, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](626, "The Home of Technology is in Front of You");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](627, "div", 30)(628, "div", 146)(629, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](630, "img", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](631, "div", 105)(632, "ul")(633, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](634, "i", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](635, "10 July 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](636, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](637, "i", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](638, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](639, "SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](640, "h3")(641, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](642, "SEO Best Practices Mobile Friendliness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](643, "div", 38)(644, "div", 146)(645, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](646, "img", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](647, "div", 105)(648, "ul")(649, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](650, "i", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](651, "19 June 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](652, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](653, "i", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](654, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](655, "SEO & Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](656, "h3")(657, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](658, "15 SEO Practices Website Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](659, "div", 154)(660, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](661, "img", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](662, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](663, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](664, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](665, "img", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](666, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](667, "img", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "div", 159)(669, "div", 1)(670, "div", 52)(671, "div", 160)(672, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](673, "img", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](674, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](675, "img", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](676, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](677, "img", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](678, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](679, "img", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](680, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](681, "img", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](682, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](683, "img", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](684, "div", 168)(685, "div", 26)(686, "div", 58)(687, "div", 53)(688, "div", 169)(689, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](690, "We Like to Start Your Project With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](691, "a", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](692, "Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](693, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](694, "div", 53)(695, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](696, "img", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](697, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_navbar_style_two_navbar_style_two_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleTwoComponent, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_1__.FooterStyleTwoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhaS1zdGFydHVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2338:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/blog-details/blog-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailsComponent": () => (/* binding */ BlogDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class BlogDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogDetailsComponent.ɵfac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(); };
BlogDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 328, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], [1, "inner-list"], [1, "bx", "bx-user"], [1, "bx", "bx-calendar"], [1, "bx", "bxs-chat"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots-2"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "blog-details-area", "pb-70"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "blog-article"], [1, "blog-article-img"], ["src", "assets/img/blog/blog-details.jpg", "alt", "Images"], [1, "article-content"], [1, "content-text"], [1, "blockquote"], [1, "another-content"], [1, "content-img"], [1, "col-6", "col-md-6"], ["src", "assets/img/blog/blog-details2.jpg", "alt", "Images"], ["src", "assets/img/blog/blog-details3.jpg", "alt", "Images"], [1, "blog-article-share"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-sm-6", "col-md-7"], [1, "blog-tag"], ["routerLink", "/blog"], [1, "col-lg-5", "col-sm-6", "col-md-5"], [1, "social-icon"], ["target", "_blank", "href", "#"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-instagram"], [1, "bx", "bxl-linkedin"], [1, "bx", "bxl-youtube"], [1, "article-author"], ["src", "assets/img/blog/blog-profile1.png", "alt", "Image"], [1, "author-social-link"], [1, "author-shape"], [1, "shape1"], ["src", "assets/img/blog/blog-shape.png", "alt", "Images"], [1, "shape2"], ["src", "assets/img/blog/blog-shape2.png", "alt", "Images"], [1, "shape-dots"], ["src", "assets/img/blog/blog-dots.png", "alt", "Images"], [1, "article-post"], [1, "col-lg-6", "col-sm-6"], [1, "article-post-share"], ["routerLink", "/blog-details"], ["routerLink", "/blo-detailsg"], [1, "active"], [1, "comments-wrap"], [1, "title"], [1, "ml-30"], ["src", "assets/img/blog/blog-profile2.png", "alt", "Image"], [1, "comments-form"], [1, "contact-form"], ["id", "contactForm"], [1, "form-group"], ["type", "text", "name", "name", "required", "", "data-error", "Please enter name", "placeholder", "Name*", 1, "form-control"], ["type", "email", "name", "name", "required", "", "data-error", "Please enter email", "placeholder", "Email*", 1, "form-control"], [1, "bx", "bx-phone"], ["type", "text", "name", "phone", "required", "", "data-error", "Please enter your phone number", "placeholder", "Phone", 1, "form-control"], [1, "bx", "bx-copy-alt"], ["type", "text", "name", "website", "required", "", "data-error", "Please enter your website", "placeholder", "Website", 1, "form-control"], [1, "col-lg-12", "col-md-12"], [1, "bx", "bx-envelope"], ["name", "message", "id", "message", "cols", "30", "rows", "8", "required", "", "data-error", "Write your message", "placeholder", "Your Message", 1, "form-control"], ["type", "submit", 1, "default-btn"], [1, "bx", "bx-plus"], [1, "col-lg-4", "col-md-12"], [1, "blog-widget-left"], [1, "blog-widget"], [1, "search-widget"], [1, "search-form"], ["type", "search", "placeholder", "Search...", 1, "form-control"], ["type", "submit"], [1, "bx", "bx-search"], [1, "widget-popular-post"], [1, "item"], ["routerLink", "/blog-details", 1, "thumb"], ["role", "img", 1, "full-image", "cover", "bg1"], [1, "info"], [1, "title-text"], ["role", "img", 1, "full-image", "cover", "bg2"], ["role", "img", 1, "full-image", "cover", "bg3"], [1, "widget_categories"], [1, "blog-widget-tag"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "15 SEO Best Practices: Website Traffic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 3)(7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Tom black");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " November 21, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " 3 Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "div", 1)(27, "div", 17)(28, "div", 18)(29, "div", 19)(30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 22)(33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "SEO Best Practice for Web Traffic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 23)(36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidunt ut labore et dolore plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspertur aut odit aut quia consequuntur magni.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "blockquote", 24)(41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "I see SEO becoming a normalized marketing tactic, the same way TV, radio, and print are traditionally.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "HERBERT BAYARD SWOPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 25)(46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "SEO is Cost-Effective Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "cia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem tem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 26)(53, "div", 17)(54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 30)(61, "div", 31)(62, "div", 32)(63, "div", 33)(64, "ul")(65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Tags:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li")(68, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "#SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li")(71, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "#Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li")(74, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "#Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li")(77, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "#Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 35)(80, "ul", 36)(81, "li")(82, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li")(85, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li")(88, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li")(91, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li")(94, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 43)(97, "ul")(98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Devit Killer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Author, Writer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "I\u2019m devit hack from an initial feasibility study, continuing through sucessl implna business you have to be But we know there");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 45)(107, "ul", 36)(108, "li")(109, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "li")(112, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "li")(115, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li")(118, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "li")(121, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 46)(124, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 53)(131, "div", 17)(132, "div", 54)(133, "div", 55)(134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Jun 12, 2020 / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "a", 56)(139, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Successful digital marketer does first to ensure they get");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 54)(142, "div", 55)(143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "April 19, 2020 / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "a", 57)(148, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Marketer who knows how to execute their campaigns");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 59)(151, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Comments (02)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "ul")(154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Devit Killer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Jnauary 12, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Software hack from an initial feasibility study, continuing through l implna business you have to be But we know there's a better");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Morah Jein ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "July 12, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "Software hack from an initial feasibility study, continuing through l implna business you have to be But we know there's a better");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 63)(175, "div", 64)(176, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Leave a Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "form", 65)(179, "div", 17)(180, "div", 54)(181, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "i", 4)(183, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 54)(185, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "i", 4)(187, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 54)(189, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "i", 69)(191, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 54)(193, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "i", 71)(195, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 73)(197, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "i", 74)(199, "textarea", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 73)(201, "button", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Post A Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](203, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 78)(205, "div", 79)(206, "div", 80)(207, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 81)(210, "form", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "input", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 80)(215, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "Recent Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 86)(218, "article", 87)(219, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "div", 90)(222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Jnauary 12, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "h4", 91)(225, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "A Guide to Google SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "Jhon hack from an iitial feaity study");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "article", 87)(230, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 90)(233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "June 30, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "h4", 91)(236, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "15 SEO Best Practices");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "Jhon hack from an iitial feaity study");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "article", 87)(241, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 90)(244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "April 09, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "h4", 91)(247, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248, "Website Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "Jhon hack from an iitial feaity study");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "div", 80)(252, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "div", 94)(255, "ul")(256, "li")(257, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, "(1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "li")(262, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Lifestyle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "(4)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "li")(267, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "Camping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "(3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "li")(272, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "(2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "li")(277, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "Device ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](280, "(6)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "li")(282, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "Internet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "(18)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "div", 80)(287, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "ul", 95)(290, "li")(291, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292, "#SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](293, "li")(294, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, "#Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "li")(297, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, "#Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "li")(300, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "#Sass");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "li")(303, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, "#It & Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "li")(306, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "#Tik");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "li")(309, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "#Tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 96)(312, "div", 97)(313, "div", 98)(314, "div", 99)(315, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](316, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](318, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](320, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](322, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](324, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](326, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](327, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 506:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/blog/blog.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 169, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "blog-area", "pt-50", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "h2-color2"], [1, "margin-auto"], [1, "row", "pt-45"], [1, "col-lg-4", "col-md-6"], [1, "blog-card"], ["routerLink", "/blog-details"], ["src", "assets/img/blog/blog1.png", "alt", "Images"], [1, "content"], [1, "bx", "bx-time-five"], [1, "bx", "bx-purchase-tag-alt"], ["routerLink", "/blog"], ["src", "assets/img/blog/blog2.png", "alt", "Images"], ["src", "assets/img/blog/blog3.png", "alt", "Images"], ["src", "assets/img/blog/blog7.png", "alt", "Images"], ["src", "assets/img/blog/blog8.png", "alt", "Images"], ["src", "assets/img/blog/blog9.png", "alt", "Images"], [1, "col-lg-12", "col-md-12"], [1, "pagination-area", "text-center"], ["routerLink", "/blog", 1, "prev", "page-numbers"], ["aria-current", "page", 1, "page-numbers", "current"], ["routerLink", "/blog", 1, "page-numbers"], ["routerLink", "/blog", 1, "next", "page-numbers"], [1, "bx", "bx-chevron-left"], [1, "blog-shape"], [1, "shape1"], ["src", "assets/img/shape/shape1.png", "alt", "Images"], [1, "shape2"], ["src", "assets/img/shape/shape5.png", "alt", "Images"], [1, "shape3"], ["src", "assets/img/shape/shape4.png", "alt", "Images"], [1, "shape4"], ["src", "assets/img/shape/shape6.png", "alt", "Images"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Our Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Latest Valuable Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24)(38, "ul")(39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " 09 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h3")(47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "The Home of Technology is in Front of You");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 20)(50, "div", 21)(51, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 24)(54, "ul")(55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " 10 July 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h3")(63, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "SEO Best Practices Mobile Friendliness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 20)(66, "div", 21)(67, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 24)(70, "ul")(71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " 19 June 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "SEO & Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h3")(79, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "15 SEO Practices Website Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 20)(82, "div", 21)(83, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 24)(86, "ul")(87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " 14 July 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "h3")(95, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "SEO Best Practice for Web Traffic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 20)(98, "div", 21)(99, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 24)(102, "ul")(103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " 15 August 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "h3")(111, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Best Guidelines for a Digital Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 20)(114, "div", 21)(115, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 24)(118, "ul")(119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " 19 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "h3")(127, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Web Architecture Best Practices & Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 33)(130, "div", 34)(131, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 40)(144, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 49)(153, "div", 50)(154, "div", 51)(155, "div", 52)(156, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](168, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 448:
/*!*************************************************************************************!*\
  !*** ./src/app/components/pages/case-study-details/case-study-details.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseStudyDetailsComponent": () => (/* binding */ CaseStudyDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class CaseStudyDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CaseStudyDetailsComponent.ɵfac = function CaseStudyDetailsComponent_Factory(t) { return new (t || CaseStudyDetailsComponent)(); };
CaseStudyDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CaseStudyDetailsComponent, selectors: [["app-case-study-details"]], decls: 153, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "case-studies-widget", "pt-50"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "case-studies-content"], [1, "images-top"], ["src", "assets/img/case-studies/case-studies-details1.jpg", "alt", "Images"], [1, "content-widget-area"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-12"], [1, "content-widget-img"], ["src", "assets/img/case-studies/case-studies-details2.png", "alt", "Images"], [1, "col-lg-5", "col-md-12"], [1, "content-widget-text"], [1, "bx", "bx-check"], [1, "col-lg-4", "col-md-12"], [1, "contact-widget"], [1, "flaticon-telephone"], [1, "content"], [1, "flaticon-tick"], [1, "flaticon-planet-earth"], [1, "flaticon-price-tag"], ["href", "#"], [1, "blog-area-widget", "pb-70"], [1, "title"], [1, "col-lg-4", "col-md-6"], [1, "blog-card"], ["routerLink", "/case-study-details"], ["src", "assets/img/blog/blog1.png", "alt", "Images"], ["routerLink", "/case-study-details", 1, "color-title"], ["src", "assets/img/blog/blog2.png", "alt", "Images"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], ["src", "assets/img/blog/blog3.png", "alt", "Images"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function CaseStudyDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Case Studies Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Case Studies Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "SEO & Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Our Web Solutions Help Your Business Grow Online In SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 20)(37, "div", 21)(38, "div", 22)(39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25)(42, "div", 26)(43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "The Entire Solution For Content Marketer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ul")(48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " The Field of Data Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " SEO is Uniquely Built Around");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Google\u2019s search algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "The Details Of The project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Result Timelime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore plicabo emo enim ipsam voluptatem quia voluptas sit aspernatur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 28)(66, "div", 29)(67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "ul")(70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 31)(73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Project Owner: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "ThenCary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 31)(80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "26 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 31)(87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "112/7 New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 31)(94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Data Science, SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 31)(101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Website:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span")(104, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Thencary.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 36)(107, "div", 1)(108, "div", 37)(109, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Related Projects You May Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 15)(112, "div", 38)(113, "div", 39)(114, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 31)(117, "h3")(118, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "The Home of Technology is in Front of You");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 38)(121, "div", 39)(122, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 31)(125, "h3")(126, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "SEO Best Practices Mobile Friendliness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 44)(129, "div", 39)(130, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 31)(133, "h3")(134, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "15 SEO Practices Website Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 46)(137, "div", 47)(138, "div", 48)(139, "div", 49)(140, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNlLXN0dWR5LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6188:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/case-study/case-study.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseStudyComponent": () => (/* binding */ CaseStudyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class CaseStudyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CaseStudyComponent.ɵfac = function CaseStudyComponent_Factory(t) { return new (t || CaseStudyComponent)(); };
CaseStudyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CaseStudyComponent, selectors: [["app-case-study"]], decls: 117, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "case-study-area", "pt-50", "pb-70"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "case-study-card"], ["routerLink", "/case-study-details"], ["src", "assets/img/case-studies/case-studies1.png", "alt", "Images"], [1, "content"], ["src", "assets/img/case-studies/case-studies2.png", "alt", "Images"], ["src", "assets/img/case-studies/case-studies3.png", "alt", "Images"], ["src", "assets/img/case-studies/case-studies4.png", "alt", "Images"], ["src", "assets/img/case-studies/case-studies5.png", "alt", "Images"], ["src", "assets/img/case-studies/case-studies6.png", "alt", "Images"], [1, "col-lg-12", "col-md-12"], [1, "pagination-area", "text-center"], ["routerLink", "/case-study", 1, "prev", "page-numbers"], ["aria-current", "page", 1, "page-numbers", "current"], ["routerLink", "/case-study", 1, "page-numbers"], ["routerLink", "/case-study", 1, "next", "page-numbers"], [1, "bx", "bx-chevron-left"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function CaseStudyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Case Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Case Study");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20)(31, "h3")(32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Detection Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "System Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16)(37, "div", 17)(38, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20)(41, "h3")(42, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Customer Segmentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16)(47, "div", 17)(48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20)(51, "h3")(52, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 16)(57, "div", 17)(58, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 20)(61, "h3")(62, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 16)(67, "div", 17)(68, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 20)(71, "h3")(72, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 16)(77, "div", 17)(78, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 20)(81, "h3")(82, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Data Scientist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Data Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 26)(87, "div", 27)(88, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 33)(101, "div", 34)(102, "div", 35)(103, "div", 36)(104, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNlLXN0dWR5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2736:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/coming-soon/coming-soon.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonComponent": () => (/* binding */ ComingSoonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ComingSoonComponent {
    constructor() {
        this.commingSoonTime = () => {
            const endTimeParse = (Date.parse('March 20, 2021 17:00:00 PDT')) / 1000;
            const now = new Date();
            const nowParse = (Date.parse(now.toString()) / 1000);
            const timeLeft = endTimeParse - nowParse;
            const days = Math.floor(timeLeft / 86400);
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < 10) {
                hours = 0 + hours;
            }
            if (minutes < 10) {
                minutes = 0 + minutes;
            }
            if (seconds < 10) {
                seconds = 0 + seconds;
            }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        };
    }
    ngOnInit() {
        this.myInterval = setInterval(() => {
            this.commingSoonTime();
        }, 0);
    }
}
ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) { return new (t || ComingSoonComponent)(); };
ComingSoonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 43, vars: 4, consts: [[1, "coming-soon-area"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "coming-soon-content"], ["id", "timer"], ["id", "days"], ["id", "hours"], ["id", "minutes"], ["id", "seconds"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter email address", "name", "EMAIL", "required", "", 1, "input-newsletter"], ["type", "submit", 1, "default-btn-two"], [1, "header-content-right"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-instagram"]], template: function ComingSoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Notify Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 13)(31, "li")(32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.days, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hours, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.minutes, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.seconds, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21pbmctc29vbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6953:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 111, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "contact-area", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "row", "pt-45"], [1, "col-lg-4", "col-md-6"], [1, "contact-card"], [1, "flaticon-planet-earth"], ["target", "_blank", "href", "#", 1, "contact-card-btn"], [1, "bx", "bx-plus", "plus-btn"], [1, "flaticon-email"], ["routerLink", "/", 1, "contact-card-btn"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], [1, "flaticon-clock"], ["href", "mailto:info@ribo.com", 1, "contact-card-btn"], [1, "contact-section", "pt-100", "pb-70"], [1, "container-fluid"], [1, "row"], [1, "col-lg-5", "col-md-12"], [1, "contact-img"], ["src", "assets/img/contact-img.png", "alt", "Images"], [1, "col-lg-7", "col-md-12"], [1, "contact-wrap"], [1, "contact-form"], [1, "section-title"], ["id", "contactForm"], [1, "col-lg-6", "col-sm-6"], [1, "form-group"], [1, "bx", "bx-user"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Your Name*", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "E-mail*", 1, "form-control"], [1, "bx", "bx-phone"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Your Phone", 1, "form-control"], [1, "bx", "bx-file"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Your Subject", 1, "form-control"], [1, "col-lg-12", "col-md-12"], [1, "bx", "bx-envelope"], ["name", "message", "id", "message", "cols", "30", "rows", "8", "required", "", "placeholder", "Your Message", 1, "form-control"], ["type", "submit", 1, "default-btn", "border-radius"], [1, "bx", "bx-plus"], [1, "contact-map"], [1, "container-fluid", "m-0", "p-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12083.001749463827!2d-74.1283896536106!3d40.78950036208337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c255dc66381f65%3A0x9ba18d7d96da3914!2sRoma!5e0!3m2!1sen!2sbd!4v1598511303135!5m2!1sen!2sbd"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 17)(31, "div", 18)(32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Office Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "54 Hegmann Uninuo Apt. 890, New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " York, NY 10018, United States.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Direction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 18)(44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Email.info@ribo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Mobile: (+44) - 45789 - 5789");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Know More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 25)(56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Hours of Operation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Monday - Friday: 09:00 - 20:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Sunday & Saturday: 10:30 - 22:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 28)(68, "div", 29)(69, "div", 30)(70, "div", 31)(71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 34)(74, "div", 35)(75, "div", 36)(76, "div", 37)(77, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Contact With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "form", 38)(82, "div", 30)(83, "div", 39)(84, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 41)(86, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 39)(88, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 41)(90, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 39)(92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 44)(94, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 39)(96, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "i", 46)(98, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 48)(100, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 49)(102, "textarea", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 48)(104, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 53)(108, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "iframe", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5948:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/error/error.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 35, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "error-area"], [1, "d-table"], [1, "d-table-cell"], [1, "error-content"], ["src", "assets/img/404-error.png", "alt", "Image"], ["routerLink", "/", 1, "default-btn-two"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Oops! Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "The page you are looking for might have been removed had its name changed or is temporarily unavailable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Return To Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 8030:
/*!*******************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);



class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 150, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "faq-area", "pt-50", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "h2-color2"], [1, "row", "pt-45"], [1, "col-lg-6", "col-md-12"], [1, "faq-accordion"], [1, "accordion"], [1, "accordion-item"], ["href", "javascript:void(0)", 1, "accordion-title"], [1, "bx", "bx-chevron-down"], [1, "accordion-content"], ["href", "javascript:void(0)", 1, "accordion-title", "active"], [1, "accordion-content", "show"], [1, "faq-contact", "pb-70"], [1, "row", "pt-45", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "faq-img"], ["src", "assets/img/faq-img.png", "alt", "Images"], [1, "col-lg-7", "col-md-12"], [1, "faq-contact-wrap"], [1, "contact-form"], ["id", "contactForm"], [1, "row"], [1, "col-lg-6", "col-sm-6"], [1, "form-group"], [1, "bx", "bx-user"], ["type", "text", "name", "name", "id", "name", "placeholder", "Your Name*", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "E-mail*", 1, "form-control"], [1, "bx", "bx-phone"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Your Phone", 1, "form-control"], [1, "bx", "bx-file"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Your Subject", 1, "form-control"], [1, "col-lg-12", "col-md-12"], [1, "bx", "bx-envelope"], ["name", "message", "id", "message", "cols", "30", "rows", "8", "required", "", "placeholder", "Your Message", 1, "form-control"], ["type", "submit", 1, "default-btn", "border-radius"], [1, "bx", "bx-plus"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "ul", 21)(34, "li", 22)(35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " How Can a Bigenner Start SEO?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 25)(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li", 22)(42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " How Can a I SEO My Website?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 25)(46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li", 22)(49, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Top 10 SEO Ranking Factors?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25)(53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li", 22)(56, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Best SEO Practices for Keyword Density?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 27)(60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 19)(63, "div", 20)(64, "ul", 21)(65, "li", 22)(66, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " What is the Web Development?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25)(70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "li", 22)(73, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " How Can a Beginner Start Web Development?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 25)(77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "li", 22)(80, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " What is the App Development?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 25)(84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "li", 22)(87, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " How Can a Beginner Start App Development?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 27)(91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 28)(94, "div", 1)(95, "div", 15)(96, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Tell Us Any Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 29)(101, "div", 30)(102, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 33)(105, "div", 34)(106, "div", 35)(107, "form", 36)(108, "div", 37)(109, "div", 38)(110, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 40)(112, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 38)(114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "i", 40)(116, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 38)(118, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](119, "i", 43)(120, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 38)(122, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "i", 45)(124, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 47)(126, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "i", 48)(128, "textarea", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 47)(130, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Send Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 52)(134, "div", 53)(135, "div", 54)(136, "div", 55)(137, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "app-footer-style-two");
    } }, dependencies: [_common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 581:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/machine-learning/machine-learning.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineLearningComponent": () => (/* binding */ MachineLearningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_three_navbar_style_three_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-three/navbar-style-three.component */ 1675);




class MachineLearningComponent {
    constructor() { }
    ngOnInit() {
    }
}
MachineLearningComponent.ɵfac = function MachineLearningComponent_Factory(t) { return new (t || MachineLearningComponent)(); };
MachineLearningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MachineLearningComponent, selectors: [["app-machine-learning"]], decls: 428, vars: 0, consts: [[1, "banner-area-three"], [1, "container-fluid"], [1, "container-max-2"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-12"], [1, "banner-content-three"], [1, "banner-three-btn"], ["routerLink", "/contact", 1, "explore-btn"], [1, "bx", "bx-plus"], ["href", "https://www.youtube.com/watch?v=07d2dXHYb94", 1, "play-two-btn", "popup-btn"], [1, "flaticon-forward"], [1, "banner-img-3"], ["src", "assets/img/home-three/home-three-img.png", "alt", "Images"], [1, "banner-three-shape"], [1, "shape1"], ["src", "assets/img/shape/shape16.png", "alt", "Images"], [1, "shape2"], ["src", "assets/img/shape/shape15.png", "alt", "Images"], [1, "brand-logo-area"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"], [1, "service-area-three", "pt-100", "pb-70"], [1, "container"], [1, "section-title", "text-center"], [1, "sp-after"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "services-item-two"], ["routerLink", "/services-details"], ["src", "assets/img/service/service-icon10.png", "alt", "assets"], ["src", "assets/img/service/service-icon11.png", "alt", "assets"], [1, "col-lg-4", "col-sm-6", "col-md-6", "offset-sm-3", "offset-md-3", "offset-lg-0"], ["src", "assets/img/service/service-icon12.png", "alt", "assets"], [1, "about-area-two", "pb-70"], [1, "col-lg-6", "col-md-12"], [1, "about-img-2"], ["src", "assets/img/about/about-img3.png", "alt", ""], [1, "about-content-two"], [1, "section-title"], [1, "sp-before", "sp-after"], [1, "about-btn-two"], ["routerLink", "/about", 1, "about-more-btn"], ["routerLink", "/contact", 1, "contact-us-btn"], [1, "schedule-area"], [1, "schedule-width", "ptb-100"], [1, "schedule-content"], ["routerLink", "/contact", 1, "default-btn-two"], [1, "schedule-content-shape"], [1, "schedule-shape"], ["src", "assets/img/shape/schedule-shape.png", "alt", "Images"], [1, "serve-area", "pt-100", "pb-70"], [1, "serve-content"], [1, "h2-color2"], [1, "col-lg-6", "col-sm-6"], [1, "serve-list"], [1, "bx", "bx-check"], [1, "serve-img"], ["src", "assets/img/serve-img.png", "alt", "Images"], [1, "courses-area", "pb-70"], [1, "row", "pt-45"], [1, "col-lg-6"], [1, "courses-card"], [1, "images"], ["routerLink", "/"], ["src", "assets/img/courses/courses-img1.png", "alt", "Images"], [1, "rate"], [1, "instructor"], ["src", "assets/img/courses/courses-instructor1.png", "alt", "Images"], [1, "name"], [1, "flaticon-phone"], [1, "flaticon-clock"], ["src", "assets/img/courses/courses-img2.png", "alt", "Images"], ["src", "assets/img/courses/courses-instructor2.png", "alt", "Images"], ["src", "assets/img/courses/courses-img3.png", "alt", "Images"], ["src", "assets/img/courses/courses-instructor3.png", "alt", "Images"], ["src", "assets/img/courses/courses-img4.png", "alt", "Images"], ["src", "assets/img/courses/courses-instructor4.png", "alt", "Images"], [1, "testimonial-area-two", "pb-100"], [1, "col-lg-5", "col-md-12"], [1, "testimonial-content"], [1, "testimonial-content1"], [1, "testimonial-text"], [1, "testimonial-content2"], [1, "testimonial-content3"], [1, "testimonial-content4"], [1, "testimonial-shape1"], [1, "testimonial-shape2"], [1, "testimonial-slider-area"], [1, "testimonial-title-2"], [1, "testimonial-slider-two", "owl-carousel", "owl-theme"], [1, "testimonial-item-2"], [1, "content"], ["src", "assets/img/testimonial/testimonial-img1.png", "alt", "Images"], [1, "content-title"], ["src", "assets/img/testimonial/testimonial-img2.png", "alt", "Images"], ["src", "assets/img/testimonial/testimonial-img3.png", "alt", "Images"], [1, "blog-area", "blog-bg2", "pt-100", "pb-70"], [1, "col-lg-8", "col-md-12"], [1, "blog-title"], [1, "h2-color-2"], [1, "col-lg-4", "col-md-12"], [1, "blog-btn"], ["routerLink", "/blog", 1, "default-btn-two"], [1, "col-lg-4", "col-md-6"], [1, "blog-card"], ["routerLink", "/blog-details"], ["src", "assets/img/blog/blog4.png", "alt", "Images"], [1, "bx", "bx-time-five"], [1, "bx", "bx-purchase-tag-alt"], ["routerLink", "/blog"], ["routerLink", "/blog-details", 1, "title-color"], ["src", "assets/img/blog/blog5.png", "alt", "Images"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], ["src", "assets/img/blog/blog6.png", "alt", "Images"], [1, "project-area"], [1, "project-content"], ["routerLink", "/contact", 1, "project-btn"], [1, "project-shape"], ["src", "assets/img/shape/shape17.png", "alt", ""], ["src", "assets/img/shape/shape18.png", "alt", ""]], template: function MachineLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-three");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Learning Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Machine Learning & Cognitive Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor avida. Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Explore Bootcamp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Play video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13)(23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18)(28, "div", 1)(29, "div", 19)(30, "div", 20)(31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 28)(44, "div", 29)(45, "div", 30)(46, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "We Help Your Business Grow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 32)(53, "div", 33)(54, "div", 34)(55, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "h3")(58, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Marketing Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Lorem ipsum dolor sit ametaut odiut psciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 33)(63, "div", 34)(64, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h3")(67, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Startup Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Lorem ipsum dolor sit ametaut odiut psciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 38)(72, "div", 34)(73, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h3")(76, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Lorem ipsum dolor sit ametaut odiut psciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 40)(81, "div", 1)(82, "div", 19)(83, "div", 3)(84, "div", 41)(85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 41)(88, "div", 44)(89, "div", 45)(90, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Grow Your Business With Our Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "We have 30 yearsOur strategy includes consistently evolving, to ensure we\u2019re producing exceptional SEO for business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae tempor nisl. Etiam magna augue, tempus eget suscipit et, maximus hendrerit nunc. Nunc elementum non ipsum vitae molestie. Donec vestibulum lobortis congue. Mauris sed tincidunt leo. Suspendisse accumsan nibh et diam porta ultrices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 47)(99, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 50)(106, "div", 1)(107, "div", 51)(108, "div", 52)(109, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Check Full Schedule for In-person Data Science Bootcamps");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Join The Bootcamp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 54)(115, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 57)(122, "div", 1)(123, "div", 32)(124, "div", 41)(125, "div", 58)(126, "div", 45)(127, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Why We\u2019re");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "h2", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "We Serve As Possible That You Expected");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna tetur adipisicing saliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 32)(134, "div", 60)(135, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Experts at Teaching Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 60)(142, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Proven Career Outcomes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 60)(149, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Experts at Teaching System");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 60)(156, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "04");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Leadership Learning system");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna tetur adipisicing saliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Apply for position ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 41)(168, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 65)(171, "div", 29)(172, "div", 30)(173, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Our Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "h2", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Online Data Science Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 66)(180, "div", 67)(181, "div", 68)(182, "div", 69)(183, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 72)(186, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "h3", 75)(191, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "David McLean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h3")(194, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Introduction to Linear Models and Matrix Algebra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Lorem ipsum dolor sit ametaut odiut psciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "ul")(199, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, " Available Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](203, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, " 8 Weeks Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 67)(206, "div", 68)(207, "div", 69)(208, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](209, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 72)(211, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "$80");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "h3", 75)(216, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "Jems ward");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "h3")(219, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, " Introduction to Quantitative Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Lorem ipsum dolor sit ametaut odiut psciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "ul")(224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, " Available Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, " 9 Weeks Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 67)(231, "div", 68)(232, "div", 69)(233, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 72)(236, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "$78");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "h3", 75)(241, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Juhan Luis");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "h3")(244, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Data Science Inference and Modeling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "Lorem ipsum dolor sit ametaut odiut psciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "ul")(249, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](250, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, " Available Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254, " 5 Weeks Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "div", 67)(256, "div", 68)(257, "div", 69)(258, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](259, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 72)(261, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](264, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "h3", 75)(266, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, " Miron Don");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "h3")(269, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](270, "Introduction to Linear Data Visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Lorem ipsum dolor sit ametaut odiut psciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "ul")(274, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, " Available Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, " 4 Weeks Long");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "div", 84)(281, "div", 29)(282, "div", 32)(283, "div", 85)(284, "div", 86)(285, "div", 87)(286, "div", 88)(287, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "10 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "ON THE MARKET");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "div", 89)(292, "div", 88)(293, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "10,000+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "LEARNERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "div", 90)(298, "div", 88)(299, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, "196+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "COUNTRIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "div", 91)(304, "div", 88)(305, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "125+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "COURSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](310, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](312, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "div", 4)(314, "div", 94)(315, "div", 95)(316, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](317, "Words From Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "div", 96)(319, "div", 97)(320, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](323, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 100)(325, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](326, "David McLean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "CEO & Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "div", 97)(330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](333, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "div", 100)(335, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](336, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "div", 97)(340, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](341, "I chose Zinka because of their value Andincredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](343, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "div", 100)(345, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "div", 103)(350, "div", 29)(351, "div", 32)(352, "div", 104)(353, "div", 105)(354, "div", 45)(355, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](356, "Our Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "h2", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "Latest Valuable Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "div", 107)(362, "div", 108)(363, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "See all news ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](365, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "div", 110)(367, "div", 111)(368, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](369, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "div", 98)(371, "ul")(372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](373, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, " 09 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "h3")(380, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, "The Home of Technology is in Front of You");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "div", 110)(383, "div", 111)(384, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](385, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](386, "div", 98)(387, "ul")(388, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](389, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](390, " 10 July 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](392, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](393, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](394, "SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "h3")(396, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, "SEO Best Practices Mobile Friendliness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "div", 119)(399, "div", 111)(400, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](401, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "div", 98)(403, "ul")(404, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](405, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](406, " 19 June 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](408, "i", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](410, "SEO & Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "h3")(412, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "15 SEO Practices Website Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "div", 121)(415, "div", 29)(416, "div", 122)(417, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](418, "Already Interested! Do You Have Any Project to Working With?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "a", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](420, "Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](421, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 124)(423, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](424, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](426, "img", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](427, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_three_navbar_style_three_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleThreeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWNoaW5lLWxlYXJuaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5842:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/pricing/pricing.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PricingComponent": () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class PricingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 151, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "pricing-area", "pt-50", "pb-100"], [1, "container-fluid"], [1, "section-title", "text-center"], [1, "sp-after"], [1, "h2-color"], [1, "price-width"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "pricing-card"], [1, "pricing-card-into", "color-bg1"], [1, "flaticon-banner", "pricing-icon", "color-1"], [1, "color-1"], [1, "price-rate"], [1, "bx", "bx-check"], ["routerLink", "/pricing", 1, "purchase-btn", "button-bg1"], [1, "pricing-card-into", "color-bg2"], [1, "flaticon-mortgage-loan", "pricing-icon", "color-2"], [1, "color-2"], ["routerLink", "/pricing", 1, "purchase-btn", "button-bg2"], [1, "col-lg-4", "col-sm-6", "offset-sm-3", "offset-lg-0"], [1, "pricing-card-into", "color-bg3"], [1, "flaticon-processing", "pricing-icon", "color-3"], [1, "color-3"], ["routerLink", "/pricing", 1, "purchase-btn", "button-bg3"], [1, "pricing-shape"], [1, "shape1"], ["src", "assets/img/shape/shape7.png", "alt", "Images"], [1, "shape2"], ["src", "assets/img/shape/shape4.png", "alt", "Images"], [1, "shape3"], ["src", "assets/img/shape/shape5.png", "alt", "Images"], [1, "shape4"], ["src", "assets/img/shape/shape6.png", "alt", "Images"], [1, "shape5"], [1, "shape6"], ["src", "assets/img/shape/shape8.png", "alt", "Images"], [1, "brand-logo-area", "pt-100"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "div", 16)(26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Price & Plans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22)(36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "STANDARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 26)(41, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "$ 69.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Monthly Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ul")(46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " 2.100 Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " One Way Link Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li")(56, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "5 Free Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "li")(59, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "3 Press Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "PURCHASE NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 21)(64, "div", 22)(65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h3", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "ECONOMY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 26)(70, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "$ 79.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Monthly Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "ul")(75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " 2.100 Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " One Way Link Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " 5 Free Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li")(88, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "3 Press Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "PURCHASE NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 33)(93, "div", 22)(94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "EXECUTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 26)(99, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "$ 89.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Monthly Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "ul")(104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " 2.100 Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " One Way Link Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " 5 Free Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " 3 Press Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "PURCHASE NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 38)(122, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 50)(135, "div", 15)(136, "div", 51)(137, "div", 52)(138, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4587:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/privacy-policy/privacy-policy.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);



class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 63, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "terms-conditions-area", "pt-50", "pb-70"], [1, "single-content"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Welcome to Riob Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio quis est suscipit vehicula nec eget arcu. Mauris malesuada libero eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est sed orci cursus efficitur. Sed volutpat sit amet mauris eget posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend diam. Vestibulum diam diam, ultricies id cursus ac, bibendum ac quam.Donec posuere diam eget consequat facilisis. Vestibulum turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla. Quisque tincidunt augue nunc, non pretium nibh consequat vel. Morbi ornare quam neque, nec pharetra magna dapibus quis. Curabitur vehicula ultricies faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Integer mattis magna at nibh semper vulputate. Nunc eu gravida risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum luctus. Pellentesque lectus lorem, laoreet in semper vitae, pellentesque sit amet sapien. Morbi ut nibh a massa suscipit posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim eget turpis nec pulvinar. Vestibulum fermentum lacus sed dignissim mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae finibus dolor. Nam ultrices consequat odio at gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15)(33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Welcome to Product Riob Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio quis est suscipit vehicula nec eget arcu. Mauris malesuada libero eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est sed orci cursus efficitur. Sed volutpat sit amet mauris eget posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend diam. Vestibulum diam diam, ultricies id cursusac, bibendum ac quam.Donec posuere diam eget consequat facilisis. Vestibulum turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla. Quisque tincidunt augue nunc, non pretium nibh consequat vel. Morbi ornare quam neque, nec pharetra magna dapibus quis. Curabitur vehicula ultricies faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Integer mattis magna at nibh semper vulputate. Nunc eu gravida risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum luctus. Pellentesque lectus lorem, laoreet in semper vitae, pellentesque sit amet sapien. Morbi ut nibh a massa suscipit posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim eget turpis necpulvinar. Vestibulum fermentum lacus sed dignissim mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae finibus dolor. Nam ultrices consequat odio at gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 15)(40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Welcome to Services Riob Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio quis est suscipit vehicula nec eget arcu. Mauris malesuada libero eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est sed orci cursus efficitur. Sed volutpat sit amet mauris eget posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend diam. Vestibulum diam diam, ultricies id cursus ac, bibendum ac quam.Donec posuere diam eget consequat facilisis. Vestibulum turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla. Quisque tincidunt augue nunc, non pretium nibh consequat vel. Morbi ornare quam neque, nec pharetra magna dapibus quis. Curabitur vehicula ultricies faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Integer mattis magna at nibh semper vulputate. Nunc eu gravida risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum luctus. Pellentesque lectus lorem, laoreet in semper vitae, pellentesque sit amet sapien. Morbi ut nibh a massa suscipit posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim eget turpis nec pulvinar. Vestibulum fermentum lacus sed dignissim mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae finibus dolor. Nam ultrices consequat odio at gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16)(47, "div", 17)(48, "div", 18)(49, "div", 19)(50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "app-footer-style-two");
    } }, dependencies: [_common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5669:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/seo-agency/seo-agency.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeoAgencyComponent": () => (/* binding */ SeoAgencyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/navbar-style-one/navbar-style-one.component */ 5532);
/* harmony import */ var _common_footer_style_one_footer_style_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/footer-style-one/footer-style-one.component */ 8872);




class SeoAgencyComponent {
    constructor() { }
    ngOnInit() {
    }
}
SeoAgencyComponent.ɵfac = function SeoAgencyComponent_Factory(t) { return new (t || SeoAgencyComponent)(); };
SeoAgencyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SeoAgencyComponent, selectors: [["app-seo-agency"]], decls: 662, vars: 0, consts: [[1, "banner-area"], [1, "container-fluid"], [1, "container-max-2"], [1, "col-lg-7", "col-md-12"], [1, "banner-content"], [1, "title"], [1, "flaticon-idea"], [1, "banner-btn"], ["routerLink", "/contact", 1, "get-btn"], [1, "bx", "bx-plus"], ["href", "tel:+123-098-456-098", 1, "call-btn"], [1, "banner-shape-right"], ["src", "assets/img/home1/home-one-shape.png", "alt", "Images"], [1, "banner-img"], ["src", "assets/img/home1/home1.png", "alt", "Images"], [1, "banner-shape"], [1, "shape1"], ["src", "assets/img/home1/home-one-shape3.png", "alt", "Images"], [1, "shape2"], ["src", "assets/img/home1/home-one-shape1.png", "alt", "Images"], [1, "shape3"], ["src", "assets/img/home1/home-one-shape2.png", "alt", "Images"], [1, "shape4"], ["src", "assets/img/home1/home-one-shape4.png", "alt", "Images"], [1, "shape5"], ["src", "assets/img/home1/home-one-shape5.png", "alt", "Images"], [1, "brand-area"], [1, "brand-max"], [1, "brand-title"], ["href", "#", "target", "_blank"], [1, "brand-slider", "owl-carousel", "owl-theme"], [1, "brand-item"], ["src", "assets/img/brand/brand1.png", "alt", "Images"], ["src", "assets/img/brand/brand2.png", "alt", "Images"], ["src", "assets/img/brand/brand3.png", "alt", "Images"], ["src", "assets/img/brand/brand4.png", "alt", "Images"], ["src", "assets/img/brand/brand5.png", "alt", "Images"], ["src", "assets/img/brand/brand6.png", "alt", "Images"], [1, "about-area", "pt-100", "pb-70"], [1, "container-max"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "about-img"], ["src", "assets/img/about/about-img1.png", "alt", "Images"], [1, "about-content"], [1, "section-title"], [1, "sp-after"], [1, "h2-color"], [1, "about-btn"], ["routerLink", "/about", 1, "default-btn"], ["href", "https://www.youtube.com/watch?v=07d2dXHYb94", 1, "play-btn", "popup-btn"], [1, "flaticon-play-button"], [1, "about-shape"], [1, "shape-1"], ["src", "assets/img/about/about-shape1.png", "alt", "Images"], [1, "shape-2"], ["src", "assets/img/shape/shape1.png", "alt", "Images"], [1, "shape-3"], ["src", "assets/img/shape/shape2.png", "alt", "Images"], [1, "shape-4"], ["src", "assets/img/shape/shape3.png", "alt", "Images"], [1, "shape-5"], ["src", "assets/img/shape/shape4.png", "alt", "Images"], [1, "counter-area"], [1, "container"], [1, "col-lg-3", "col-sm-6"], [1, "single-counter"], [1, "flaticon-confetti"], [1, "content"], [1, "flaticon-project"], [1, "flaticon-customers"], [1, "flaticon-financial-advisor"], [1, "progress-area", "pt-100", "pb-70"], [1, "section-title", "text-center"], [1, "row", "pt-45"], [1, "col-lg-4", "col-sm-6"], [1, "progress-card", "pr-bg-color-1"], ["src", "assets/img/progress-icon/progress-icon1.png", "alt", "Images"], [1, "progress-card", "pr-bg-color-2"], ["src", "assets/img/progress-icon/progress-icon2.png", "alt", "Images"], [1, "col-lg-4", "col-sm-6", "offset-sm-3", "offset-lg-0"], [1, "progress-card", "pr-bg-color-3"], ["src", "assets/img/progress-icon/progress-icon3.png", "alt", "Images"], [1, "seo-area"], [1, "seo-width"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-md-12"], [1, "seo-form"], [1, "seo-form-area"], [1, "seo-form-option"], [1, "col-lg-4", "col-sm-6", "col-md-4"], [1, "form-group"], [1, "flaticon-place"], ["type", "text", "placeholder", "Your Website URL", 1, "form-control", "form-border"], [1, "flaticon-vision"], ["type", "email", "placeholder", "Enter Your Email", 1, "form-control"], [1, "col-lg-4", "col-sm-6", "col-md-4", "offset-sm-3", "offset-md-0", "offset-lg-0"], ["type", "submit", 1, "default-btn"], [1, "col-lg-4", "col-md-12"], [1, "seo-img"], ["src", "assets/img/seo-rank.png", "alt", "Images"], [1, "services-area", "pt-100", "pb-70"], [1, "services-card-into"], [1, "services-card"], ["routerLink", "/services-details"], ["src", "assets/img/service/service-icon1.png", "alt", "Images"], [1, "services-card-shape"], ["src", "assets/img/service/service-shape.png", "alt", "Images"], [1, "services-dots"], ["src", "assets/img/service/dots.png", "alt", "Images"], ["src", "assets/img/service/service-icon2.png", "alt", "Images"], ["src", "assets/img/service/service-icon3.png", "alt", "Images"], ["src", "assets/img/service/service-icon4.png", "alt", "Images"], ["src", "assets/img/service/service-icon5.png", "alt", "Images"], ["src", "assets/img/service/service-icon6.png", "alt", "Images"], [1, "services-shape"], [1, "services-bg"], ["src", "assets/img/service/service-bg.png", "alt", "Images"], [1, "work-area", "pt-100", "pb-70"], [1, "work-card"], [1, "work-card", "active"], [1, "work-shape"], ["src", "assets/img/shape/work-shape.png", "alt", "Images"], [1, "pricing-area", "ptb-100"], [1, "price-width"], [1, "pricing-card"], [1, "pricing-card-into", "color-bg1"], [1, "flaticon-banner", "pricing-icon", "color-1"], [1, "color-1"], [1, "price-rate"], [1, "bx", "bx-check"], ["routerLink", "/", 1, "purchase-btn", "button-bg1"], [1, "pricing-card-into", "color-bg2"], [1, "flaticon-mortgage-loan", "pricing-icon", "color-2"], [1, "color-2"], ["routerLink", "/", 1, "purchase-btn", "button-bg2"], [1, "pricing-card-into", "color-bg3"], [1, "flaticon-processing", "pricing-icon", "color-3"], [1, "color-3"], ["routerLink", "/", 1, "purchase-btn", "button-bg3"], [1, "pricing-shape"], ["src", "assets/img/shape/shape7.png", "alt", "Images"], ["src", "assets/img/shape/shape5.png", "alt", "Images"], ["src", "assets/img/shape/shape6.png", "alt", "Images"], [1, "shape6"], ["src", "assets/img/shape/shape8.png", "alt", "Images"], [1, "team-area", "pt-100", "pb-70"], [1, "container-fluid", "p-0", "m-0"], [1, "team-slider", "owl-carousel", "owl-theme", "pt-45"], [1, "team-item"], ["routerLink", "/team", 1, "team-img", "team-bg-before"], ["src", "assets/img/team/team-img1.jpg", "alt", "Images"], [1, "team-content"], ["routerLink", "/team"], [1, "social-link"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-youtube"], ["routerLink", "/team", 1, "team-img", "team-bg-before-2"], ["src", "assets/img/team/team-img2.jpg", "alt", "Images"], ["routerLink", "/team", 1, "team-img", "team-bg-before-3"], ["src", "assets/img/team/team-img3.jpg", "alt", "Images"], ["src", "assets/img/team/team-img4.jpg", "alt", "Images"], ["src", "assets/img/team/team-img5.jpg", "alt", "Images"], ["src", "assets/img/team/team-img6.jpg", "alt", "Images"], [1, "team-shape"], [1, "team-shape1"], ["src", "assets/img/shape/team-shape.png", "alt", "Images"], [1, "team-shape2"], [1, "team-shape3"], [1, "team-shape4"], [1, "blog-area", "blog-bg", "pt-100", "pb-70"], [1, "blog-title"], [1, "blog-btn"], ["routerLink", "/blog", 1, "default-btn"], [1, "col-lg-4", "col-md-6"], [1, "blog-card"], ["routerLink", "/blog-details"], ["src", "assets/img/blog/blog1.png", "alt", "Images"], [1, "bx", "bx-time-five"], [1, "bx", "bx-purchase-tag-alt"], ["routerLink", "/blog"], ["src", "assets/img/blog/blog2.png", "alt", "Images"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], ["src", "assets/img/blog/blog3.png", "alt", "Images"], [1, "blog-shape"]], template: function SeoAgencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-one");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "The Generator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Possible to Link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Actual Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor avida. Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Get started");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "+123-098-456-098");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15)(28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 26)(39, "div", 1)(40, "div", 27)(41, "div", 28)(42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "150,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " supporter all ovet the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 30)(48, "div", 31)(49, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 31)(52, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 31)(55, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 31)(58, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 31)(61, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 31)(64, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 31)(67, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 38)(70, "div", 1)(71, "div", 39)(72, "div", 40)(73, "div", 41)(74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 41)(77, "div", 44)(78, "div", 45)(79, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Grow Your Business ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "With Our Agency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "We have 30 yearsOur strategy includes consistently evolving, to ensure we\u2019re producing exceptional SEO for business.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae tempor nisl. Etiam magna augue, tempus eget suscipit et, maximus hendrerit nunc. Nunc elementum non ipsum vitae molestie. Donec vestibulum lobortis congue. Mauris sed tincidunt leo Suspendisse accumsan.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 48)(90, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Watch 1min ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Play demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 52)(100, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 63)(111, "div", 64)(112, "div", 40)(113, "div", 65)(114, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 68)(117, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "10 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "GLORIOUS YEARS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 65)(122, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 68)(125, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "670 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "PROJECTS DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 65)(130, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 68)(133, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "560 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "ACTIVE CLIENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 65)(138, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 68)(141, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "56 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "TEAM ADVISORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 72)(146, "div", 64)(147, "div", 73)(148, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Real Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Super Great Things From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Your Desire Wishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 74)(155, "div", 75)(156, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "28,998");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "RANKING KEYWORDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 75)(163, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "600%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "ANNUAL ORGANIC TRAFFIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 80)(170, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "50,234");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "RANKING KEYWORDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 83)(177, "div", 1)(178, "div", 84)(179, "div", 85)(180, "div", 86)(181, "div", 87)(182, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "What is My SEO Score?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 88)(185, "form", 89)(186, "div", 40)(187, "div", 90)(188, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "i", 92)(190, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 90)(192, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "i", 94)(194, "input", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 96)(196, "button", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, " Get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 98)(200, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 101)(203, "div", 64)(204, "div", 45)(205, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "We\u2019re Flexible to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Provide You Best");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 74)(212, "div", 98)(213, "div", 102)(214, "div", 103)(215, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "h3")(218, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](223, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 98)(227, "div", 103)(228, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "img", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "h3")(231, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div", 103)(238, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "h3")(241, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Content Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 98)(248, "div", 103)(249, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](250, "img", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "h3")(252, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "SEO Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](257, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 103)(259, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "h3")(262, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 103)(269, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "h3")(272, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "PPC Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](277, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "div", 115)(279, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](280, "img", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](282, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "div", 118)(286, "div", 64)(287, "div", 73)(288, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Working Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, "Simple & Clean ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "Work Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 74)(295, "div", 75)(296, "div", 119)(297, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](300, "Onsite Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "div", 75)(304, "div", 120)(305, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "Keyword Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](310, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 80)(312, "div", 119)(313, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](314, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "Link Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit afugitsed quia consequuntur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](320, "img", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "div", 123)(322, "div", 1)(323, "div", 73)(324, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, "Pricing Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](327, "Price & Plans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](329, "Packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](330, "div", 124)(331, "div", 40)(332, "div", 75)(333, "div", 125)(334, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](335, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "h3", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, "STANDARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "div", 129)(339, "h2", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "$ 69.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "span", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Monthly Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "ul")(344, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](345, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, " Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](348, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](349, " 2.100 Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](351, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, " One Way Link Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "li")(354, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "5 Free Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "li")(357, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "3 Press Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "a", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "PURCHASE NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "div", 75)(362, "div", 125)(363, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](364, "i", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "h3", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](366, "ECONOMY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "div", 129)(368, "h2", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, "$ 79.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "span", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](371, "Monthly Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "ul")(373, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](374, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](375, " Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](377, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, " 2.100 Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](380, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, " One Way Link Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](383, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](384, " 5 Free Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "li")(386, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](387, "3 Press Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](389, "PURCHASE NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "div", 80)(391, "div", 125)(392, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](393, "i", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "h3", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395, "EXECUTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "div", 129)(397, "h2", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, "$ 89.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "span", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](400, "Monthly Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "ul")(402, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](403, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, " Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](406, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](407, " 2.100 Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](409, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](410, " One Way Link Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](412, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, " 5 Free Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](415, "i", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](416, " 3 Press Releases");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "a", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](418, "PURCHASE NOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "div", 140)(420, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](421, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](423, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](424, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](425, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](427, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](429, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](431, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "div", 146)(433, "div", 147)(434, "div", 73)(435, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](436, "Our Specialists");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](438, "Meet Our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](440, "Leadership Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](443, "div", 148)(444, "div", 149)(445, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](446, "img", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "div", 152)(448, "h3")(449, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](450, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](451, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](452, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "ul", 154)(454, "li")(455, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](456, "i", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "li")(458, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](459, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "li")(461, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](462, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](463, "li")(464, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](465, "i", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "div", 149)(467, "a", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](468, "img", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "div", 152)(470, "h3")(471, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](472, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](473, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](474, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](475, "ul", 154)(476, "li")(477, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](478, "i", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "li")(480, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](481, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "li")(483, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](484, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](485, "li")(486, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](487, "i", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](488, "div", 149)(489, "a", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](490, "img", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "div", 152)(492, "h3")(493, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](494, "Cristiono Kopper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](495, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](496, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "ul", 154)(498, "li")(499, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](500, "i", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "li")(502, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](503, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "li")(505, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](506, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "li")(508, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](509, "i", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "div", 149)(511, "a", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](512, "img", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "div", 152)(514, "h3")(515, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](516, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](517, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](518, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](519, "ul", 154)(520, "li")(521, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](522, "i", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](523, "li")(524, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](525, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](526, "li")(527, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](528, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](529, "li")(530, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](531, "i", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](532, "div", 149)(533, "a", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](534, "img", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "div", 152)(536, "h3")(537, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](538, "Rickey poltin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](540, "Area Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](541, "ul", 154)(542, "li")(543, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](544, "i", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](545, "li")(546, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](547, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "li")(549, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](550, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](551, "li")(552, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](553, "i", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](554, "div", 149)(555, "a", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](556, "img", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](557, "div", 152)(558, "h3")(559, "a", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](560, "Jeck Keplin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](561, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](562, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](563, "ul", 154)(564, "li")(565, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](566, "i", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](567, "li")(568, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](569, "i", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "li")(571, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](572, "i", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](573, "li")(574, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](575, "i", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "div", 166)(577, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](578, "img", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](579, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](580, "img", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](581, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](582, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](583, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](584, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](585, "div", 172)(586, "div", 64)(587, "div", 40)(588, "div", 86)(589, "div", 173)(590, "div", 45)(591, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](592, "Our Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](593, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](594, "Latest Valuable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](595, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](596, "Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](597, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](598, "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](599, "div", 98)(600, "div", 174)(601, "a", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](602, "See all news");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](603, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](604, "div", 176)(605, "div", 177)(606, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](607, "img", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](608, "div", 68)(609, "ul")(610, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](611, "i", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](612, " 09 April 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](613, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](614, "i", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](615, "a", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](616, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](617, "h3")(618, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](619, "The Home of Technology is in Front of You");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](620, "div", 176)(621, "div", 177)(622, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](623, "img", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](624, "div", 68)(625, "ul")(626, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](627, "i", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](628, "10 July 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](629, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](630, "i", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](631, "a", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](632, "SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](633, "h3")(634, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](635, "SEO Best Practices Mobile Friendliness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](636, "div", 184)(637, "div", 177)(638, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](639, "img", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](640, "div", 68)(641, "ul")(642, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](643, "i", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](644, " 19 June 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](645, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](646, "i", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](647, "a", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](648, "SEO & Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](649, "h3")(650, "a", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](651, "15 SEO Practices Website Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](652, "div", 186)(653, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](654, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](655, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](656, "img", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](657, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](658, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](659, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](660, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](661, "app-footer-style-one");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_navbar_style_one_navbar_style_one_component__WEBPACK_IMPORTED_MODULE_0__.NavbarStyleOneComponent, _common_footer_style_one_footer_style_one_component__WEBPACK_IMPORTED_MODULE_1__.FooterStyleOneComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW8tYWdlbmN5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7564:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/services-details/services-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesDetailsComponent": () => (/* binding */ ServicesDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class ServicesDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesDetailsComponent.ɵfac = function ServicesDetailsComponent_Factory(t) { return new (t || ServicesDetailsComponent)(); };
ServicesDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ServicesDetailsComponent, selectors: [["app-services-details"]], decls: 193, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "services-details-area", "pt-50", "pb-70"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "services-left"], [1, "services-content"], ["src", "assets/img/service/service-details.jpg", "alt", "Images"], [1, "col-lg-6", "col-sm-6"], [1, "services-content-card"], [1, "content-widget-area"], [1, "col-lg-7", "col-md-12"], [1, "content-widget-img"], ["src", "assets/img/service/service-details-img2.png", "alt", "Images"], [1, "col-lg-5", "col-md-12"], [1, "content-widget-text"], [1, "bx", "bx-check"], [1, "services-widget-list"], [1, "active"], [1, "content", "list1"], [1, "content", "list2"], [1, "content", "list3"], [1, "col-lg-4", "col-md-12"], [1, "services-widget-right"], [1, "widget-category"], ["routerLink", "/services-details"], [1, "contact-widget"], [1, "flaticon-telephone"], [1, "content"], ["href", "tel:+564325677896"], [1, "flaticon-email-1"], ["href", "mailto:hello@ribo.com"], [1, "flaticon-planet-earth"], [1, "services-widget-two"], [1, "flaticon-pdf-file"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function ServicesDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Services Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Services Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Content Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15)(35, "div", 20)(36, "div", 21)(37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Real-time Keyword Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 20)(42, "div", 21)(43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Scalable Keyword Growth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 20)(48, "div", 21)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "ROI Obsessed Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 20)(54, "div", 21)(55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Total Keyword Growth Visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 22)(60, "div", 15)(61, "div", 23)(62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 26)(65, "div", 27)(66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "The Entire Solution For Content Marketer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Lorem ipsum dolor sit ametaut odiut perspiciatis unde omnis iste quuntur alquam quaerat rsit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "ul")(71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " The Field of Data Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " SEO is Uniquely Built Around ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Google\u2019s search algorithm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore tus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis onsectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 29)(83, "ul")(84, "li", 30)(85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "75%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 31)(88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "SEO & Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li")(91, "div", 32)(92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Keywords Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "66%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "li")(97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "43%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 33)(100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Google Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "li")(103, "div", 32)(104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Off Page SEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 34)(109, "div", 35)(110, "div", 36)(111, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Other Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "ul")(114, "li")(115, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "AI & ML Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li")(118, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Data Visualization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "li")(121, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Data Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "li")(124, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Content Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "li")(127, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "SEO & Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 38)(130, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Contact Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "ul")(133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 40)(136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Phone: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "span")(139, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "+56432 567 7896");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 40)(144, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "span")(147, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "hello@ribo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 40)(152, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "112/7 New York, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 45)(157, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Brochures");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "ul")(160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 40)(163, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "01:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "span")(166, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "PDF Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 40)(171, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "02:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "span")(174, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Services Details.txt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 47)(177, "div", 48)(178, "div", 49)(179, "div", 50)(180, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](189, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9343:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/services/services.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 130, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "services-widget-area", "pt-50", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "h2-color"], [1, "row", "pt-45"], [1, "col-lg-4", "col-md-6"], [1, "services-card"], ["routerLink", "/services-details"], ["src", "assets/img/service/service-icon1.png", "alt", "Images"], [1, "services-card-shape"], ["src", "assets/img/service/service-shape.png", "alt", "Images"], ["src", "assets/img/service/service-icon2.png", "alt", "Images"], ["src", "assets/img/service/service-icon3.png", "alt", "Images"], ["src", "assets/img/service/service-icon4.png", "alt", "Images"], ["src", "assets/img/service/service-icon5.png", "alt", "Images"], ["src", "assets/img/service/service-icon6.png", "alt", "Images"], [1, "col-lg-12", "col-md-12"], [1, "pagination-area", "text-center"], ["routerLink", "/services", 1, "prev", "page-numbers"], ["aria-current", "page", 1, "page-numbers", "current"], ["routerLink", "/services", 1, "page-numbers"], ["routerLink", "/services", 1, "next", "page-numbers"], [1, "bx", "bx-chevron-left"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "We\u2019re Flexible to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Provide You Best");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "div", 19)(34, "div", 20)(35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h3")(38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 19)(45, "div", 20)(46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h3")(49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Social Media Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 19)(56, "div", 20)(57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h3")(60, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Content Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 19)(67, "div", 20)(68, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h3")(71, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "SEO Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 19)(78, "div", 20)(79, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h3")(82, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 19)(89, "div", 20)(90, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "h3")(93, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "PPC Advertising");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Lorem ipsum dolor sit amet, aut odiut perspiciatis unde omnis iste natus odit aut fugitsed quia consequuntur alquam quaerat voluptatem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 30)(100, "div", 31)(101, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 37)(114, "div", 38)(115, "div", 39)(116, "div", 40)(117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4594:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/sign-in/sign-in.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class SignInComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 81, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "sign-in-area", "pt-50", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "h2-color"], [1, "row", "align-items-center", "pt-45"], [1, "col-lg-5", "col-md-12"], [1, "user-all-img"], ["src", "assets/img/faq-img.png", "alt", "Images"], [1, "col-lg-7", "col-md-12"], [1, "user-all-form"], [1, "contact-form"], ["id", "contactForm"], [1, "row"], [1, "col-lg-12"], [1, "form-group"], [1, "bx", "bx-user"], ["type", "text", "name", "name", "id", "name", "required", "", "data-error", "Please enter your Username or Email", "placeholder", "Username or Email", 1, "form-control"], [1, "col-12"], [1, "bx", "bx-lock-alt"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control"], [1, "col-lg-6", "col-sm-6", "form-condition"], [1, "agree-label"], ["type", "checkbox", "id", "chb1"], ["for", "chb1"], [1, "col-lg-6", "col-sm-6"], ["routerLink", "/", 1, "forget"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "default-btn"], [1, "bx", "bx-plus"], [1, "account-desc"], ["routerLink", "/sign-up"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Sign in to Your Account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "div", 23)(36, "div", 24)(37, "form", 25)(38, "div", 26)(39, "div", 27)(40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 29)(42, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 31)(44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 32)(46, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 34)(48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 38)(53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Forgot my password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 40)(56, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Sign In Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 31)(60, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Not a member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 45)(65, "div", 46)(66, "div", 47)(67, "div", 48)(68, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9314:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/sign-up/sign-up.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class SignUpComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 72, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "sign-in-area", "pt-50", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "h2-color"], [1, "row", "align-items-center", "pt-45"], [1, "col-lg-5", "col-md-12"], [1, "user-all-img"], ["src", "assets/img/faq-img.png", "alt", "Images"], [1, "col-lg-7", "col-md-12"], [1, "user-all-form"], [1, "contact-form"], ["id", "contactForm"], [1, "form-group"], [1, "bx", "bx-user"], ["type", "text", "name", "name", "id", "name", "required", "", "data-error", "Please enter your Username", "placeholder", "Username", 1, "form-control"], [1, "bx", "bx-mail-send"], ["type", "email", "name", "email", "id", "email", "required", "", "data-error", "Please enter email", "placeholder", "Email", 1, "form-control"], [1, "bx", "bx-lock-alt"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control"], [1, "text-center"], ["type", "submit", 1, "default-btn"], [1, "bx", "bx-plus"], [1, "account-desc"], ["routerLink", "/sign-in"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Create an Account!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "div", 23)(36, "div", 24)(37, "form", 25)(38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 27)(40, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 29)(43, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 31)(46, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 33)(48, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 38)(56, "div", 39)(57, "div", 40)(58, "div", 41)(59, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8498:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/team/team.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamComponent": () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);



class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 189, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "team-area-two", "pt-50", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "h2-color2"], [1, "row", "pt-45"], [1, "col-lg-4", "col-md-6"], [1, "team-card", "team-card-mt", "active"], ["src", "assets/img/team/team-img7.jpg", "alt", "Images"], [1, "content"], [1, "social-link"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-youtube"], ["src", "assets/img/team/team-img8.jpg", "alt", "Images"], ["src", "assets/img/team/team-img9.jpg", "alt", "Images"], ["src", "assets/img/team/team-img10.jpg", "alt", "Images"], ["src", "assets/img/team/team-img11.jpg", "alt", "Images"], ["src", "assets/img/team/team-img12.jpg", "alt", "Images"], [1, "team-two-shape"], [1, "shape1"], ["src", "assets/img/shape/shape13.png", "alt", "Images"], [1, "shape2"], ["src", "assets/img/shape/shape11.png", "alt", "Images"], [1, "shape3"], ["src", "assets/img/shape/shape10.png", "alt", "Images"], [1, "shape4"], ["src", "assets/img/shape/shape9.png", "alt", "Images"], [1, "shape5"], ["src", "assets/img/shape/shape12.png", "alt", "Images"], [1, "shape6"], ["src", "assets/img/shape/shape7.png", "alt", "Images"], [1, "shape7"], ["src", "assets/img/shape/shape14.png", "alt", "Images"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Meet Our Data Scientist to Grow Your Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Cristiono Kopper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ul", 23)(40, "li")(41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "li")(44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li")(47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li")(50, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 19)(53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 22)(56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ul", 23)(61, "li")(62, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "li")(65, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li")(68, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li")(71, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 19)(74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 22)(77, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "ul", 23)(82, "li")(83, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li")(86, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li")(89, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li")(92, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 19)(95, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 22)(98, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "ul", 23)(103, "li")(104, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "li")(107, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "li")(110, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "li")(113, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 19)(116, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 22)(119, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "ul", 23)(124, "li")(125, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "li")(128, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "li")(131, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "li")(134, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 19)(137, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 22)(140, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "ul", 23)(145, "li")(146, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "li")(149, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "li")(152, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "li")(155, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 34)(158, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 49)(173, "div", 50)(174, "div", 51)(175, "div", 52)(176, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "app-footer-style-two");
    } }, dependencies: [_common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3823:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/terms-conditions/terms-conditions.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsComponent": () => (/* binding */ TermsConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);



class TermsConditionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermsConditionsComponent.ɵfac = function TermsConditionsComponent_Factory(t) { return new (t || TermsConditionsComponent)(); };
TermsConditionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TermsConditionsComponent, selectors: [["app-terms-conditions"]], decls: 63, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "terms-conditions-area", "pt-50", "pb-70"], [1, "single-content"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function TermsConditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Welcome to Riob Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio quis est suscipit vehicula nec eget arcu. Mauris malesuada libero eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est sed orci cursus efficitur. Sed volutpat sit amet mauris eget posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend diam. Vestibulum diam diam, ultricies id cursus ac, bibendum ac quam.Donec posuere diam eget consequat facilisis. Vestibulum turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla. Quisque tincidunt augue nunc, non pretium nibh consequat vel. Morbi ornare quam neque, nec pharetra magna dapibus quis. Curabitur vehicula ultricies faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Integer mattis magna at nibh semper vulputate. Nunc eu gravida risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum luctus. Pellentesque lectus lorem, laoreet in semper vitae, pellentesque sit amet sapien. Morbi ut nibh a massa suscipit posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim eget turpis nec pulvinar. Vestibulum fermentum lacus sed dignissim mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae finibus dolor. Nam ultrices consequat odio at gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15)(33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Welcome to Product Riob Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio quis est suscipit vehicula nec eget arcu. Mauris malesuada libero eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est sed orci cursus efficitur. Sed volutpat sit amet mauris eget posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend diam. Vestibulum diam diam, ultricies id cursusac, bibendum ac quam.Donec posuere diam eget consequat facilisis. Vestibulum turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla. Quisque tincidunt augue nunc, non pretium nibh consequat vel. Morbi ornare quam neque, nec pharetra magna dapibus quis. Curabitur vehicula ultricies faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Integer mattis magna at nibh semper vulputate. Nunc eu gravida risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum luctus. Pellentesque lectus lorem, laoreet in semper vitae, pellentesque sit amet sapien. Morbi ut nibh a massa suscipit posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim eget turpis necpulvinar. Vestibulum fermentum lacus sed dignissim mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae finibus dolor. Nam ultrices consequat odio at gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 15)(40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Welcome to Services Riob Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus arcu. Sed vitae porttitor lectus. Aenean ac odio quis est suscipit vehicula nec eget arcu. Mauris malesuada libero eu ex pharetra, ac aliquam justo vestibulum. Fusce vulputate est sed orci cursus efficitur. Sed volutpat sit amet mauris eget posuere. Donec a mi eu dolor tincidunt pulvinar quis eleifend diam. Vestibulum diam diam, ultricies id cursus ac, bibendum ac quam.Donec posuere diam eget consequat facilisis. Vestibulum turpis mauris, hendrerit ut risus euismod, maximus iaculis nulla. Quisque tincidunt augue nunc, non pretium nibh consequat vel. Morbi ornare quam neque, nec pharetra magna dapibus quis. Curabitur vehicula ultricies faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Integer mattis magna at nibh semper vulputate. Nunc eu gravida risus, at lobortis ipsum. Suspendisse tempus metus vitae interdum luctus. Pellentesque lectus lorem, laoreet in semper vitae, pellentesque sit amet sapien. Morbi ut nibh a massa suscipit posuere. Nam venenatis eget justo id pulvinar. Quisque dignissim eget turpis nec pulvinar. Vestibulum fermentum lacus sed dignissim mattis. Aenean porttitor vitae lacus nec pellentesque. Nulla sodales vehicula scelerisque. Vestibulum sed auctor arcu, vitae finibus dolor. Nam ultrices consequat odio at gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16)(47, "div", 17)(48, "div", 18)(49, "div", 19)(50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "app-footer-style-two");
    } }, dependencies: [_common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7039:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/testimonials/testimonials.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/footer-style-two/footer-style-two.component */ 3511);
/* harmony import */ var _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/navbar-style-four/navbar-style-four.component */ 4418);




class TestimonialsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(); };
TestimonialsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-testimonials"]], decls: 106, vars: 0, consts: [[1, "inner-banner"], [1, "container"], [1, "inner-title", "text-center"], ["href", "index.html"], [1, "bx", "bx-chevron-right"], [1, "inner-banner-shape"], [1, "shape-one"], ["src", "assets/img/inner-banner/banner-shape1.png", "alt", "Images"], [1, "shape-two"], ["src", "assets/img/inner-banner/banner-shape2.png", "alt", "Images"], [1, "shape-three"], ["src", "assets/img/inner-banner/banner-shape3.png", "alt", "Images"], [1, "inner-banner-dots"], ["src", "assets/img/shape/dots-shape.png", "alt", "Images"], [1, "testimonials-widget-area", "pt-50", "pb-70"], [1, "section-title", "text-center"], [1, "sp-before", "sp-after"], [1, "h2-color2"], [1, "row", "pt-45"], [1, "col-lg-6"], [1, "testimonial-widget-item"], [1, "content"], ["src", "assets/img/testimonial/testimonial-img1.png", "alt", "Images"], [1, "content-title"], ["src", "assets/img/testimonial/testimonial-img2.png", "alt", "Images"], ["src", "assets/img/testimonial/testimonial-img3.png", "alt", "Images"], ["src", "assets/img/testimonial/testimonial-img4.png", "alt", "Images"], [1, "col-lg-12", "col-md-12"], [1, "pagination-area", "text-center"], ["routerLink", "/testimonials", 1, "prev", "page-numbers"], [1, "bx", "bx-chevron-left"], ["aria-current", "page", 1, "page-numbers", "current"], ["routerLink", "/testimonials", 1, "page-numbers"], ["routerLink", "/testimonials", 1, "next", "page-numbers"], [1, "brand-logo-area", "pt-100"], [1, "container-fluid"], [1, "container-max"], [1, "brand-logo-slider", "owl-carousel", "owl-theme"], [1, "brand-logo-item"], ["src", "assets/img/brand/brand-logo1.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo2.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo3.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo4.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo5.png", "alt", "Images"], ["src", "assets/img/brand/brand-logo6.png", "alt", "Images"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-style-four");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 1)(25, "div", 15)(26, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Our Clients Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "I chose Zinka because of their value And incredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 23)(38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "David McLean");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "CEO & Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 19)(43, "div", 20)(44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "I chose Zinka because of their value And incredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 23)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Jermin Jekson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Marketing Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19)(54, "div", 20)(55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "I chose Zinka because of their value And incredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 23)(60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Julfiker Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "CEO At Ostino");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 19)(65, "div", 20)(66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "I chose Zinka because of their value And incredible superior customer Service they really awesome treated me like family.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 23)(71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Hobler Jeain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 27)(76, "div", 28)(77, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 34)(90, "div", 35)(91, "div", 36)(92, "div", 37)(93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "app-footer-style-two");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _common_footer_style_two_footer_style_two_component__WEBPACK_IMPORTED_MODULE_0__.FooterStyleTwoComponent, _common_navbar_style_four_navbar_style_four_component__WEBPACK_IMPORTED_MODULE_1__.NavbarStyleFourComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map