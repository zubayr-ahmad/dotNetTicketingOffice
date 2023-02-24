import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginTransitionService {
  isLogin=false;
  constructor() { }
  toggleLogin(){
    this.isLogin != this.isLogin
  }
  getisLogin(){
    return this.isLogin
  }
}
