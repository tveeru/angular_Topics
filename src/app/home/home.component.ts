import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { DataService } from '../data.service';
import { AngularFireStorage, AngularFireStorageReference,AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  angularFireStorage: any;
  profileUrl!: Observable<string | null>;
  patho!:string;


  constructor(private storage: AngularFireStorage, private _http: HttpClient, private _data: DataService) {

  }

  dataForm:any = FormGroup;
  selectedFile:any;
  uploadPercent!: Observable<number>;
  downloadURL!: Observable<string>;
  fileRef!: AngularFireStorageReference;



  ngOnInit():void{
    this.dataForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
     files: new FormControl()
    })

  }

  onFileSelected(event:any):void{
    const file = event.target.files[0];
    const filePath = 'images/' + file.name;
    const task = this.storage.upload(filePath, file);
    this.fileRef = this.storage.ref(filePath);
    this.patho = filePath;


    this.uploadPercent != task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.fileRef.getDownloadURL())
   )
  .subscribe()

  }

  onSubmit(){

  }
  onDownload(){
    console.log(this.patho);
    const ref = this.storage.ref(this.patho);
    this.profileUrl = ref.getDownloadURL();
  }
}
