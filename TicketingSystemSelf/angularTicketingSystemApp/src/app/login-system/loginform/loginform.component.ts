import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  // handler for user form
  loginForm: FormGroup;

  // Makes a form, initiate the loginService and routing
  constructor(
    private formBuilder: FormBuilder,
    private _loginservice: LoginService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  // Email and Password Validation
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    // this._loginservice.reloadUser()
    
  }

  // Show password feature
  passwordFieldType: string = 'password';
  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password'; // Toggle password and text type
  }

  // User varification
  responseFromBackend: any; // Collect response from backend
  storedResponse: any = true; // Store response for other function checks


  // When data is posted then this will be used to return a response (Extra code)
  getVarification() {

    this._loginservice.isUserLoggedIn.subscribe((result)=>{this.storedResponse = result})
    if (this._loginservice.invalidUserNamePassword == true && this.storedResponse == true){
      return true
    }
    else{
      return false
    }
  }


  // to show invalid username or password text
  toShow(){
    this._loginservice.isUserLoggedIn.subscribe((result)=>{this.storedResponse = result})
    if (this._loginservice.invalidUserNamePassword == false && this.storedResponse == false){
      return false
    }
    else{
      return true
    }
  }

  // Send data to backend for varification
  postData(form: any) {
    // Making object that is posted to backend
    let data = {
      Email: this.loginForm.get('email')?.value,
      Password: this.loginForm.get('password')?.value,
    };
    
    // Changing routing based on reponse (True / Flase)
    this._loginservice.postUserData(data)
  }
}
