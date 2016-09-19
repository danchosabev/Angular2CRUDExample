import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app-home.component';
import { CarListComponent } from './app-car-list.component';

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