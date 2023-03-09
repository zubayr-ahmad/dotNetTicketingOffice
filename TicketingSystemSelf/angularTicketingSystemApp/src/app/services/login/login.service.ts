import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router:Router) { } 
  varificationURL = 'https://localhost:7274/LogIn_API?Email=ghulamshabbir7999%40gmail.com&Password=112215'
  postloginURL = 'http://localhost:8083/LatestAPI/LogIn_API'
  
  isUserLoggedIn = new BehaviorSubject<boolean>(false)
  invalidUserNamePassword:boolean = true;


  // This will only send data to backend and backend will return the response true or false based on 
  postUserData(userData: any) {
    return this.http.post(this.postloginURL, userData,
      {observe:'response'}
      ).subscribe((result) => {
        if (result.body == true){
        this.isUserLoggedIn.next(true);
        this.invalidUserNamePassword = true
        localStorage.setItem('userLoginStatus',JSON.stringify(result.body))        
        this.router.navigate(['/mainTable']);}
        else{
          this.isUserLoggedIn.next(false);
          this.invalidUserNamePassword = false
        localStorage.setItem('userLoginStatus',JSON.stringify(result.body))   
        this.router.navigate(['/loginForm'])
        }
      });
  }

  reloadUser(){
    if(localStorage.getItem('userLoginStatus') == 'true'){
      this.isUserLoggedIn.next(true);
      this.router.navigate(['mainTable'])
    }
  }

  // This will get varification of user login from backend.
  isVarified(){
    return this.http.get(this.varificationURL)
  }
}
