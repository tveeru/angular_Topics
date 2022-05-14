import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products?: Product[];

  constructor(private prodctService: ProductService, private _activdRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.loadProducts();
  }
loadProducts(){
  // this.prodctService.getProducts().subscribe(
  //   {
  //       next: (response: Product[]) => {
  //         this.products = response;
  //         console.log(this.products);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //       complete: () => {
  //         console.log("Done with complete");
  //       }
  //   }
  // )

  this.products = this._activdRoute.snapshot.data['productz'];
  console.log(this.products);
}


}
