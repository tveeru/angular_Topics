import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {
  parmsId?: number;
  product: any;

  constructor( private _router: Router,private _activatedRoute: ActivatedRoute, private productServ: ProductService) { }

  ngOnInit() {

    // this.parmsId = +this._activatedRoute.snapshot.paramMap.get("id")!;

    // this.productServ.getProducts().subscribe(e => {
    //   this.product = e.find(element => element.id == this.parmsId )

    //  })

      this._activatedRoute.paramMap.subscribe(parms => {
        this.parmsId = +parms.get('id')!;

      this.productServ.getProducts().subscribe(e => {
        this.product = e.find(element => element.id == this.parmsId )

       })


      })

  }

  viewNextProduct(){
    this.parmsId = this.parmsId + 1;
    this._router.navigate(['/product', this.parmsId]);
  }



}
