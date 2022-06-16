import { Component, OnInit } from '@angular/core';
import { Observable,of,from, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor( private _http: HttpClient) { }

  ngOnInit() {
    of("veer","thonda","chinnu").subscribe({
      next: (values) => console.log(values)
    })

    /* From observable  - array */

    from(['chinnu','akki','tulsi','varshan']).subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("completed"),

    })
    /* From - Promise */
    const promise = new Promise((resolve, reject) => {
      resolve("It is done...")
    })


    const observable$ = from(promise);
    observable$.subscribe({
      next: value => console.log(value),
      complete: () => console.log("Data got completed!!")
    })


    /* timer , interval */
    const obs$ = timer(1000).subscribe(
      {
      next: value => console.log(value),
      complete: () => console.log("Done with timer")
    }


    )

  //  setTimeout(() => {
  //   obs$.unsubscribe();
  //  }, 8000);



}
}
