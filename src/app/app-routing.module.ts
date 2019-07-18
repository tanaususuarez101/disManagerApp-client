import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TeacherDemandComponent} from './components/teacher-demand/teacher-demand.component';
import {TeacherLoadComponent} from './components/teacher-load/teacher-load.component';
import {TutorialComponent} from './components/tutorial/tutorial.component';
import {SubjectCoordinatorComponent} from './components/subject-coordinator/subject-coordinator.component';
import {TeacherHistoryComponent} from './components/teacher-history/teacher-history.component';
import {TeacherPDAComponent} from './components/teacher-pda/teacher-pda.component';
import {TeacherDemandDetailsComponent} from './components/teacher-demand-details/teacher-demand-details.component';
import {TeacherLoadDetailsComponent} from './components/teacher-load-details/teacher-load-details.component';
import {TeacherHistoryDetailsComponent} from './components/teacher-history-details/teacher-history-details.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './services/auth-guard.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MySubjectComponent} from './components/user-subject/user-subject.component';
import {UserRequestComponent} from './components/user-request/user-request.component';
import {UserCoordinatorComponent} from './components/user-coordinator/user-coordinator.component';
import {UserTutorialComponent} from './components/user-tutorial/user-tutorial.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'teacher-demand', component: TeacherDemandComponent, canActivate: [AuthGuard] },
      { path: 'teacher-load', component: TeacherLoadComponent, canActivate: [AuthGuard] },
      { path: 'tutorial', component: TutorialComponent, canActivate: [AuthGuard] },
      { path: 'subject-coordinator', component: SubjectCoordinatorComponent, canActivate: [AuthGuard]},
      { path: 'teacher-history', component: TeacherHistoryComponent, canActivate: [AuthGuard]},
      { path: 'teacher-PDA', component: TeacherPDAComponent, canActivate: [AuthGuard]},
      { path: 'teacher-demand-details/:area_cod/:subject_cod/:group_cod', component: TeacherDemandDetailsComponent,
        canActivate: [AuthGuard]},
      { path: 'teacher-load-details/:id', component: TeacherLoadDetailsComponent, canActivate: [AuthGuard]},
      { path: 'teacher-history-details/:id', component: TeacherHistoryDetailsComponent, canActivate: [AuthGuard]},
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: 'user-subject', component: MySubjectComponent, canActivate: [AuthGuard]},
      { path: 'user-request', component: UserRequestComponent, canActivate: [AuthGuard]},
      { path: 'user-coordinator', component: UserCoordinatorComponent, canActivate: [AuthGuard]},
      { path: 'user-tutorial', component: UserTutorialComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
