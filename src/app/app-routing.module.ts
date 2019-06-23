import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TeacherDemandComponent} from './teacher-demand/teacher-demand.component';
import {TeacherLoadComponent} from './teacher-load/teacher-load.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {SubjectCoordinatorComponent} from './subject-coordinator/subject-coordinator.component';
import {TeacherHistoryComponent} from './teacher-history/teacher-history.component';
import {TeacherPDAComponent} from './teacher-pda/teacher-pda.component';
import {TeacherDemandDetailsComponent} from './teacher-demand-details/teacher-demand-details.component';
import {TeacherLoadDetailsComponent} from './teacher-load-details/teacher-load-details.component';
import {TeacherHistoryDetailsComponent} from './teacher-history-details/teacher-history-details.component';


const routes: Routes = [
  { path: '', component: TeacherDemandComponent },
  { path: 'teacher-demand', component: TeacherDemandComponent },
  { path: 'teacher-load', component: TeacherLoadComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'subject-coordinator', component: SubjectCoordinatorComponent},
  { path: 'teacher-history', component: TeacherHistoryComponent},
  { path: 'teacher-PDA', component: TeacherPDAComponent},
  { path: 'teacher-demand-details/:area_cod/:subject_cod/:group_cod', component: TeacherDemandDetailsComponent},
  { path: 'teacher-load-details/:id', component: TeacherLoadDetailsComponent},
  { path: 'teacher-history-details/:id', component: TeacherHistoryDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
