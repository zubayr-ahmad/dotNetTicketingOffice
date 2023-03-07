import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaintableService {

  constructor(private http:HttpClient) { }
  // getTicketsURL = 'http://localhost:3000/api/tickets' // URL for local json server
  // getTicketsURL ='https://localhost:7274/RetrievingDataFromTicketTable'
  // getTicketsURL ='http://localhost:8083/LatestAPI/RetrievingDataFromTicketTable'
  getTicketsURL ='https://randomuser.me/api/?results=50'
  getTickets(){
    return this.http.get(this.getTicketsURL)
  }
}
