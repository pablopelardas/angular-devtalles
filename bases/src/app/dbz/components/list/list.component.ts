import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'dbz-list',
  styleUrl: './list.component.css',
  templateUrl: './list.component.html',
})
export class DbzListComponent {
  @Input()
  public characterList: Character[] = []

  @Output()
  public onCharacterDeleted: EventEmitter<string> = new EventEmitter();

}
