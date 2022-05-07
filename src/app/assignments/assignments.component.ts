import { Component } from '@angular/core';
//import { Assignment } from './assignment.model;


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent{
  title="My assignment application";
  enabled=true;
  name:string='';
  getValue(val:string){
    //console.warn(val)
    this.name=val;
  }

  assignments = [{
      name : "One",
      dueDate: '2018-01-01',
      submitted : true
  },{
    name : "two",
    dueDate: '2019-01-01',
    submitted : false
  }
]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(name:string){
    console.log(name)
  }
 
}
