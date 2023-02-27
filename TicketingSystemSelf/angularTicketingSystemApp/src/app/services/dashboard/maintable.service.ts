import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MaintableService {

  constructor(private http:HttpClient) { }
  // getTicketsURL = 'http://localhost:3000/api/tickets'
  // getTicketsURL ='https://localhost:7274/RetrievingDataFromTicketTable'
  getTicketsURL ='http://localhost:8083/LatestAPI/RetrievingDataFromTicketTable'
  getTickets(){
    return this.http.get(this.getTicketsURL)
  }
}
