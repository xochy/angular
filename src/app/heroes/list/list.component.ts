import { Component } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent {
    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
    deletedHeroes: string[] = [];

    cleanHeroList(): void {
        const deletedHero = this.heroes.shift() || '';
        if (deletedHero != '') {
            this.deletedHeroes.push(deletedHero);
        }
    }

    canShowDeletedHeroesList(): boolean {
        return this.deletedHeroes.length > 0
    }
}
