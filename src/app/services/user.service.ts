import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {  }

  getUsers():Observable<HttpEvent<User[]>>{
  //  let myHeaders = new HttpHeaders({'myHeader':['headervalue','header21']});
  //  let myparams = new HttpParams().set('page', '5').set('sort', true);
   //let myHeaders = new HttpHeaders({'myHeader':'headervalue'});
  //  myHeaders = myHeaders.set("g1","j");
  //  myHeaders = myHeaders.append("g1", '2000');
  return this._http.get<User[]>(`${this.apiUrl}/users`, {observe: 'events', reportProgress: true});

  }

  getuser(): Observable<User>{
    return this._http.get<User>(`${this.apiUrl}/users/1`);
  }
  createUser(user: User): Observable<User>{
    return this._http.post<User>(`${this.apiUrl}/users`, user);
  }
  modifyUser(user:User): Observable<User>{
    return this._http.put<User>(`${this.apiUrl}/users/${user.id}`,user);
  }
  patchUser(user: User): Observable<User>{
    return this._http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id:number): Observable<unknown>{
    return this._http.delete<unknown>(`${this.apiUrl}/users/${id}`);
  }
}
