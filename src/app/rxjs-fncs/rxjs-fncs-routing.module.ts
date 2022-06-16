import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsFncsComponent } from './rxjs-fncs.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './fromEvent/fromEvent.component';


const routes: Routes = [
            {   path: '',
                component: RxjsFncsComponent,
                children: [
                            {
                            path: 'offnc',
                             component: OfComponent
                            },{
                              path: 'fromevent',
                              component: FromEventComponent
                            }
                          ]
            },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsFncsRoutingModule { }
