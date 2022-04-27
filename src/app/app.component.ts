import { Component, ViewChild, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from './customer';
import { Orders } from './orders';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  message: string = '';
  customer: Customer = new Customer();
  order: Orders = new Orders();

  name:string= '';
  code:number=0;
  order_id:number;
  order_name: string;
  order_type: string;


  constructor(){
  //  console.log("Parent Constructor is Called!!!");
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log("Parent onchanges called!!!");
  }

  ngOnInit(): void {
   //   console.log("Parent OnInIt called!!!");
  }
  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
    this.customer.message = this.message;
  }
  updSal($event:any){
    console.log($event);

  }

  updateOrdes(){
    this.order.id = this.order_id;
    this.order.name = this.order_name;
    this.order.ordertype = this.order_type;

  }
}
