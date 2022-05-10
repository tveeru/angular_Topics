import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Observable, Subscriber, Subscription } from 'rxjs';
import { Httpr } from './Httpr';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  user: any = {
    id: 3,
    'name':'raju'

 }
  constructor( private UsrService: UserService){
    //type HttpR = { code: number, data: string };
    // const observr = new Observable<Httpr>(subscriber => {
    //   console.log('subscription is loading!!!!');
    //   subscriber.next({ code: 1, data: 'Item 1'});
    //   subscriber.next({ code: 2, data: 'Item 2'});
    //   subscriber.next({ code: 3, data: 'Item 3'});
    //   subscriber.error({ code: 500, msg: 'Data not appearing..'}),

    //   setTimeout(() => {
    //     subscriber.next({code: 4, data: 'Item 4'});
    //     subscriber.complete();
    //   }, 3*1000);

    //   console.log('Data passing completed!!!');
    // })

    // observr.subscribe({
    //   next(response:Httpr) {
    //       console.log(`The responses are ${response.code}`);
    //   },
    //   error(err){
    //     console.log(`Hey u are getting the error ${err}`)
    //   },
    //   complete(){
    //     console.log('Done with the data transfer');
    //   }
    // })

  }

  ngOnInit(): void {
    this.loadUsers();
   // this.patchUser();
   // this.onCreateUser();
  // this.deleteUser();
  }
  loadUsers() {
     this.UsrService.getUsers().subscribe(
    {
         next: (events) => {
        console.log(events);
       },
        complete: () => {
          console.log('Done');
        },
        error: (error:any) => {
            console.log(error);
         },

    })
  }

  loadUser(): void {
    this.UsrService.getuser().subscribe({
      next: (response: User) => {
        console.log(response);
        },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('done');
      }
    })
  }

  onCreateUser(): void{
    this.UsrService.createUser(this.user).subscribe({
      next: (response: User) => {
        console.table(response);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log("Done");
      }

    })
  }

  modifyUser(): void
  {
    this.UsrService.modifyUser(this.user).subscribe({
      next: (response: User) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log("Done");
      }
    })
  }
 patchUser(): void{
   this.UsrService.patchUser(this.user).subscribe({
     next: (response: User) => {
       console.log(response);
     },
     error: (error: any) => {
       console.log(error)
     },
     complete: () => {
       console.log("Done it is completed");
     }
   })
 }
 deleteUser(): void{
   this.UsrService.deleteUser(2).subscribe({
     next: (response) => {
      console.log(response);
     },
     error: (error: any) => {
       console.log(error)
     },
     complete: () => {
       console.log("Done");
     }

   })
 }
}

