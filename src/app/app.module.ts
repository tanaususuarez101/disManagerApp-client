import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { TeacherDemandComponent } from './pages/pdo/teacher-demand/teacher-demand.component';
import {RouterModule} from '@angular/router';
import { NavegationComponent } from './components/common/navegation/navegation.component';
import { TeacherLoadComponent } from './pages/pdo/teacher-load/teacher-load.component';
import { TutorialComponent } from './pages/pdo/tutorial/tutorial.component';
import { SubjectCoordinatorComponent } from './pages/pdo/subject-coordinator/subject-coordinator.component';
import { TeacherDemandDetailsComponent } from './pages/pdo/teacher-demand-details/teacher-demand-details.component';
import { TeacherLoadDetailsComponent } from './pages/pdo/teacher-load-details/teacher-load-details.component';
import { TeacherPDAComponent } from './pages/pdo/teacher-pda/teacher-pda.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HoursFilterPipe } from './pipes/hours-filter.pipe';
import { SearchTeacherPipe } from './pipes/search-teacher.pipe';
import { LoginComponent } from './components/common/login/login.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { MySubjectComponent } from './pages/user/user-subject/user-subject.component';
import { UserRequestComponent } from './pages/user/user-request/user-request.component';
import { OrdenBySubjectPipe } from './pipes/orden-by-subject.pipe';
import { UserCoordinatorComponent } from './pages/user/user-coordinator/user-coordinator.component';
import { UserTutorialComponent } from './pages/user/user-tutorial/user-tutorial.component';
import { LoadSchemeComponent } from './components/form/load-scheme/load-scheme.component';
import { UserManagerComponent } from './pages/manager/user-manager/user-manager.component';
import { LoadPdaComponent } from './components/form/load-pda/load-pda.component';
import { LoadDataComponent } from './pages/manager/load-data/load-data.component';
import { LoadTeacherDataComponent } from './components/modal/load-teacher-data/load-teacher-data.component';
import { TutorialDetailsComponent } from './pages/pdo/tutorial-details/tutorial-details.component';
import { UserEditComponent } from './components/modal/user-edit/user-edit.component';
import { NewUserComponent } from './components/modal/new-user/new-user.component';
import { TeacherEditComponent } from './components/modal/teacher-edit/teacher-edit.component';
import { ModalAlertComponent } from './components/modal/modal-alert/modal-alert.component';
import { LogOutComponent } from './components/modal/log-out/log-out.component';
import { RequestVeniaComponent } from './components/modal/request-venia/request-venia.component';
import { FormVenia1Component } from './components/form/form-venia1/form-venia1.component';
import { FormVenia2Component } from './components/form/form-venia2/form-venia2.component';
import { RequestManagerComponent } from './pages/manager/request-manager/request-manager.component';

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
    UserManagerComponent,
    LoadPdaComponent,
    LoadDataComponent,
    LoadTeacherDataComponent,
    TutorialDetailsComponent,
    UserEditComponent,
    NewUserComponent,
    TeacherEditComponent,
    ModalAlertComponent,
    LogOutComponent,
    RequestVeniaComponent,
    FormVenia1Component,
    FormVenia2Component,
    RequestManagerComponent,
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
