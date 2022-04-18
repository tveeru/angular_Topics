import { Component,ViewChild, ElementRef } from '@angular/core';
import { Addition } from './addition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:string[]=[];
  foodItemsList:string[]=[];


  // addHero($event:any){
  //   console.log($event.target.value);
  //   const value = $event.target.value;
  //   this.items.push(value);

  // }

  addHero(data:any){
    console.log(data);
    this.items.push(data);
  }

  getFood(food:any){
    this.foodItemsList.push(food);

  }
}
