import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allProducts: any = [
    {
      id:1,name:'Laptop', price:30000
    },
    {
      id:2,name:'mouse', price:300
    },
    {
      id:3,name:'Keyboard', price:400
    }
  ]

  TopsellingProducts: any = [
    {
      id:1,name:'Samsung AC', price:300000
    },
    {
      id:2,name:'Iphone15', price:30000
    },
    {
      id:3,name:'LG Refrigilator', price:40000
    }
  ]


  showId($event:any){
    console.log($event);

  }
}
