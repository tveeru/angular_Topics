import { Injectable } from '@angular/core';

console.log("I am included in final bundle");
@Injectable(
//   {
//     providedIn: 'root'
//  }
)
export class LogService {

  static count: number = 0;
  constructor() {
    LogService.count = LogService.count + 1;

    console.log("Number of objects created - " + LogService.count);
   }

   sayHi(name: string){
     return "Hello " + name;
   }
}
