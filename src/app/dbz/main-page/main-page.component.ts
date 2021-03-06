import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    characters: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Krillin',
            power: 700
        },
        {
            name: 'Vegeta',
            power: 8500
        }
    ];

    newCharacter: Character = {
        name: '',
        power: 0
    };

    add() {
        if (this.newCharacter.name.trim().length === 0) {
            return;
        }
        if (this.newCharacter.power <= 0) {
            return;
        }

        const characterToAdd: Character =  {
            name: this.newCharacter.name,
            power: this.newCharacter.power,
        };

        this.characters.push(characterToAdd);

        this.newCharacter.name = '';
        this.newCharacter.power = 0;
    }
}
