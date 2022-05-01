import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  constructor(){
   //1 - clicking method
    this.name = "veer";

   // 2 - Timmer Method
   setTimeout(() => {
    this.name = "chinnu";
   }, 1000);
  }

  changeName(){
    this.name = "thonda";
  }
}
