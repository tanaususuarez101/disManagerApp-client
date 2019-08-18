import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {map} from 'rxjs/operators';
import {element} from 'protractor';

@Component({
  selector: 'app-user-coordinator',
  templateUrl: './user-coordinator.component.html',
  styleUrls: ['./user-coordinator.component.scss']
})
export class UserCoordinatorComponent implements OnInit {

  private fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Semestre', 'Coordinador de asignatura', 'Responsable de prácticas'];
  private title = 'Coordinadores';
  private user: any;
  private subjects = [];
  private selected = { coordinator: [], responsible: [] };
  private activeLoad = false;


  constructor(public rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.rest.getSubjects()
      .subscribe(data => {
        this.subjects = data[ "subject" ];
        for (let element of this.subjects) {
          if (element.coordinator_dni === this.user.teacher_dni) {
            this.selected.coordinator.push({subject_cod: element.subject_cod, area_cod: element.area_cod});
          }
          if (element.responsible_dni === this.user.teacher_dni) {
            this.selected.responsible.push({subject_cod: element.subject_cod, area_cod: element.area_cod});
          }
        }
    });

  }

  private selectedCoordinator(checkbox, item: any) {
    if (checkbox.checked) {
      this.selected.coordinator.push({subject_cod: item.subject_cod, area_cod: item.area_cod});
    } else {
      this.selected.coordinator = this.selected.coordinator.filter(obj => {
        return obj.subject_cod !== item.subject_cod || obj.area_cod !== item.area_cod;
      });
    }
  }

  private selectedResponsible(checkbox, item: any) {
    if (checkbox.checked) {
      this.selected.responsible.push({subject_cod: item.subject_cod, area_cod: item.area_cod});
    } else {
      this.selected.responsible = this.selected.responsible.filter(obj => {
        return obj.subject_cod !== item.subject_cod || obj.area_cod !== item.area_cod;
      });
    }
  }

  private sendDataData() {
    this.activeLoad = true;
    this.rest.createCoordinatorAndResponsible(this.selected)
      .subscribe(
        data => {
          this.activeLoad = false;
          alert('Cambios guardados');

        },
        err => {
          this.activeLoad = false;
          alert('Error al guardar los datos');
        }
        );
  }
}
