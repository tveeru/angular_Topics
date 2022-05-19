import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { Dummy } from '../interfaces/dummy';
@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class CrudService {

  constructor( private _Http: HttpClient) {}

  PostUserData(data:User):Observable<User[]>{
    return this._Http.post<User[]>("https://authangular-2f1b7-default-rtdb.firebaseio.com/user.json",data);

  }

  dataChangesSubject = new Subject<any>();

  fetchData(): Observable<User[]>{
    return this._Http.get<User[]>('https://authangular-2f1b7-default-rtdb.firebaseio.com/user.json')
    .pipe(
      map(
        (res):any => {
          const products = [];
          console.log(res);
          for(const key in res){
            //products.push({...res[key], id:key})
            products.push({...res[key],id:key})



          }
          console.log(products);
            return products;

          // products.filter((data) => {
          //     if(data.balance > 100){
          //       console.log(data);
          //     }
          // });
        }
        )
    )
  //   //     filter((res):any => {
  //   //       for(let data of res){
  //   //         if(data.balance > 100){
  //   //           console.log(data);
  //   //         }
  //   //       }
  //   //     })
  //   //  )
   //}


}

fetDetail(): Observable<Dummy[]>{
  return this._Http.get<Dummy[]>('https://627887f86ac99a91065858c1.mockapi.io/sample');

}

}
