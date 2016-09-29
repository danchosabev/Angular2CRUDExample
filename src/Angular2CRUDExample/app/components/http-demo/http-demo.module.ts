import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpDemoComponent } from './http-demo.component';
import { HttpHeroListComponent } from './http-hero-list/http-hero-list.component';
import { HeroService } from './shared/hero.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule
	],
	exports: [
		HttpDemoComponent
	],
	declarations: [
		HttpDemoComponent,
		HttpHeroListComponent
	],
	providers: [
		HeroService
	]
})
export class HttpDemoModule { }