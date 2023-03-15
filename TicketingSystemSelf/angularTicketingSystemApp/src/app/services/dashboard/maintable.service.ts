import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MaintableService {

  constructor(private http:HttpClient) { }
  // getTicketsURL = 'http://localhost:3000/api/tickets' // URL for local json server
  // getTicketsURL ='https://localhost:7274/RetrievingDataFromTicketTable'
  getTicketsURL ='http://localhost:8083/LatestAPI/RetrievingDataFromTicketTable'  // actual api
  // getTicketsURL = 'https://jsonplaceholder.typicode.com/posts/1/comments'
  // getTicketsURL ='https://randomuser.me/api/?results=50'
  
  getTickets(page01:any){
    return this.http.get(this.getTicketsURL,{
      params:{page:page01}
    })
  }
}
