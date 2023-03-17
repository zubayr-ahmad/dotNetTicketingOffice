import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
@NgModule({
  declarations: [
    AddTicketComponent,
    TicketDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[
    AddTicketComponent,
    TicketDetailsComponent
  ]
})
export class TicketModuleModule { }
