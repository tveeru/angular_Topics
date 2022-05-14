import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolveGaurdService implements Resolve<Product[]>{

  constructor(private ProductService:ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]>  {
     return this.ProductService.getProducts();
  }
}
