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
  private fieldVeniaI = ['Área de conocimiento', 'Código', 'Estado'];
  private fieldVeniaII = ['Código Área', 'Código Asignatura', 'Asignatura', 'Estado'];
  private user: any;
  private selectedHours = 0;
  private teacherGroupsConfirm = [];
  private listVeniasI = [];
  private listVeniasII = [];

  constructor(private rest: RestService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();

    forkJoin(
      this.rest.getTeacherLoad(this.user.teacher_dni).pipe(map(data => data.groups)),
      this.rest.getVeniaType1(this.user.teacher_dni),
      this.rest.getVeniaType2(this.user.teacher_dni)
    ).subscribe( data => {
      this.teacherGroupsConfirm = data[0];
      for ( const subject of this.teacherGroupsConfirm) { subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod); }
      this.listVeniasI = data[1];
      this.listVeniasII = data[2];
      this.calculatorHoursImpart();
    });
  }

  calculatorHoursImpart() {
    this.selectedHours = 0;
    for (const group of this.teacherGroupsConfirm) { this.selectedHours += +group.assigned_hours; }
  }
}
