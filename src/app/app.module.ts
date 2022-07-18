import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroupNormalComponent } from './formGroup-normal/formGroup-normal.component';
import { FormBuilderComponent } from './formBuilder/formBuilder.component';

@NgModule({
  declarations: [		
    AppComponent,
      FormGroupNormalComponent,
      FormBuilderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
