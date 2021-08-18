import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    name: string = 'Spiderman';
    age: number = 30;

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.age}`;
    }

    changeName(): void {
        this.name = 'Ironman';
    }

    changeAge(): void {
        this.age = 40;
    }
}
