import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../service/candeactivate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, IDeactivateComponent {
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  checkExit(){
    if(this.email || this.password){
     return confirm("Really want to discard the changes?");
    }else{
      return true;
    }
  }
}
