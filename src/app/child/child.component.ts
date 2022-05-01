import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit{

  @ContentChild('title') cardTitle!: ElementRef;

  ngOnInit(): void {
  }

ngAfterContentInit(){

  this.cardTitle.nativeElement.style.backgroundColor = "orange";



}
chngTitleColor(){
   this.cardTitle.nativeElement.style.backgroundColor = "blue";
   this.cardTitle.nativeElement.style.color="white";

  //this.cardTitle.nativeElement.classList.add('chngeTitle');
}
}


