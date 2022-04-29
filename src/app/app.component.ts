import { Component, ViewChild, ElementRef, OnInit, AfterViewInit,ChangeDetectorRef, ViewChildren, QueryList  } from '@angular/core';
import { Addition } from './addition';
import { Child1Component } from './child1/child1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  msg:string='';

  //@ViewChild(Child1Component, {static: true, read: Child1Component}) Child1Component: Child1Component;
  //@ViewChild("myCalendar", {static: true, read: ElementRef}) myCalendar: ElementRef;
  //@ViewChildren(Child1Component, {read: ElementRef}) Child1Component: QueryList <ElementRef>;
  @ViewChildren(Child1Component, {read: Child1Component}) Child1Component: QueryList <Child1Component>;
  @ViewChildren('msg', {read: ElementRef}) message: QueryList <ElementRef>;

  constructor(private dechnges:ChangeDetectorRef){

  }


  ngOnInit(){
  }

  ngAfterViewInit(){
    this.Child1Component.forEach((ele) => {
      ele.userName = "veer";
      setInterval(()=>{
          ele.getMessage();
         },1000)


    })

    this.message.forEach((e) => {
      e.nativeElement.querySelector(".message").style.backgroundColor = "orange";

    });
    // setInterval(()=>{
    //   this.Child1Component.getMessage();
    // },1000)


    this.dechnges.detectChanges();

  }
}
