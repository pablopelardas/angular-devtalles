import { Injectable } from '@angular/core';
import { Character } from '../interfaces';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters : Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 7500
    }
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      ...character,
      id: uuid()
    };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
