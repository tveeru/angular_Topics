import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {


count:number = 1;

increment(){
  this.count++;
}
decrement(){
  this.count--;

}

}

