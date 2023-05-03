import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{ counter }}</h3>
    <button (click)="increseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increseBy(-1)">-1</button>`,
})
export class CounterComponent {
  public counter: number = 100;

  increseBy(value: number) {
    this.counter += 1;
  }
  reset() {
    this.counter = 100;
  }
}
