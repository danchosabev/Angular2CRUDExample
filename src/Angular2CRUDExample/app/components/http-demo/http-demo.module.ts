import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpDemoComponent } from './http-demo.component';
import { HttpHeroListComponent } from './http-hero-list/http-hero-list.component';
import { DemoHeroService } from './shared/demo-hero.service';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { HeroInMemoryDataService }  from '../heroes/hero-in-memory-data.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		InMemoryWebApiModule.forRoot(HeroInMemoryDataService),
		RouterModule.forChild([{
			path: '',
			component: HttpDemoComponent
		}])
	],
	exports: [
		HttpDemoComponent
	],
	declarations: [
		HttpDemoComponent,
		HttpHeroListComponent
	],
	providers: [
		DemoHeroService
	]
})
export default class HttpDemoModule { }