import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTableComponent } from './dashboard/main-table/main-table.component';
import { LoginformComponent } from './login-system/loginform/loginform.component';

const routes: Routes = [
  { path: '', redirectTo: 'loginForm', pathMatch: 'full' },
  {path:'mainTable',component:MainTableComponent},
  {path:'loginForm',component:LoginformComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
