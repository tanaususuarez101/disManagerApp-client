import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {RestService} from '../../services/rest.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.scss']
})
export class UserRequestComponent implements OnInit {
  private user: any;
  private selectedHours = 0;
  private teacherGroupsConfirm = [];
  fieldTeacherGroups = ['Titulación', 'Área', 'Asignatura', 'Grupo', 'Horas', 'H. Seleccionadas', 'Estado'];

  constructor(private rest: RestService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.loadTeacher();
  }

  private loadTeacher() {
    this.rest.getTeacherLoad(this.user.teacher_dni)
      .pipe(
        map(data => {
          return data.groups.map(element => {
            element.impart_hours = element.assigned_hours;
            element.deleteActiveLoad = false;
            return element;
          });
        })
      )
      .subscribe(data => {
        this.teacherGroupsConfirm = data;
        this.calculatorHoursImpart();
      });
  }
  calculatorHoursImpart() {
    this.selectedHours = 0;
    for (const group of this.teacherGroupsConfirm) { this.selectedHours += +group.impart_hours; }
  }
}
