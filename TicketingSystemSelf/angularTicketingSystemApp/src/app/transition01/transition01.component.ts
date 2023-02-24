import { Component } from '@angular/core';
import { LoginTransitionService } from '../services/login-transition.service';

@Component({
  selector: 'app-transition01',
  templateUrl: './transition01.component.html',
  styleUrls: ['./transition01.component.css']
})
export class Transition01Component {
  showDashboard:any=false;

  // constructor(private _logintransitionservice:LoginTransitionService){}
  // getCheck(){
  //   this.showDashboard = this._logintransitionservice.getisLogin()
  // }
  
  onLoginSuccess() {
    this.showDashboard = true;
  }
}
