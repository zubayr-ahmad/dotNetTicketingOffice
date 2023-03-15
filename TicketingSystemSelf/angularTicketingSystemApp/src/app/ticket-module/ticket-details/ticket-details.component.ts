import { Component, Input, OnInit } from '@angular/core';
import { TicketDataService } from 'src/app/services/ticket-data.service';
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  myTicket:any
  data=23094;
  ngOnInit():void {
    // this.myTicket = this._ticketDataService.ticket
    let tmp = localStorage.getItem('currentTicket')
    if ( tmp !== null) {
      this.myTicket = JSON.parse(tmp);
      
    }
    console.log('Type of ticket is:',typeof this.myTicket)
    console.log('Init working',this.myTicket)
  }

  constructor(private _ticketDataService:TicketDataService) {
    // this.myTicket = this._ticketDataService.ticket
    console.log('Details Component loaded', this._ticketDataService.ticket)
   }


  close(){ }
}
