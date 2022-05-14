import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './Products/Products.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddtoCartComponent } from './addtoCart/addtoCart.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserGuardService } from './service/user-guard.service';
import { ContactComponent } from './contact/contact.component';
import { CandeactivateService } from './service/candeactivate.service';
import { ProductResolveGaurdService } from './service/product-resolve-gaurd.service';


const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },{
    path: 'products', component: ProductsComponent, resolve: { productz:ProductResolveGaurdService}
  },
   {
   path: 'product/:id', component: ProductDetailsComponent, canActivate:[UserGuardService], canActivateChild: [UserGuardService],
   children: [
     { path: 'wishlist', component: WishlistComponent},
     { path: 'cart', component: AddtoCartComponent},

   ]
  },
  {
    path: 'users', component: UsersComponent,canActivate:[UserGuardService]
  },{
    path: 'user/:id', component: UserComponent
  },
  {
    path: 'contact', component: ContactComponent, canDeactivate: [CandeactivateService]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
