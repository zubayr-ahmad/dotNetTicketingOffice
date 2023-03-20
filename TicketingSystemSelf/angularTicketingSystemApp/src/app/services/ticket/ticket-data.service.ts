import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketDataService {
ticket:any;
visible:boolean = false;
urlcomment:any='http://127.0.0.1:8000/sentiment';
  constructor(private _http:HttpClient) {
    console.log('Data service called')
   }

  getTicketDetails(id:number){
    
  }

  addComment(obj:any){
    return this._http.post(this.urlcomment,obj)
  }

}
