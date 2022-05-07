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
  dueDate:Date | undefined;
  

  assignments:Assignment[] = [{
      name : "One",
      //dueDate: new Date('2018-01-01'),
      submitted : true
  },{
    name : "two",
    //dueDate: new Date('2019-01-01'),
    submitted : false
  }
]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const assignment = new Assignment();
    assignment.name = this.name;
    //assignment.dueDate=this.dueDate;
    assignment.submitted=false;
    this.assignments.push(assignment);
  }
 
}
