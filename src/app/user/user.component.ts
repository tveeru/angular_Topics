import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  _id: number;
  _user: User;
  editMode: boolean = false;
  constructor(private _router: Router,private _activedRoute: ActivatedRoute, private _userServ: UserService) { }

  ngOnInit() {
        /* Retreive the Route Params from the url */

    this._activedRoute.paramMap.subscribe(params => {
      this._id = +params.get('id');

      this._userServ.getUsers().subscribe(e => {
        this._user = e.find(data => data.id == this._id);
      })



    })

    /* Retreive the Query Params from the url */
    this._activedRoute.queryParamMap.subscribe(params => {
      this.editMode = Boolean(params.get("edit"));
    })

  }

  viewNextUser(){
    if(this._id <10){
      this._id = this._id + 1;
      this._router.navigate(['/user',this._id]);

    }else{
      this._id = 0;
    }
  }

  passParam(){
    this._router.navigate(['/user', this._id], {queryParams: {edit:true}});
  }

  update(){
    this.editMode = false;
    this._router.navigate(['/user', this._id]);

  }

}
