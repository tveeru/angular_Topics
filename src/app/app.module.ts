import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AddListComponent } from './add-list/add-list.component';
import { ProductService } from './services/product.service';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    UsersComponent,
    AddListComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RatingModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [ProductService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
