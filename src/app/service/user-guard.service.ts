import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate, CanActivateChild {

  constructor(private authservice: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      if(this.authservice.isAuthenticated()){
        return true;
      }else{
        this._router.navigate(['']);
        return false;
      }
  }
  /* For all children */
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}
