import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('pData') ProductData!:Product;
  @Output() updateCartEvent = new EventEmitter<any>();
  isAddedToCart:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  incQtyPrice(){
    this.ProductData.qty++;
  }

  decQtyPrice(){
    if(this.ProductData.qty>1){
      this.ProductData.qty--;
    }

  }

  updateCart(){
    this.isAddedToCart = !this.isAddedToCart;
    let payload = {
      addedToCart: this.isAddedToCart,
      product: this.ProductData
    }
    this.updateCartEvent.emit(payload);
  }
}
