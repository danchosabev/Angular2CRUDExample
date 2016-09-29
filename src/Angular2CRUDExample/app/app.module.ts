import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

// PrimeNG
import {InputTextModule, DataTableModule, SharedModule, DataListModule, PaginatorModule, DataGridModule} from 'primeng/primeng';
import {PanelModule, DialogModule, TooltipModule, ToolbarModule, ButtonModule, DropdownModule} from 'primeng/primeng';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { HelperService } from './components/helpers/helper.service';

// Cars
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { CarService } from './components/cars/shared/car.service';

// Heroes
import { HeroListComponent } from './components/heroes/hero-list.component';
import { HeroDetailsComponent } from './components/heroes/hero-details.component';
import { HeroService } from './components/heroes/hero.service';
import { HeroInMemoryDataService }  from './components/heroes/hero-in-memory-data.service';
import { HeroSearchComponent } from './components/heroes/hero-search.component';

// Http
import { HttpDemoModule } from './components/http-demo/http-demo.module';

import './components/shared/rxjs-extensions';

import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		InputTextModule,
		DataTableModule,
		DataListModule,
		DataGridModule,
		PanelModule,
		TooltipModule,
		SharedModule,
		PaginatorModule,
		DialogModule,
		ToolbarModule,
		ButtonModule,
		DropdownModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		InMemoryWebApiModule.forRoot(HeroInMemoryDataService),
		routing,
		HttpDemoModule
	],
	declarations: [
		AppComponent,		
		HomeComponent,		
		CarListComponent,
		HeroListComponent,
		HeroDetailsComponent,
		HeroSearchComponent		
	],
	providers: [
		HelperService,
		CarService,
		HeroService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
