import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { User } from './interfaces/user';
import { Dummy } from './interfaces/dummy';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  UserForm!: FormGroup;
  details:any = [];
  dummyData$!: Observable<Dummy[]>;

  constructor(private crud: CrudService, private _http: HttpClient, private _chnge: ChangeDetectorRef){

  }
  ngOnInit(): void{
    this.UserForm = new FormGroup({
      userId: new FormControl(),
      name: new FormControl(),
      paid: new FormControl(),
      balance: new FormControl()
    })

    this.crud.fetchData().subscribe((items:User[]) => {
     this.details = items;

this._chnge.detectChanges();
    })


  }

  onSubmit(){
    //console.log(this.UserForm.value);
    this.crud.PostUserData(this.UserForm.value).subscribe((res) => {
      console.log(res);
    })
  }

}
