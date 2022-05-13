import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './service/product.service';
import { NavBarComponent } from './navBar/navBar.component';
import { ProductsComponent } from './Products/Products.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddtoCartComponent } from './addtoCart/addtoCart.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserGuardService } from './service/user-guard.service';
import { AuthService } from './service/auth.service';
import { ContactComponent } from './contact/contact.component';
import { CandeactivateService } from './service/candeactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    PageNotFoundComponent,
      ProductDetailsComponent,
      WishlistComponent,
      AddtoCartComponent,
      UsersComponent,
      UserComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, UserGuardService,AuthService,CandeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
