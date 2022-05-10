import { Component } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent{
  title="My assignment application";
  enabled=true;
  formVisible = false;
  
  selectedAssignment!: Assignment;

  assignments!: Assignment[];

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }
  getAssignments(){
    this.assignmentService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }
  setSelected(assignment:Assignment){
      this.selectedAssignment=assignment;
  }
  onAddBtnClick(){
    this.formVisible =true;
    //this.selectedAssignment=assignment;
  }
  onNewAssignment(event: Assignment){
    this.assignmentService.addAssignments(event).subscribe(success => console.log(success))
    this.formVisible=false;

  }
 
}
