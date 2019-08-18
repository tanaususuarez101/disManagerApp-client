import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { TeacherDemandComponent } from './components/pdo-pages/teacher-demand/teacher-demand.component';
import {RouterModule} from '@angular/router';
import { NavegationComponent } from './components/common/navegation/navegation.component';
import { TeacherLoadComponent } from './components/pdo-pages/teacher-load/teacher-load.component';
import { TutorialComponent } from './components/pdo-pages/tutorial/tutorial.component';
import { SubjectCoordinatorComponent } from './components/pdo-pages/subject-coordinator/subject-coordinator.component';
import { TeacherDemandDetailsComponent } from './components/pdo-pages/teacher-demand-details/teacher-demand-details.component';
import { TeacherLoadDetailsComponent } from './components/pdo-pages/teacher-load-details/teacher-load-details.component';
import { TeacherPDAComponent } from './components/pdo-pages/teacher-pda/teacher-pda.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HoursFilterPipe } from './pipes/hours-filter.pipe';
import { SearchTeacherPipe } from './pipes/search-teacher.pipe';
import { LoginComponent } from './components/common/login/login.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ProfileComponent } from './components/user-pages/profile/profile.component';
import { MySubjectComponent } from './components/user-pages/user-subject/user-subject.component';
import { UserRequestComponent } from './components/user-pages/user-request/user-request.component';
import { OrdenBySubjectPipe } from './pipes/orden-by-subject.pipe';
import { UserCoordinatorComponent } from './components/user-pages/user-coordinator/user-coordinator.component';
import { UserTutorialComponent } from './components/user-pages/user-tutorial/user-tutorial.component';
import { LoadSchemeComponent } from './components/form/load-scheme/load-scheme.component';
import { UserManagerComponent } from './components/manager-pages/user-manager/user-manager.component';
import { LoadPdaComponent } from './components/form/load-pda/load-pda.component';
import { LoadDataComponent } from './components/manager-pages/load-data/load-data.component';
import { LoadTeacherDataComponent } from './components/modal/load-teacher-data/load-teacher-data.component';
import { TutorialDetailsComponent } from './components/pdo-pages/tutorial-details/tutorial-details.component';
import { UserEditComponent } from './components/modal/user-edit/user-edit.component';
import { NewUserComponent } from './components/modal/new-user/new-user.component';
import { TeacherEditComponent } from './components/modal/teacher-edit/teacher-edit.component';
import { ModalAlertComponent } from './components/modal/modal-alert/modal-alert.component';
import { LogOutComponent } from './components/modal/log-out/log-out.component';

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
