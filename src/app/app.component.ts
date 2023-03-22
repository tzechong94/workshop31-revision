import { Component } from '@angular/core';
import { Fruit, fruitList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop31-revision';

  fruits: Fruit[] = fruitList;

  fruitsToCart: Fruit[] = []

  cartData(fruits: Fruit[]) {
    this.fruitsToCart = fruits
  }
}
