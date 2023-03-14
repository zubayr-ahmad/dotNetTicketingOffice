import { Component, Input, OnInit } from '@angular/core';
import { TicketDataService } from 'src/app/services/ticket-data.service';
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  @Input() myTicket:any
  data=23094;
  ngOnInit():void {
    // this.myTicket = this._ticketDataService.ticket
    // this.myTicket = localStorage.getItem('currentTicket')
    console.log('Init working',localStorage.getItem('currentTicket'))
  }

  constructor(private _ticketDataService:TicketDataService) {
    // this.myTicket = this._ticketDataService.ticket
    console.log('COmponent loaded', this._ticketDataService.ticket)
   }


  close(){ }
}
