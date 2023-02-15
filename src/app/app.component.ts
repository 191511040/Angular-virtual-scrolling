import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: any = [];
  viewportHeight = 500;
  title = 'angularvirtualscrolling';
  constructor() {
    // Generate a large array of items
    for (let i = 0; i < 100000; i++) {
      this.items.push(`Item ${i}`);
    }
  }
}
