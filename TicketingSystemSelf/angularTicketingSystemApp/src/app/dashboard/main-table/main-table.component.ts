import { HttpParams } from '@angular/common/http';
import { Component, Input, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaintableService } from 'src/app/services/dashboard/maintable.service';

import { PaginationInstance } from 'ngx-pagination'; 
import { TicketDataService } from 'src/app/services/ticket-data.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit{
  allTickets: any; // This will have an obj {} where obj is a list containing all tickets
  showMore: boolean = false; // Button to show more options
  ticketToShow: any;
  dialogVisible: boolean = false;
  currentTicket:any;

  // Practice pagination
  dataPg:any;
  totalItemsPg:number = 5000;
  currentPagePg:number = 1;
  itemsPerPagepg:number = 50;

  constructor(
    private _maintableservice: MaintableService,
    private router: Router,
    private _ticketDataService: TicketDataService,
  
    ) 
  {

  }

  // Move to add Ticket component to create a new ticket
  movetoAddTicket() {
    this.router.navigate(['/addTicket']);
  }

  // Show ticket details component when click on more button
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


  // Pagination Practice Function Below three are used in pagination
  postList(event:any):void{
    this._maintableservice.getTickets(event).subscribe((response)=>{
      this.dataPg = response
      console.log('Pagination data: ',this.dataPg)
    })
  }

  pageChanged(event:any = 1){
    this.currentPagePg = event;
    this.postList(event)
  }

  ngOnInit():void{
    this.pageChanged()
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
  
}
