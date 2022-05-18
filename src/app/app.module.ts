import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmittedDirective } from './shared/submitted.directive';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentsService } from './shared/assignments.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes:Routes = [
  {path: '',component: AssignmentsComponent},
  {path: 'home',component: AssignmentsComponent},
  {path:'add',component: AddAssignmentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    SubmittedDirective,
    SubmittedDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
   MatButtonModule,
   MatInputModule,
   MatFormFieldModule,
   FormsModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatListModule,
   MatCardModule,
   MatCheckboxModule,
   MatToolbarModule,
   RouterModule.forRoot(routes),
   ServiceWorkerModule.register('ngsw-worker.js', {
     enabled: environment.production,
     // Register the ServiceWorker as soon as the application is stable
     // or after 30 seconds (whichever comes first).
     registrationStrategy: 'registerWhenStable:30000'
   })
  ],
  providers: [AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }