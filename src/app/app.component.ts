import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  myObservable = new Observable((obs) => {
    console.log("Observable starts working...");

  setTimeout(() => {
    obs.next("1");
  }, 1000);
  setTimeout(() => {
    obs.next("2");
  }, 2000);
  setTimeout(() => {
    obs.next("3");

  }, 3000);
  })

  ngOnInit(): void {
    this.myObservable.subscribe(x => console.log(x));
  }

}
