import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 36;
  changeName(value: string): void {
    this.name = value;
  }
  changeAge(value: number): void {
    //para cuando aun no se implementa el metodo se pone / /TODO: o un trow

    //throw 'metodo no implementado';

    this.age = value;
  }

  get capitalizadName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name}- ${this.age}`;
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age = 36;
  }
}
