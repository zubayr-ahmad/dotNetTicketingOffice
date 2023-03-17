import { Component, Input, OnInit } from '@angular/core';
import { TicketDataService } from 'src/app/services/ticket-data.service';
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  myTicket: any;
  myTicket02: any = {
    id: 1,
    subject: 'Testing Ticket',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis quae accusantium nesciunt eos ab reiciendis. Dolor magnam assumenda, aliquam ex libero voluptatum, laudantium iure eum adipisci, accusantium nemo saepe?',
    taskId: '#12h34e',
    createdDate: new Date(),
    startDate: new Date(),
    dueDate: new Date(),
    comments: ([] = [
      {
        text: 'comment 01',
        sentiment: 0,
        assignee: {
          id: 1,
          name: 'Zubair Ahmad01',
          email: 'zubair01@gmail.com',
        },
      },
      {
        text: 'comment 02',
        sentiment: 1,
        assignee: {
          id: 1,
          name: 'Zubair Ahmad01',
          email: 'zubair01@gmail.com',
        },
      },
      {
        text: 'comment 03',
        sentiment: -1,
        assignee: {
          id: 3,
          name: 'Zubair Ahmad03',
          email: 'zubair03@gmail.com',
        },
      },
      {
        text: 'comment 04',
        sentiment: 0,
        assignee: {
          id: 4,
          name: 'Zubair Ahmad04',
          email: 'zubair04@gmail.com',
        },
      },
      {
        text: 'comment 05',
        sentiment: 0,
        assignee: {
          id: 4,
          name: 'Zubair Ahmad04',
          email: 'zubair04@gmail.com',
        },
      },
      {
        text: 'comment 06',
        sentiment: 0,
        assignee: {
          id: 2,
          name: 'Zubair Ahmad02',
          email: 'zubair02@gmail.com',
        },
      },
    ]),
    assignees: ([] = [
      { id: 1, name: 'Zubair Ahmad01', email: 'zubair01@gmail.com' },
      { id: 2, name: 'Zubair Ahmad02', email: 'zubair02@gmail.com' },
      { id: 3, name: 'Zubair Ahmad03', email: 'zubair03@gmail.com' },
      { id: 4, name: 'Zubair Ahmad04', email: 'zubair04@gmail.com' },
    ]),
  };
  data = 23094;
  ngOnInit(): void {
    // this.myTicket = this._ticketDataService.ticket
    let tmp = localStorage.getItem('currentTicket');
    if (tmp !== null) {
      this.myTicket = JSON.parse(tmp);
    }
    console.log('Type of ticket is:', typeof this.myTicket);
    console.log('Init working', this.myTicket);
  }

  constructor(private _ticketDataService: TicketDataService) {
    // this.myTicket = this._ticketDataService.ticket
    console.log('Details Component loaded', this._ticketDataService.ticket);
  }

  close() { }
}
