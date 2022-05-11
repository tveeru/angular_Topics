import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products?: Product[];

  constructor(private prodctService: ProductService){

  }
  ngOnInit(): void {
    this.loadProducts();
  }
loadProducts(){
  this.prodctService.getProducts().subscribe(
    {
        next: (response: Product[]) => {
          this.products = response;
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log("Done with complete");
        }
    }
  )
}

}
