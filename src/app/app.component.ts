import { Component } from '@angular/core';
import { observable, Observable, Subscriber, UnsubscriptionError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    const observable = new Observable(subscriber => {
      subscriber.next("veeru"),
        setTimeout(() => {
          subscriber.next("thonda")
        }, 1000);
      setTimeout(() => {
        subscriber.next(3)
      }, 2000);
      setTimeout(() => {
        subscriber.next(4)
      }, 3000);

    })

    //console.log("subscription 1 starts:")
    //observable.subscribe(value => console.log("subscription 1 starts", value));


    setTimeout(() => {
      //console.log("subscription 2 starts:")
      //observable.subscribe(value => console.log("subscription 2 starts", value));

    }, 5000);


    /* Example 2  */

    const observable$ = new Observable((subscriber) => {
      subscriber.next("mangoes");
      setTimeout(() => {
        subscriber.next('oranges')
      }, 1000)
      setTimeout(() => {
        subscriber.next('Grapes');
      }, 2000);

      setTimeout(() => {
        subscriber.error(new Error("Http error"));
      }, 3000);

      /*Tear down logic  - used to cancel http requests and prevent memory leaks*/

      return () => {
        console.log("Tear down logic working here....");
      }

    })


    // observable$.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    //   error: (err) => console.log(err.message),
    //   complete: () => console.log("Completed the emited values..")
    // })




  }
}
