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
// Add the RxJS Observable operators we need in this app.
//import './rxjs-operators';
var HttpDemoComponent = (function () {
    function HttpDemoComponent() {
    }
    HttpDemoComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\t\n\t<http-hero-list></http-hero-list>"
        }), 
        __metadata('design:paramtypes', [])
    ], HttpDemoComponent);
    return HttpDemoComponent;
}());
exports.HttpDemoComponent = HttpDemoComponent;

//# sourceMappingURL=http-demo.component.js.map
