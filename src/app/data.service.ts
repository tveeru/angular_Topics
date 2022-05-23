import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable()
export class DataService {

constructor(private _http: HttpClient) {

 }

 postData(data:any): Observable<unknown>{
   return this._http.post('gs://proj-ecedc.appspot.com', data);
 }

}
