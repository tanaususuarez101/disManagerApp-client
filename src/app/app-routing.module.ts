import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

/***
 * COMMON
 **/

import {LoginComponent} from './components/common/login/login.component';
import {AuthGuard} from './services/auth-guard.service';
import {DashboardComponent} from './components/common/dashboard/dashboard.component';
import {NotFoundComponent} from './components/common/not-found/not-found.component';


/**
 * PROFILE
 **/

import {ProfileComponent} from './pages/user/profile/profile.component';
import {MySubjectComponent} from './pages/user/user-subject/user-subject.component';
import {UserRequestComponent} from './pages/user/user-request/user-request.component';
import {UserCoordinatorComponent} from './pages/user/user-coordinator/user-coordinator.component';
import {UserTutorialComponent} from './pages/user/user-tutorial/user-tutorial.component';

/**
 * MANAGER
 * */

import {LoadSchemeComponent} from './components/form/load-scheme/load-scheme.component';
import {UserManagerComponent} from './pages/manager/user-manager/user-manager.component';
import {LoadPdaComponent} from './components/form/load-pda/load-pda.component';
import {RequestManagerComponent} from './pages/manager/request-manager/request-manager.component';
import {DatabaseManagerComponent} from './pages/manager/database-manager/database-manager.component';

/**
 * PDO
 * */

import {TeacherDemandComponent} from './pages/pdo/teacher-demand/teacher-demand.component';
import {TeacherLoadComponent} from './pages/pdo/teacher-load/teacher-load.component';
import {TeacherTutorialComponent} from './pages/pdo/teacher-tutorial/teacher-tutorial.component';
import {SubjectCoordinatorComponent} from './pages/pdo/subject-coordinator/subject-coordinator.component';
import {TeacherPDAComponent} from './pages/pdo/teacher-pda/teacher-pda.component';
import {TeacherDemandDetailsComponent} from './pages/pdo/teacher-demand-details/teacher-demand-details.component';
import {TeacherLoadDetailsComponent} from './pages/pdo/teacher-load-details/teacher-load-details.component';
import {TeacherTutorialDetailsComponent} from './pages/pdo/teacher-tutorial-details/teacher-tutorial-details.component';




const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // PDO pages
      { path: 'teacher-demand', component: TeacherDemandComponent, canActivate: [AuthGuard] },
      { path: 'teacher-load', component: TeacherLoadComponent, canActivate: [AuthGuard] },
      { path: 'teacher-tutorial', component: TeacherTutorialComponent, canActivate: [AuthGuard] },
      { path: 'teacher-tutorial-details/:id', component: TeacherTutorialDetailsComponent, canActivate: [AuthGuard] },
      { path: 'subject-coordinator', component: SubjectCoordinatorComponent, canActivate: [AuthGuard]},
      { path: 'teacher-PDA', component: TeacherPDAComponent, canActivate: [AuthGuard]},
      { path: 'teacher-demand-details/:area_cod/:subject_cod/:group_cod', component: TeacherDemandDetailsComponent, canActivate: [AuthGuard]},
      { path: 'teacher-load-details/:id', component: TeacherLoadDetailsComponent, canActivate: [AuthGuard]},
      { path: 'load-scheme', component: LoadSchemeComponent, canActivate: [AuthGuard]},
      { path: 'load-pda', component: LoadPdaComponent, canActivate: [AuthGuard]},
      // Administrator Pages
      { path: 'database-manager', component: DatabaseManagerComponent, canActivate: [AuthGuard]},
      { path: 'user-manager', component: UserManagerComponent, canActivate: [AuthGuard]},
      { path: 'request-manager', component: RequestManagerComponent, canActivate: [AuthGuard]},
      // User Pages
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: 'user-subject', component: MySubjectComponent, canActivate: [AuthGuard]},
      { path: 'user-request', component: UserRequestComponent, canActivate: [AuthGuard]},
      { path: 'user-coordinator', component: UserCoordinatorComponent, canActivate: [AuthGuard]},
      { path: 'user-tutorial', component: UserTutorialComponent, canActivate: [AuthGuard]},
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
