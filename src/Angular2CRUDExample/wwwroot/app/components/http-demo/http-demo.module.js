"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var http_demo_component_1 = require('./http-demo.component');
var http_hero_list_component_1 = require('./http-hero-list/http-hero-list.component');
var demo_hero_service_1 = require('./shared/demo-hero.service');
var HttpDemoModule = (function () {
    function HttpDemoModule() {
    }
    HttpDemoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forChild([{
                        path: '',
                        component: http_demo_component_1.HttpDemoComponent
                    }])],
            exports: [
                http_demo_component_1.HttpDemoComponent
            ],
            declarations: [
                http_demo_component_1.HttpDemoComponent,
                http_hero_list_component_1.HttpHeroListComponent
            ],
            providers: [
                demo_hero_service_1.DemoHeroService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HttpDemoModule);
    return HttpDemoModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HttpDemoModule;

//# sourceMappingURL=http-demo.module.js.map
