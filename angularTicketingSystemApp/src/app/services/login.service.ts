import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  // varificationURL = 'https://reqres.in/api/users?page=2'
  varificationURL = 'https://jsonplaceholder.typicode.com/comments'
  // varificationURL = 'https://api.jikan.moe/v4/anime/{id}/full'

  postloginURL = 'https://reqres.in/api/users'
  

  // This will send user information to the backend
  // postUserData(userData:any){
  //   return this.http.post(this.postloginURL,userData)
  // }

  //testing function
  postUserData(data:any){
    return true
  }

  // This will get varification of user login from backend.
  isVarified(){
    return this.http.get(this.varificationURL)
  }
}
