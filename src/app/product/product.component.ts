import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() qty?:number;
  @Output() qtyChange: EventEmitter<number> = new EventEmitter<number>();
  price?:number = 15;
  constructor() { }

  ngOnInit() {
  }

  incQtyPrice(){
    this.qty++;
    this.updateQty();
  }

  decQtyPrice(){
    this.qty--;
    this.updateQty();
  }

  updateQty(){
    this.qtyChange.emit(this.qty);
  }
}
