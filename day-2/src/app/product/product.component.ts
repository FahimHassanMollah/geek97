import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: any;
  constructor() {
    console.log('constructor of product componenet');
    
  }
  ngOnInit(): void {
    console.log('ng-on-init of product componenet');

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on change  of product componenet');

    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
}
