import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {map} from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-subject',
  templateUrl: './user-subject.component.html',
  styleUrls: ['./user-subject.component.scss']
})
export class MySubjectComponent implements OnInit {

  group: any = [];
  fieldsAvailable = ['Titulación', 'Área', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir', 'H. Seleccionadas'];
  fieldProvitional = ['Titulación', 'Área', 'Asignatura', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir', 'H. Seleccionadas', 'Confirmado', 'Estado', 'Eliminar'];
  user: any;
  selectedGroup: any = [];
  selectedHours = 0;


  constructor(private rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    $('body').tooltip({ selector: '[data-toggle=tooltip]' });
    this.user = this.auth.getUser();
    this.rest.getGroups()
      .pipe(
        map(data => {
          return data.map(element => {
            return {
              area_cod: element.area_cod,
              area_name: element.area_name,
              group_cod: element.group_cod,
              group_type: element.group_type,
              group_hours: element.group_hours,
              subject_cod: element.subject_cod,
              subject_name: element.subject_name,
              subject_semester: element.subject_semester,
              subject_course: element.subject_course,
              subject_type: element.subject_type,
              university_name: element.university_name,
              cover_hours: element.cover_hours,
              cover_hours_calculator: element.cover_hours,
              impart_hours : '0',
              confirmed: false,
              state_solicitation: ''
            };
          });
        })
      )
      .subscribe(
        groups => {
          this.group = groups;
        }
      );

    this.rest.getTeacherLoad(this.user.teacher_dni)
      .pipe(
        map(data => {
          return data.groups.map(element => {
            return {
              area_cod: element.area_cod,
              area_name: element.area_name,
              group_cod: element.group_cod,
              group_type: element.group_type,
              group_hours: element.group_hours,
              subject_cod: element.subject_cod,
              subject_name: element.subject_name,
              subject_semester: element.subject_semester,
              subject_course: element.subject_course,
              subject_type: element.subject_type,
              university_name: element.university_name,
              cover_hours: element.cover_hours,
              cover_hours_calculator: element.cover_hours,
              impart_hours : element.assigned_hours,
              confirmed: true,
              state_solicitation: element.state_solicitation
            };
          });
        })
      )
      .subscribe(groupConfirmed => {

        this.selectedGroup = groupConfirmed;
        for (let i in groupConfirmed) {
          for (let j in this.group) {
            if (groupConfirmed[i] === this.group[j]) {
              this.group[i] = groupConfirmed[i];
              this.selectedGroup = groupConfirmed[i];
            }
          }
        }
      });
  }

  addSelectedGroups() {

    for (let i in this.selectedGroup) {
      if (this.selectedGroup[i].impart_hours <= 0) {
        this.deleterGroup(this.selectedGroup[i]);
      }
    }

    for (const i in this.group) {
      if (this.group[i].impart_hours > 0 ) {
        this.selectedGroup.push(this.group[i]);
      }
      this.group[i].cover_hours_calculator = this.group[i].cover_hours + this.group[i].impart_hours;
    }
    this.resetSelectedHours();
  }

  private resetSelectedHours() {
    this.selectedHours = 0;
    for (let i in this.selectedGroup) {
      this.selectedHours += this.selectedGroup[i].impart_hours;
    }
  }

  confirmSelection() {
    const groupConfirm = [];
    for (let i in this.group) {
      if (!this.group[i].confirmed && this.group[i].impart_hours > 0) {
        groupConfirm.push({
          area_cod: this.group[i].area_cod,
          subject_cod: this.group[i].subject_cod,
          group_cod: this.group[i].group_cod,
          selected_hours: this.group[i].impart_hours
        });
      }
    }
    this.rest.postTeacherLoad(groupConfirm)
      .subscribe(
        data => console.log('Respuesta:', data)
      );
  }

  deleterGroup(obj: any) {
    console.log('delete pulsado');
    this.selectedGroup = this.selectedGroup.filter(item => {
      console.log(obj === item);
      if (obj === item) {
        item.impart_hours = 0;
        return false;
      } else {
        return true;
      }
    });
    this.resetSelectedHours();
  }
}
