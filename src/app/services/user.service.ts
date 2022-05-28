import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { userInfo } from 'os';

@Injectable(
//   {
//   providedIn: 'root'
// }

)
export class UserService {

  constructor(private _http: HttpClient) {
   }

   addUser(data:User): Observable<User>{
     return this._http.post<User>(environment.url + 'user.json', data );
   }

   getData(): Observable<User>{
     return this._http.get<User>(environment.url + 'user.json');
   }
}
