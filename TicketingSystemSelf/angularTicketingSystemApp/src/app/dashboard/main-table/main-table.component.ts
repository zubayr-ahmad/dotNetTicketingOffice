import { HttpParams } from '@angular/common/http';
import { Component, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { MaintableService } from 'src/app/services/dashboard/maintable.service';
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TicketDetailsComponent } from 'src/app/ticket-module/ticket-details/ticket-details.component';
import { TicketDataService } from 'src/app/services/ticket-data.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent {
  allTickets: any; // This will have an obj {} where obj is a list containing all tickets
  showMore: boolean = false; // Button to show more options
  totalRecords: Number | undefined | any;
  page: Number | any = 1;
  ticketToShow: any;
  dialogVisible: boolean = false;
  currentTicket:any;
  constructor(
    private _maintableservice: MaintableService,
    private router: Router,
    private _ticketDataService: TicketDataService,
    private renderer: Renderer2
  ) {
    // let param01 = new HttpParams().set('page',4)
    this._maintableservice.getTickets(5).subscribe((response: any) => {
      this.allTickets = response;
      this.totalRecords = response.length;
      


      // Following Code is for testing pagination
      console.log(response.Tickets);
    });
  }

  // Below is the code to show description and comments on button click
  expandedRows: any[] = [];

  toggleRow(index: number) {
    // Removes the index if it is included in expandedRows otherwise push it in
    if (this.expandedRows.includes(index)) {
      this.expandedRows.splice(this.expandedRows.indexOf(index), 1);
    } else {
      this.expandedRows.push(index);
    }
  }

  isRowExpanded(index: number) {
    return this.expandedRows.includes(index);
  }
  movetoAddTicket() {
    this.router.navigate(['/addTicket']);
  }

  showTicketDetails(index: number) {
    this._ticketDataService.ticket = this.allTickets[index];
    console.log(this._ticketDataService.ticket);
    this.currentTicket = this._ticketDataService.ticket
    localStorage.setItem('currentTicket',JSON.stringify(this.currentTicket))
    this.router.navigate(['/ticketDetails'])
    // const url = '/ticketDetails';
    // const title = 'Ticket Details';
    // // const url = 'https://example.com'; // replace with your component's URL
    // const win = window.open(url, title);
    // win?.focus();

    // const width = 1100;
    // const height = 800;
    // const left = (window.innerWidth - width) / 2;
    // const top = (window.innerHeight - height) / 2;
    // const options = `toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=${width},height=${height},top=${top},left=${left}`;
    // window.open(url, title, options);
  }
}
