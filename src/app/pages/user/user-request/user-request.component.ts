import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {forkJoin} from 'rxjs';
import {TeacherDemandComponent} from '../../pdo/teacher-demand/teacher-demand.component';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.scss']
})
export class UserRequestComponent implements OnInit {
  private fieldTeacherGroups = ['Titulación', 'Área', 'Asignatura', 'Grupo', 'Horas', 'H. Seleccionadas', 'Estado'];
  private user: any;
  private selectedHours = 0;
  private teacherGroupsConfirm = [];

  constructor(private rest: RestService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();

    this.rest.getTeacherLoad(this.user.teacher_dni)
      .pipe(map(data => {
        for ( const subject of data.groups) { subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod); }
        return data.groups;
      }))
      .subscribe( data => {
        this.teacherGroupsConfirm = data;
        for ( const subject of this.teacherGroupsConfirm) { subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod); }
        this.calculatorHoursImpart();
    });

  }

  calculatorHoursImpart() {
    this.selectedHours = 0;
    for (const group of this.teacherGroupsConfirm) { this.selectedHours += +group.assigned_hours; }
  }
}
