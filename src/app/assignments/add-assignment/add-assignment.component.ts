import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Assignment } from '../assignment.model';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  name:string='';
  dueDate!: Date;
  //assignments: any;
  @Output() newAssignment =new EventEmitter<Assignment>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate=this.dueDate;
    assignment.submitted=false;
    this.newAssignment.emit(assignment);
  }
}
