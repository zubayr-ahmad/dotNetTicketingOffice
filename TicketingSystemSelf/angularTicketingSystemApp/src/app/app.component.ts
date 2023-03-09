
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  check:boolean=false;
  constructor(){}
  
  ngOnInit(){}
  
  checkUserLoggedIn(){
    if(localStorage.getItem('userLoginStatus') == 'true'){
    this.check = true
  }
  else{
    this.check = false
  }
  return this.check
  }
}
