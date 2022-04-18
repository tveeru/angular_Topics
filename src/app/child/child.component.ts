import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()inpval: string[] = [];

  @Output() foodList:EventEmitter<string>  = new EventEmitter<string>();


  addToFood(data:string){
    this.foodList.emit(data);

  }

}

