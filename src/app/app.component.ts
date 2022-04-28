import { Component, ViewChild, ElementRef, OnInit, AfterViewInit,ChangeDetectorRef  } from '@angular/core';
import { Addition } from './addition';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  msg:string='';

  @ViewChild(ChildComponent,{static: true, read: ChildComponent}) child?: ChildComponent;
  @ViewChild('para',{static: false,read:ElementRef }) paragraph:ElementRef; //set True -- ngOnInIt will work
  @ViewChild(Child1Component, {static: true, read: Child1Component}) Child1Component: Child1Component;
  @ViewChild("myCalendar", {static: true, read: ElementRef}) myCalendar: ElementRef;

  constructor(private dechnges:ChangeDetectorRef){

  }
  Increment(){
    this.child.increment();

  }
  decrement(){
    if(this.child.count > 0){
      this.child.decrement();
    }

  }
  ngOnInit(){
  // this.paragraph.nativeElement.innerHTML = "say Hi";
  }

  ngAfterViewInit(){

    /* Use two cases for loading views - setTimeout and ChangeDetectorRef Class*/
    //  setTimeout(() => {
    //    this.Child1Component.userName = "veer";
    //  }, 0);

    setInterval(()=>{
      this.Child1Component.getMessage();
    },1000)

    this.paragraph.nativeElement.innerHTML = "say Hi";

    this.Child1Component.userName = "veer";
    this.myCalendar.nativeElement.querySelector(".message").style.backgroundColor = "orange";
    this.dechnges.detectChanges();
    console.log(this.child.count);

  }
}
