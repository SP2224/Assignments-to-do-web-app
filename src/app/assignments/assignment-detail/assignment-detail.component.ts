import { Component, Input, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
       @Input()
  passedAssignment!: Assignment;
  constructor(private assignmentService: AssignmentsService) {

   }

  ngOnInit(): void {
  }
  onAssignmentSubmitted(){
    this.passedAssignment.submitted=true;

    this.assignmentService.updateAssignments(this.passedAssignment)
    .subscribe((res: any) => console.log(res));
  }
  onDelete(){
    this.assignmentService.deleteAssignment(this.passedAssignment).subscribe(res=>console.log(res));
    //this.passedAssignment = null;
  }
}
