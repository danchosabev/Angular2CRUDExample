import { Component }         from '@angular/core';

// Add the RxJS Observable operators we need in this app.
//import './rxjs-operators';

@Component({
	selector: 'my-app',
	template: `	
	<http-hero-list></http-hero-list>`
	//<hero-list-promise></hero-list-promise>
	//<my-wiki></my-wiki>
	//<my-wiki-smart></my-wiki-smart>
 // `
})
export class HttpDemoComponent { }