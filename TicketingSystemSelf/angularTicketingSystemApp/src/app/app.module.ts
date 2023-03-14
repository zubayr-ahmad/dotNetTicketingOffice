import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginSystemModule } from './login-system/login-system.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TicketModuleModule } from './ticket-module/ticket-module.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginSystemModule,
    DashboardModule,
    BrowserAnimationsModule,
    TicketModuleModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
