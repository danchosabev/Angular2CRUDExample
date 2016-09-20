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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// PrimeNG
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var app_component_1 = require('./components/app.component');
var home_component_1 = require('./components/home/home.component');
var helper_service_1 = require('./components/helpers/helper.service');
// Cars
var car_list_component_1 = require('./components/cars/car-list/car-list.component');
var car_service_1 = require('./components/cars/shared/car.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                primeng_1.InputTextModule,
                primeng_1.DataTableModule,
                primeng_1.DataListModule,
                primeng_1.DataGridModule,
                primeng_2.PanelModule,
                primeng_2.TooltipModule,
                primeng_1.SharedModule,
                primeng_1.PaginatorModule,
                primeng_2.DialogModule,
                primeng_2.ToolbarModule,
                primeng_2.ButtonModule,
                primeng_2.DropdownModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                car_list_component_1.CarListComponent
            ],
            providers: [
                helper_service_1.HelperService,
                car_service_1.CarService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
