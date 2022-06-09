import { Component, OnInit } from '@angular/core';
import { NgAuthService } from '../../services/ng-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public _NgAuthService: NgAuthService) { }

  ngOnInit(): void {

  }

  onSignin(usrname, password){
    return this._NgAuthService.signIn(usrname, password);
  }

}
