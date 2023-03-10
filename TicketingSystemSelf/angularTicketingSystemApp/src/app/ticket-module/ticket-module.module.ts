import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTicketComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddTicketComponent
  ]
})
export class TicketModuleModule { }
