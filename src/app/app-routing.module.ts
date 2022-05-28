import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListComponent } from './add-list/add-list.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
{
  path: 'home', component: HomeComponent
},{
  path: 'users', component: UsersComponent,
  children: [
    {
      path: 'add', component: AddListComponent
    }
  ]
},{
  path: '', redirectTo: '/home', pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
