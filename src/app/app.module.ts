import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { TeacherDemandComponent } from './components/teacher-demand/teacher-demand.component';
import {RouterModule} from '@angular/router';
import { NavegationComponent } from './components/navegation/navegation.component';
import { TeacherLoadComponent } from './components/teacher-load/teacher-load.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { SubjectCoordinatorComponent } from './components/subject-coordinator/subject-coordinator.component';
import { TeacherHistoryComponent } from './components/teacher-history/teacher-history.component';
import { TeacherDemandDetailsComponent } from './components/teacher-demand-details/teacher-demand-details.component';
import { TeacherLoadDetailsComponent } from './components/teacher-load-details/teacher-load-details.component';
import { TeacherHistoryDetailsComponent } from './components/teacher-history-details/teacher-history-details.component';
import { TeacherPDAComponent } from './components/teacher-pda/teacher-pda.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HoursFilterPipe } from './pipes/hours-filter.pipe';
import { SearchTeacherPipe } from './pipes/search-teacher.pipe';
import { GroupSolicitationFormComponent } from './components/group-solicitation-form/group-solicitation-form.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MySubjectComponent } from './components/user-subject/user-subject.component';
import { UserRequestComponent } from './components/user-request/user-request.component';
import { OrdenBySubjectPipe } from './pipes/orden-by-subject.pipe';
import { UserCoordinatorComponent } from './components/user-coordinator/user-coordinator.component';
import { UserTutorialComponent } from './components/user-tutorial/user-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeacherDemandComponent,
    NavegationComponent,
    TeacherLoadComponent,
    TutorialComponent,
    SubjectCoordinatorComponent,
    TeacherHistoryComponent,
    TeacherPDAComponent,
    TeacherDemandDetailsComponent,
    TeacherLoadDetailsComponent,
    TeacherHistoryDetailsComponent,
    SearchFilterPipe,
    HoursFilterPipe,
    SearchTeacherPipe,
    GroupSolicitationFormComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    ProfileComponent,
    MySubjectComponent,
    UserRequestComponent,
    OrdenBySubjectPipe,
    UserCoordinatorComponent,
    UserTutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
