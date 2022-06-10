import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teardown-clean-observable',
  templateUrl: './teardown-clean-observable.component.html',
  styleUrls: ['./teardown-clean-observable.component.css']
})
export class TeardownCleanObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const observable$ = new Observable(subscriber => {
    let count = 0;

      let counterInteral = setInterval(()=>{
        console.log("values:", count);
        subscriber.next(count++);
      },1000)


      return () =>{
        clearInterval(counterInteral);
      }
    })

   const subscription1 =  observable$.subscribe(values => console.log(values));

   setTimeout(() => {
    subscription1.unsubscribe();
   }, 5000);
  }
}
