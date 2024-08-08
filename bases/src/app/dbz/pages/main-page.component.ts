import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces';




@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(
    private dbzService: DbzService
  ) {}

  get characters() {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: Character) {
    this.dbzService.onNewCharacter(character);
  }

  deleteCharacterById(id: string) {
    this.dbzService.deleteCharacterById(id);
  }
}
