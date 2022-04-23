import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-stdirevtive',
  templateUrl: './template-stdirevtive.component.html',
  styles: [
  ]
})
export class TemplateStdirevtiveComponent implements OnInit {

  constructor() { }
  isLoggedIn:boolean = true;
  names = ['veer','tulsi','akki','chinnu'];
  food:string = "mutton";
  ngOnInit(): void {
  }

}
