import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { User } from './interfaces/user';
import { Dummy } from './interfaces/dummy';
import { Observable,BehaviorSubject  } from 'rxjs';
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
  loading: boolean = false;
  editMode: boolean = false;
  currentProductId!: string;
  searchValue: any = "";
  //documents$: BehaviorSubject<any> = new BehaviorSubject(undefined);


  constructor(private crud: CrudService, private _http: HttpClient, private _chnge: ChangeDetectorRef){

  }
  ngOnInit(): void{
    this.UserForm = new FormGroup({
      userId: new FormControl(),
      name: new FormControl(),
      paid: new FormControl(),
      balance: new FormControl()
    })

    console.log(this.getDocuments());


  }

  getDocuments(): void {
    this.loading = true;
 //  this.details = this.crud.fetchData().subscribe(this.documents$);
 this.crud.fetchData().subscribe((data) => {
   this.details = data;
   this.loading = false;
 })

  }

  onSubmit(){
    console.log(this.UserForm.value);
    if(!this.editMode){
      this.crud.PostUserData(this.UserForm.value).subscribe((res) => {
        console.log(res);
        this.getDocuments();
      }
        // _ => this.getDocuments()
        );

    }else{
      this.crud.editData(this.currentProductId, this.UserForm.value).subscribe(() => {
        this.UserForm.reset();
        this.getDocuments();

      });
    }
  }

  onEditData(id: string){
    this.currentProductId = id;
    this.editMode = true;
    /* get the data, to pass id into details array */
    let current_item = this.details.find((item: User) => {
      return item.id == id
    });

    /* we want to populate the data in the form */
     this.UserForm.setValue({
      userId: current_item.userId,
      name: current_item.name,
      paid: current_item.paid,
      balance: current_item.balance
         })

         console.log(this.UserForm);

  }
  onDeleteData(id: string){
    this.crud.deleteData(id).subscribe(() => this.getDocuments());
  }

  onDeleteAll():void{
    this.crud.deleteAllData().subscribe(() => this.getDocuments());
  }

  addNewData(index:number, item: any){
    return item.userId;

  }
}

