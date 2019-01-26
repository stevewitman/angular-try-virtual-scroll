import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  numbers: number[] = [];

  constructor() {
    for (let i = 0; i < 10000; i++) {
      this.numbers.push(i);
    }
  }

}
