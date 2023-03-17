import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketDataService {
ticket:any;
visible:boolean = false;
  constructor() {
    console.log('Data service called')
   }
}
