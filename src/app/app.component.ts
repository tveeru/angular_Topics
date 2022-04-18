import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[] = [
    {
      name: "Laptop", qty:5, price: 4200
    },
    {
      name: "Keyboard", qty:15, price: 2400
    },
    {
      name: "iphone", qty:5, price: 12400
    },
    {
      name: "Samsung Max3", qty:25, price: 20400
    },
    {
      name: "mouse", qty:5, price: 2400
    },
  ]
  cartBucket:Product[]=[];
  updateEvnt(payload:any){
    if(payload.addedToCart){
      this.cartBucket.push(payload.product);
    }else{
      console.log(payload.product);
      this.cartBucket = this.cartBucket.filter(ele => ele != payload.product);

    }
  }
  totalCartAmount(){
    let total:number = 0;
    this.cartBucket.forEach((ele) => {
      total = total + ele.qty * ele.price
    });
    return total;
  }
}
