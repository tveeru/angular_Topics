import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';

// @Injectable()

export interface IDeactivateComponent{
  checkExit: () => Observable<boolean> | Promise<boolean> | boolean;

}
/*In the below code is only useful for one component */
/*export class CandeactivateService implements CanDeactivate<ContactComponent>{

  constructor() { }
  canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return component.checkExit();
  }
}

*/

/*For multi components, need to declare interface  */
export class CandeactivateService implements CanDeactivate<ContactComponent>{

  constructor() { }
  canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return component.checkExit();
  }
}
