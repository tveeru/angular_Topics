import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { environment } from '../../environments/environment';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ProductService {

  constructor(private _http: HttpClient) { }

  postData(data:Product): Observable<Product>{
    return this._http.post<Product>(environment.url+'product.json', data);
  }
}
