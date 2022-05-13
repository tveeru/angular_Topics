import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;

  login(){
     this.isLoggedIn = true;
  }

  logout(){
     this.isLoggedIn = false;
  }

   isAuthenticated(){
    return this.isLoggedIn;
  }
}
