import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { HeroListComponent } from './components/heroes/hero-list.component';
import { HeroDetailsComponent } from './components/heroes/hero-details.component';
import { HttpDemoComponent } from './components/http-demo/http-demo.component';

const appRoutes: Routes = [
	{
		path: '',
		//redirectTo: '/dashboard',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'cars',
		component: CarListComponent
	},
	{
		path: 'heroes',
		component: HeroListComponent
	},
	{
		path: 'hero-detail/:id',
		component: HeroDetailsComponent
	},
	{
		path: 'http',
		component: HttpDemoComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);