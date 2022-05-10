import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

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

  constructor(private loggingService: LoggingService) { }

  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }
  addAssignments(assignment: Assignment): Observable<string>{
    this.assignments.push(assignment);
    this.loggingService.log(assignment.name, 'added')
    return of('assignment added!');
  }

updateAssignments(assignment: Assignment): Observable<string>{
 this.assignments.forEach((assignment,i) => {
    if(assignment === assignment){
      this.assignments[i] = assignment;
    }
 } );
 this.loggingService.log(assignment.name,'updated');
 return of('assignment updated!');
}
deleteAssignment(deleteAssignment: Assignment): Observable<string>{
  this.assignments.forEach((assignment,i)=>{
    if(assignment === deleteAssignment){
      this.assignments.splice(i,1);
    }
  
  });
  this.loggingService.log(deleteAssignment.name,'deleted')
  return of('assignment deleted!');
}
}
