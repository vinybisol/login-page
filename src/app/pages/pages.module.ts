import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [    
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
