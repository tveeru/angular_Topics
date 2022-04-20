import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



slected:boolean = false;

items= [
  { name:'Angular', active:true},
  { name:'React', active:true},
  { name:'Typescript', active:true},
  { name:'FoxPro', active:false},
  { name:'Javascript', active:true},
  { name:'ASP.NET Core', active:true},
  { name:'DBase', active:false}
]


}
