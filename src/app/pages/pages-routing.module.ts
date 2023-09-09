import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent
},
{
  path:'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
   exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
