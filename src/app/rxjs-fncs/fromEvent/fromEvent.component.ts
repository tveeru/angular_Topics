import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-fromEvent',
  templateUrl: './fromEvent.component.html',
  styleUrls: ['./fromEvent.component.css']
})
export class FromEventComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {

    const triggerbutn = document.querySelector("button#triggerbtn");

    const sub1 = fromEvent<MouseEvent>(triggerbutn,'click');
    const sub2 = fromEvent<MouseEvent>(triggerbutn,'click');

    sub1.subscribe(
      event => console.log('subscriber 1',':', event.type,':',event.x,event.y)
    )

    sub2.subscribe(
      event => console.log('subscriber 2',':',event.type,':',event.x,event.y)
    )

  }


  triggerC(event:MouseEvent){
  //   console.log(event.type,':' ,event.x, "---", event.y);
   }

}
