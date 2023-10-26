import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products?: IProduct[];
  constructor() {
    
  }
  ngOnInit(): void {
    this.products = this.getProducts();
  }
  getProducts(): IProduct[] {
    return [
      {
        id: 1,
        name: 'Samsung S5',
        price: 1000,
        inStock: true,
        color: 'white',
        agency: 'Samsung'
      },
      {
        id: 2,
        name: 'Samsung S6',
        price: 2000,
        inStock: false,
        color: 'black',
        agency: 'Samsung'
      },
      {
        id: 3,
        name: 'Samsung S7',
        price: 3000,
        inStock: true,
        color: 'white',
        agency: 'Samsung'
      },
      {
        id: 4,
        name: 'Samsung S8',
        price: 4000,
        inStock: false,
        color: 'black',
        agency: 'Samsung'
      },
      {
        id: 5,
        name: 'Samsung S9',
        price: 5000,
        inStock: true,
        color: 'white',
        agency: 'Samsung'
      }
    ]
  }

}
