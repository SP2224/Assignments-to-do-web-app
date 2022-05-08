import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  name:string='';
  dueDate!: Date;
  assignments: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate=this.dueDate;
    assignment.submitted=false;
    this.assignments.push(assignment);
  }
}
