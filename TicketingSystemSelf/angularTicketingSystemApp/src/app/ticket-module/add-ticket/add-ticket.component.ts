import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router:Router) {
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

  onSubmit() {
    console.log(this.addticketForm.value);
    this.router.navigate(['/mainTable'])
  }

  onItemSelect($event:any){
    console.log('$event is ',$event)
  }

  onSelectAll(items: any) {
    console.log(items);
  }


}
