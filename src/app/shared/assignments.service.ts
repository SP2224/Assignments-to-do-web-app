import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  
  
  assignments:Assignment[] = [{name:"one",
  dueDate : new Date('2020-01-25'),
  submitted:true},
  {name:"two",
  dueDate : new Date('2021-02-24'),
  submitted:false}
];

  constructor() { }

  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }
  addAssignments(assignment: Assignment): Observable<string>{
    this.assignments.push(assignment);
    return of('assignment added!');
  }

updateAssignments(assignment: Assignment): Observable<string>{
 this.assignments.forEach((assignment,i) => {
    if(assignment === assignment){
      this.assignments[i] = assignment;
    }
 } );
 return of('assignment updated!');
}
}
