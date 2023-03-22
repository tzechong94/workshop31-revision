import { Component, Input } from '@angular/core';
import { Fruit } from 'src/app/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  fruits?: Fruit[]

  // cartList?: Fruit[]

  
}
