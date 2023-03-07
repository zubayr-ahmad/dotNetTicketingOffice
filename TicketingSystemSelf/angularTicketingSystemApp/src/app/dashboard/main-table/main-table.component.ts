import { Component } from '@angular/core';
import { MaintableService } from 'src/app/services/dashboard/maintable.service';




@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent {
  allTickets: any; // This will have an obj {} where obj is a list containing all tickets
  showMore: boolean = false; // Button to show more options

  constructor(private _maintableservice: MaintableService) {
    this._maintableservice.getTickets().subscribe((response: any) => {
      // this.allTickets = response;

      // Following Code is for testing pagination
      this.allTickets = response.results;
      // console.log(response)
    });
  }

 

  // Below is the code to show description and comments on button click
  expandedRows: any[] = [];

  toggleRow(index: number) {
    // Removes the index if it is included in expandedRows otherwise push it in
    if (this.expandedRows.includes(index)) {
      this.expandedRows.splice(this.expandedRows.indexOf(index), 1);
    } else {
      this.expandedRows.push(index);
    }
  }

  isRowExpanded(index: number) {
    return this.expandedRows.includes(index);
  }
}
