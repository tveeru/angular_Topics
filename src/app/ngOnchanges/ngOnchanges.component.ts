import { Component, OnInit, Input,OnChanges, SimpleChange,
  SimpleChanges, Output, EventEmitter, DoCheck } from '@angular/core';
import { Orders } from '../orders';

@Component({
  selector: 'app-ngOnchanges',
  templateUrl: './ngOnchanges.component.html',
  styleUrls: ['./ngOnchanges.component.css']
})
export class NgOnchangesComponent implements OnInit, OnChanges,DoCheck {
  @Input()inpname!:string;
  @Input()inpmsg!:string;
  @Input()inpcode!:number;
  @Input()orderDetails: Orders;
  @Output() salv = new EventEmitter();
  doCheckCount:number = 0;
  changeLog:string[] = [];
  oldOrder: Orders = new Orders();


  constructor(){
    console.log("Child Constructor is Called!!!");
  }

  ngOnInit(): void {
    this.oldOrder = Object.assign({},this.orderDetails);
    console.log(this.oldOrder);


  }
  ngOnChanges(changes: SimpleChanges){
    console.log("child ng on changes called !!!");
    for (const propName in changes) {
      const change = changes[propName];
      console.log(change);
    }
  }

  updateSal(sal:any){
    this.salv.emit(sal);
  }
ngDoCheck(): void {
    console.log("Docheck is triggered!");
    this.doCheckCount++;
    if(this.oldOrder.id !== this.orderDetails.id || this.oldOrder.name !== this.orderDetails.name || this.oldOrder.ordertype !== this.orderDetails.ordertype){
      const to = JSON.stringify(this.oldOrder);
     console.log(this.oldOrder);
      const from = JSON.stringify(this.orderDetails);
      console.log(from);

      const changeLog = `Docheck order: changed from ${from} to ${to}`;
      this.changeLog.push(changeLog);
      console.log(this.changeLog);
      this.oldOrder = Object.assign({}, this.orderDetails);
      console.log(this.orderDetails);
    }
}
}
