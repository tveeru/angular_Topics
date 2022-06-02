import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
          {
            path: 'customers',
            loadChildren: () => import('./customers/customers.module')
            .then(m => m.CustomersModule) },{
              path: 'cart',
              loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
            }
          ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
