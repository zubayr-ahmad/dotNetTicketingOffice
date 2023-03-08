import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { } 
  varificationURL = 'https://localhost:7274/LogIn_API?Email=ghulamshabbir7999%40gmail.com&Password=112215'
  

  postloginURL = 'http://localhost:8083/LatestAPI/LogIn_API'
  check:any =false;


  // This will only send data to backend and backend will return the response true or false based on 
  postUserData(userData: any) {
    return this.http.post(this.postloginURL, userData);
  }

  // This will get varification of user login from backend.
  isVarified(){
    return this.http.get(this.varificationURL)
  }
}
