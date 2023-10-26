import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day-2';
  product = {
    id: 1,
    name: 'Iphone 12',
    price: 1000,
    desc: 'New product from Apple'
  }
  increasePrice() {
    this.product = {
      ...this.product,
      price: this.product.price + 1
    };
    // this.product.price++;
  }
}
