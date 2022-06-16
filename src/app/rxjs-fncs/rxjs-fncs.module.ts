import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsFncsRoutingModule } from './rxjs-fncs-routing.module';
import { RxjsFncsComponent } from './rxjs-fncs.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './fromEvent/fromEvent.component';




@NgModule({
  declarations: [
    RxjsFncsComponent,
    OfComponent,
    FromEventComponent
  ],
  imports: [
    CommonModule,
    RxjsFncsRoutingModule
  ]
})
export class RxjsFncsModule { }
