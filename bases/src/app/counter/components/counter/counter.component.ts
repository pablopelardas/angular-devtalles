import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">Increment</button>
    <button (click)="increaseBy(-1)">Decrement</button>
    <button (click)="reset()">Reset</button>
  `
})

export class AppCounter {
  private defaultCounter: number = 10;
  public counter: number = this.defaultCounter;

  public increaseBy(value: number): void {
    this.counter += value;
  }
  public reset(): void {
    this.counter = this.defaultCounter;
  }
}
