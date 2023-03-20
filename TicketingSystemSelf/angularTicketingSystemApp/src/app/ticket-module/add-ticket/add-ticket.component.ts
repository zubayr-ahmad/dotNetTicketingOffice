import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTicketService } from 'src/app/services/ticket/add-ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit{
  addticketForm: any;
  
  assigneeList = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'David' }
  ];

  dropdownList:any;
  selectedItems = [];
  dropdownSettings = {};

  constructor(private formBuilder: FormBuilder, private router:Router, private _addTicketService:AddTicketService) {
        this.addticketForm = this.formBuilder.group({
      subject: ['', Validators.required],
      description:[''],
      priority: ['normal', Validators.required],
      startDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      assigneesSelected: [[], Validators.required]
    });
   }

  ngOnInit(): void {
    this.dropdownList = this.getAssignees()
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
  }

  getAssignees(){
    return this.assigneeList
  }


  
  // This code is for selecting assignees for the
  onItemSelect($event:any){
    console.log('$event is ',$event)
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  // Following is the code for sending ticket to the backend 
  onSubmit() {
    let submitTicket = this.addticketForm.value
    if (submitTicket.priority=='normal'){
      submitTicket.priority=2
    }
    
    else if(submitTicket.priority=='high'){
      submitTicket.priority=3
    }
    
    else if(submitTicket.priority=='low'){
      submitTicket.priority=1
    }
    
    // Here we call the add ticket api.
    this._addTicketService.addTickettoDataBase(submitTicket).subscribe((result)=>{
      console.log('response from addTicketAPI',result)
      if (result){
        alert('Ticket Added Successfully')
        // this.router.navigate(['/mainTable'])
      }

    })
    console.log('Submitted ticket',submitTicket);
    
  }

}
