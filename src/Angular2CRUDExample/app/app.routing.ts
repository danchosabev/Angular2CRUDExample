import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/cars/car-list.component';

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
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);