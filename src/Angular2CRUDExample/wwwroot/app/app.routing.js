"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var car_list_component_1 = require('./components/cars/car-list.component');
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
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=app.routing.js.map
