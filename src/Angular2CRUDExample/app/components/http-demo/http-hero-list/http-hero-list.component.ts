import { Component, OnInit } from '@angular/core';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
	moduleId: module.id,
	selector: 'http-hero-list',
	templateUrl: 'http-hero-list.component.html'
})

export class HttpHeroListComponent implements OnInit {
	errorMessage: string;
	heroes: Hero[];
	mode = 'Observable';

	constructor(private heroService: HeroService) { }

	ngOnInit() { this.getHeroes(); }

	getHeroes() {
		this.heroService.getHeroes()
			.subscribe(
			heroes => this.heroes = heroes,
			error => this.errorMessage = <any>error);
	}

	//addHero(name: string) {
	//	if (!name) { return; }
	//	this.heroService.addHero(name)
	//		.subscribe(
	//		hero => this.heroes.push(hero),
	//		error => this.errorMessage = <any>error);
	//}
}