import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-app-hero-list',
	templateUrl: 'hero-list.component.html',
	styleUrls: ['hero-list.component.css']
})

export class HeroListComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private router: Router, private heroService: HeroService) { }

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes);
	}	

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		this.router.navigate(['/hero-detail', this.selectedHero.id]);
	}
}

