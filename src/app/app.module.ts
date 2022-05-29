import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDirective } from './custom/confirm.directive';
import { HighlightDirective } from './custom/highlight.directive';
import { ConditionalDirective } from './custom/conditional.directive';
import { HideAfterDirective } from './custom/hide-after.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDirective,
    HighlightDirective,
    ConditionalDirective,
    HideAfterDirective
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
