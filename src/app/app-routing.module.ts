import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'rxjsFncs', loadChildren: () => import('./rxjs-fncs/rxjs-fncs.module').then(m => m.RxjsFncsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
