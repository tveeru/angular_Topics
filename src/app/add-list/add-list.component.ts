import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Product } from "../product"
import { ProductService } from '../services/product.service';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  fileRef!: AngularFireStorageReference;
  patho: string[] = [];
  products!:Product;
  productsForm!: FormGroup;
  constructor(private _router: Router, private _ProductService:ProductService, private _afs: AngularFireStorage) { }

  ngOnInit(): void {
    this.productsForm = new FormGroup({
      pname: new FormControl(),
      ram: new FormControl(),
      camera: new FormControl(),
      battery: new FormControl(),
      images: new FormControl()
    })
  }

  storeData(event:any){
    const file = event.target.files[0];
    console.log(event.target.files);
    for (const key in event.target.files) {
      if (event.target.files.hasOwnProperty(key)) {
           const file = event.target.files[key]
           const filePath = 'images/' + file.name;
           const task = this._afs.upload(filePath, file);
           this.fileRef = this._afs.ref(filePath);
           this.patho.push(filePath);

      }
}


  }
  onSubmit(){
    // console.log(this.patho);
    this.products = {
      pname: this.productsForm.value['pname'],
      ram: this.productsForm.value['ram'],
      camera: this.productsForm.value['camera'],
      battery: this.productsForm.value['battery'],
      images: this.patho,
    }
    //console.log(this.products);
     this._ProductService.postData(this.products).subscribe(() => {
      this._router.navigate(['/users']);
     });
  }

}
