import { Component } from '@angular/core';
import { Assignment } from './assignment.model';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent{
  title="My assignment application";
  enabled=true;
  name:string='';
  dueDate!: Date;
  selectedAssignment!: Assignment;

  assignments:Assignment[] = [{name:"one",
                              dueDate : new Date('2020-01-25'),
                              submitted:true},
                              {name:"two",
                              dueDate : new Date('2021-02-24'),
                              submitted:false}
]
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
  setSelected(assignment:Assignment){
      this.selectedAssignment=assignment
  }
 
}
