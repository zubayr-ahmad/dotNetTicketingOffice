import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
  }

  // Show password feature
  passwordFieldType: string = 'password';
  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password'; // Toggle password and text type
  }

  // User varification
  responseFromBackend: any; // Collect response from backend
  storedResponse: any; // Store response for other function checks

  // When data is posted then this will be used to return a response
  getVarification() {
    return this.storedResponse;
  }

  // Send data to backend for varification
  postData(form: any) {
    // Making object that is posted to backend
    let data = {
      Email: this.loginForm.get('email')?.value,
      Password: this.loginForm.get('password')?.value,
    };

    // Changing routing based on reponse (True / Flase)
    this._loginservice.postUserData(data).subscribe((response) => {
      if (response) {
        this.storedResponse = true;
        this.router.navigate(['/mainTable']);
      } else {
        this.storedResponse = false;
      }
    });
  }
}
