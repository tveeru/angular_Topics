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

@NgModule({
  declarations: [			
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    PageNotFoundComponent,
      ProductDetailsComponent,
      WishlistComponent,
      AddtoCartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
