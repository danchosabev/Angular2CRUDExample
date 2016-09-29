"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var car_list_component_1 = require('./components/cars/car-list/car-list.component');
var hero_list_component_1 = require('./components/heroes/hero-list.component');
var hero_details_component_1 = require('./components/heroes/hero-details.component');
var http_demo_component_1 = require('./components/http-demo/http-demo.component');
var appRoutes = [
    {
        path: '',
        //redirectTo: '/dashboard',
        pathMatch: 'full',
        component: home_component_1.HomeComponent
    },
    {
        path: 'cars',
        component: car_list_component_1.CarListComponent
    },
    {
        path: 'heroes',
        component: hero_list_component_1.HeroListComponent
    },
    {
        path: 'hero-detail/:id',
        component: hero_details_component_1.HeroDetailsComponent
    },
    {
        path: 'http',
        component: http_demo_component_1.HttpDemoComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
