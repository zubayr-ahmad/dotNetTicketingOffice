import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTicketService {

  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) {  }

  addTickettoDataBase(obj:any){
    return this.http.post(this.url,obj)
  }
}
