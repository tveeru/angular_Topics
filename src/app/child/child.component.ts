import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()inpval: string[] = [];

  @Output() foodIndex:EventEmitter<number>  = new EventEmitter<number>();


  delItem(i:number) {
this.foodIndex.emit(i);
}


}

