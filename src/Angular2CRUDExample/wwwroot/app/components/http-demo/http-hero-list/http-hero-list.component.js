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
var demo_hero_service_1 = require('../shared/demo-hero.service');
var HttpHeroListComponent = (function () {
    function HttpHeroListComponent(heroService) {
        this.heroService = heroService;
        this.mode = 'Observable';
    }
    HttpHeroListComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    HttpHeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HttpHeroListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'http-hero-list',
            templateUrl: 'http-hero-list.component.html'
        }), 
        __metadata('design:paramtypes', [demo_hero_service_1.DemoHeroService])
    ], HttpHeroListComponent);
    return HttpHeroListComponent;
}());
exports.HttpHeroListComponent = HttpHeroListComponent;

//# sourceMappingURL=http-hero-list.component.js.map
