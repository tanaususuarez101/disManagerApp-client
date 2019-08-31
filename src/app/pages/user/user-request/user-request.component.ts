import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';

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
    this.loadTeacher();
    this.loadVenias();
  }

  private loadTeacher() {
    this.rest.getTeacherLoad(this.user.teacher_dni)
      .pipe(map(data => data.groups))
      .subscribe(data => {
        this.teacherGroupsConfirm = data;
        this.calculatorHoursImpart();
      });
  }
  calculatorHoursImpart() {
    this.selectedHours = 0;
    for (const group of this.teacherGroupsConfirm) { this.selectedHours += +group.assigned_hours; }
  }

  private loadVenias() {
    this.rest.getVeniaType1(this.user.teacher_dni).subscribe(venia => this.listVeniasI = venia);
    this.rest.getVeniaType2(this.user.teacher_dni).subscribe(venia => this.listVeniasII = venia);
  }
}
