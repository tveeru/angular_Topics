import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userData!: User;


  constructor(private _usr: UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    })
  }

  Onsignup(){
    this.userData = {
      userName: this.loginForm.value['userName'],
      password: this.loginForm.value['password'],
      email: this.loginForm.value['email']
    }

    this._usr.addUser(this.userData).subscribe();
    this.loginForm.reset();

  //console.log(this.loginForm.value);

  }
  OnsignIn(){
    this.userData = {
      userName: this.loginForm.value['userName'],
      password: this.loginForm.value['password']
    }

    this._usr.getData().subscribe((data) => {
      console.log(data);
    })
  }
}
