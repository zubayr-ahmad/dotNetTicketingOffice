import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTableComponent } from './main-table/main-table.component';

import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [

  
    MainTableComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    MatTableModule,
    MatButtonModule,
    NgxPaginationModule
    
    
  ],
  exports:[MainTableComponent]
})
export class DashboardModule { }
