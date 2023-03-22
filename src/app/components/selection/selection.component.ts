import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Fruit, fruitList } from 'src/app/models';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {

  @Input()
  fruits!: Fruit[]

  // ?: is optional operator, means members can be null or undefined
  // !: is non-null assertion operator. Members cannot be null or undefined. 

  @Output()
  fruitToCart = new Subject<Fruit[]>

  fruitsList: Fruit[] = []

  addToCart(fruit: Fruit) {
    for (let i = 0; i < this.fruitsList.length; i++) {
      if (this.fruitsList[i].name === fruit.name) {
        this.fruitsList[i].quantity += 1
        console.log(this.fruitsList)
        this.fruitToCart.next(this.fruitsList)
        return this.fruitsList
      }
    }
    this.fruitsList.push(fruit)
    console.log(this.fruitsList)
    this.fruitToCart.next(this.fruitsList)
    return this.fruitsList
  }
}
