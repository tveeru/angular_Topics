import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultChangeDetectionComponentComponent } from './DefaultChangeDetectionComponent/DefaultChangeDetectionComponent.component';
import { OnPushChangeDetectionComponent } from './on-push-change-detection/on-push-change-detection.component';
import { OnpushComponent } from './onpush/onpush.component';
@NgModule({
  declarations: [
    AppComponent,
      DefaultChangeDetectionComponentComponent,
      OnPushChangeDetectionComponent,
      OnpushComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
