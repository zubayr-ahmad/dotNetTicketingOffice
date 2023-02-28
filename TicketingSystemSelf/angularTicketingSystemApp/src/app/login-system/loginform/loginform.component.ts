import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{
  // handler for user form
  loginForm:FormGroup;
  
  // Makes a form, initiate the loginService and routing
  constructor(private formBuilder:FormBuilder,private _loginservice:LoginService, private router:Router){
    this.loginForm = formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  // Emit event that login is successfull to transition01 component that will next show dashboard
  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter(); 

  // Email and Password Validation
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Show password feature
  passwordFieldType: string = 'password';
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'; // Toggle password and text type
  }

  // User varification
  responseFromBackend:any; // Collect response from backend
  storedResponse:any; // Store response for other function checks
  
  // Get response of user varification (extra function)
  getResponse():any{
    this._loginservice.isVarified().subscribe(response=>this.responseFromBackend=response)
    this.setVarification(this.responseFromBackend)
    // this.setVarification(false)
    // return this.varified
    
  }


  setVarification(val:any){
    this.storedResponse=val
  }


  // When data is posted then this will be used to return a response
  getVarification(){return this.storedResponse}

  
  // Send data to backend for varification
  postData(form:any){
    // Making object that is posted to backend
    let data = {
      Email: this.loginForm.get('email')?.value,
      Password: this.loginForm.get('password')?.value,
    };

    // console.log(data)
    
    // Comment it out for real APIs
    // this._loginservice.postUserData(data).subscribe((response)=>{
    //   this.setVarification(response),
    //   this.router.navigate(['/mainTable'])})
    // For testing
    // let a:any;
    // this._loginservice.postUserData(data).subscribe(response => a = response)
    let a:any = this._loginservice.postUserData(data)
    if (a == true){
    this.router.navigate(['/mainTable'])
    }
    else{
      this.storedResponse = false
    }
    
    
    // Poting data and getting respose
    
    // this.setVarification(this.responseFromBackend) // Storing response
    
    // // After successfull login, emit event that login is successfull to transition01 component
    // if (this.storedResponse==true) {
    //   this.loginSuccess.emit(true);
    // }
    // return data

  }

  changePage(){
    if (this.storedResponse == true){

    }
  }

}
