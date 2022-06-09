import { Component, OnInit } from '@angular/core';
import { NgAuthService } from '../../services/ng-auth.service';
import { FormsModule, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _NgAuthService:NgAuthService) { }

  signUp: NgForm;


  ngOnInit(): void {

  }

  onSignUp(email,pswd){
    return this._NgAuthService.signUp(email,pswd);

  }
}
