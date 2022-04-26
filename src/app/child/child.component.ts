import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() allP:any;
  @Input() trend: any;
  @Output() pid = new EventEmitter();


  passData(id:any){
    this.pid.emit(id);
  }

  ngOnInit() {
  }

}
