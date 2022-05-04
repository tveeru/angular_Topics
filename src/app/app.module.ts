import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { LogService } from './log.service';
import { Child2Component } from './child2/child2.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LogService, useClass: LogService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
