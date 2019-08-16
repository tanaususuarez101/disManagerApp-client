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
import { TeacherDemandDetailsComponent } from './components/teacher-demand-details/teacher-demand-details.component';
import { TeacherLoadDetailsComponent } from './components/teacher-load-details/teacher-load-details.component';
import { TeacherPDAComponent } from './components/teacher-pda/teacher-pda.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HoursFilterPipe } from './pipes/hours-filter.pipe';
import { SearchTeacherPipe } from './pipes/search-teacher.pipe';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MySubjectComponent } from './components/user-subject/user-subject.component';
import { UserRequestComponent } from './components/user-request/user-request.component';
import { OrdenBySubjectPipe } from './pipes/orden-by-subject.pipe';
import { UserCoordinatorComponent } from './components/user-coordinator/user-coordinator.component';
import { UserTutorialComponent } from './components/user-tutorial/user-tutorial.component';
import { LoadSchemeComponent } from './components/load-scheme/load-scheme.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { LoadPdaComponent } from './components/load-pda/load-pda.component';
import { LoadDataComponent } from './components/load-data/load-data.component';
import { LoadTeacherDataComponent } from './components/load-teacher-data/load-teacher-data.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TeacherEditComponent } from './components/teacher-edit/teacher-edit.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeacherDemandComponent,
    NavegationComponent,
    TeacherLoadComponent,
    TutorialComponent,
    SubjectCoordinatorComponent,
    TeacherPDAComponent,
    TeacherDemandDetailsComponent,
    TeacherLoadDetailsComponent,
    SearchFilterPipe,
    HoursFilterPipe,
    SearchTeacherPipe,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    ProfileComponent,
    MySubjectComponent,
    UserRequestComponent,
    OrdenBySubjectPipe,
    UserCoordinatorComponent,
    UserTutorialComponent,
    LoadSchemeComponent,
    UserSignupComponent,
    LoadPdaComponent,
    LoadDataComponent,
    LoadTeacherDataComponent,
    TutorialDetailsComponent,
    UserEditComponent,
    NewUserComponent,
    TeacherEditComponent,
    ModalAlertComponent,
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
