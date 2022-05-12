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


const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },{
    path: 'products', component: ProductsComponent,
  },
   {
   path: 'product/:id', component: ProductDetailsComponent,
   children: [
     { path: 'wishlist', component: WishlistComponent},
     { path: 'cart', component: AddtoCartComponent},

   ]
  },
  {
    path: 'users', component: UsersComponent
  },{
    path: 'user/:id', component: UserComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },{
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
