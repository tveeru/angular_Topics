import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },{
    path: 'mobiles', component: MobilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
