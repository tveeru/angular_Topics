import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this._http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
