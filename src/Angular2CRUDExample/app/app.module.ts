import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// PrimeNG
import {InputTextModule, DataTableModule, SharedModule, DataListModule, PaginatorModule, DataGridModule} from 'primeng/primeng';
import {PanelModule, DialogModule, TooltipModule, ToolbarModule, ButtonModule, DropdownModule} from 'primeng/primeng';

import { AppComponent }   from './app.component';
import { HomeComponent } from './app-home.component';
import { HelperService } from './helper.service';

// Cars
import { CarListComponent } from './app-car-list.component';
import { CarService } from './car.service';

//import { routing } from './app.routing';

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
		//routing
	],
	declarations: [
		AppComponent,		
		HomeComponent,		
		CarListComponent		
	],
	providers: [
		HelperService,
		CarService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
