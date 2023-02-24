import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    LoginformComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports:[LoginformComponent]
})
export class LoginSystemModule { }
