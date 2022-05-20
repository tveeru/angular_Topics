import { Component} from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

    const observable = new Observable(subscriber => {
      subscriber.next(1),
      subscriber.next(2),
      subscriber.next(3),
      setTimeout(() => {
        subscriber.next(4)


      }, 3000);

    }).subscribe((x) => console.log(x));


  }

}
