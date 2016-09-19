"use strict";
var router_1 = require('@angular/router');
var app_home_component_1 = require('./app-home.component');
var app_car_list_component_1 = require('./app-car-list.component');
var appRoutes = [
    {
        path: '',
        //redirectTo: '/dashboard',
        pathMatch: 'full',
        component: app_home_component_1.HomeComponent
    },
    {
        path: 'cars',
        component: app_car_list_component_1.CarListComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map