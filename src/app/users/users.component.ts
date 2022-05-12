import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
data:User[];

  constructor(private _userv: UserService) { }

  ngOnInit() {
  this._userv.getUsers().subscribe((response) => {
    this.data = response;
  }
  )
  }


}
