import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private AuthService:AuthService, private _router: Router) { }

  ngOnInit() {

  }
  login(){
    this.AuthService.login();
  }
  logout(){
    this._router.navigate(['']);
    this.AuthService.logout();
  }

}
