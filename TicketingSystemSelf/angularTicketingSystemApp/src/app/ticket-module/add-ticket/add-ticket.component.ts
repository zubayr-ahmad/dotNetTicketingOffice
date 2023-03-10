import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  ticketForm:FormGroup;
  email2:string='';
  constructor(private fb:FormBuilder){
    this.ticketForm = fb.group({

      email:new FormControl()
    })
  }

  postData(ticketForm:any){
    console.log(ticketForm.controls);
  }
}
