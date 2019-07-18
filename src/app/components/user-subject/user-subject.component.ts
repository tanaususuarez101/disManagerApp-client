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

  private group: any;
  fields = ['Titulación', 'Área', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir', 'H. Seleccionadas'];
  user: any;
  SelectedGroup: any = [];
  fullSelected = 0;

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
              selected_hours : '0',
              confirmed: false
            };
          });
        })
      )
      .subscribe(
        groups => {
          console.log(groups);
          this.group = groups;
        }
      );
  }

  selectedGroups() {
    for (const i in this.group) {
      if (this.group[i].selected_hours > 0) {
        this.SelectedGroup.push(this.group[i]);
      }
    }

    this.fullSelected = 0;
    for (const i in this.SelectedGroup) {
      this.fullSelected += this.SelectedGroup[i].selected_hours;
    }
  }

  confirmSelection() {
    const groupConfirm = [];
    for (let i in this.SelectedGroup) {
      if (!this.group[i].confirmed) {
        groupConfirm.push({
          area_cod: this.group[i].area_cod,
          subject_cod: this.group[i].subject_cod,
          group_cod: this.group[i].group_cod,
          selected_hours: this.group[i].selected_hours
        });
      }
    }
    console.log(groupConfirm);
    this.rest.postTeacherLoad(groupConfirm)
      .subscribe(
        data => console.log('Respuesta:', data)
      );
  }
}
