import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { TeacherDemandComponent } from './teacher-demand/teacher-demand.component';
import { RouterModule } from '@angular/router';
import { NavegationComponent } from './navegation/navegation.component';
import { TeacherLoadComponent } from './teacher-load/teacher-load.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { SubjectCoordinatorComponent } from './subject-coordinator/subject-coordinator.component';
import { TeacherHistoryComponent } from './teacher-history/teacher-history.component';
import { TeacherDemandDetailsComponent } from './teacher-demand-details/teacher-demand-details.component';
import { TeacherLoadDetailsComponent } from './teacher-load-details/teacher-load-details.component';
import { TeacherHistoryDetailsComponent } from './teacher-history-details/teacher-history-details.component';
import { TeacherPDAComponent } from './teacher-pda/teacher-pda.component';
import {FormsModule} from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { HoursFilterPipe } from './pipes/hours-filter.pipe';

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
    HoursFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
