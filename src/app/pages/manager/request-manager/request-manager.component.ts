import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {from, Observable} from 'rxjs';
import {concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-request-manager',
  templateUrl: './request-manager.component.html',
  styleUrls: ['./request-manager.component.scss']
})
export class RequestManagerComponent implements OnInit {
  private title = 'Solicitudes';

  private fields = ['Cód. grupo', 'Cód. Asignatura', 'Cód. Área de conocimiento', 'Profesor', 'Cód. Área Profesor', 'Horas', 'Venia',
    'Estado'];

  private teacherRequest = [];
  private allSelected = false;
  private availableBtn = false;


  constructor(private rest: RestService) { }

  ngOnInit() { this.loadData(); }

  private loadData() {
    this.rest.getTeacherLoadRequest().subscribe(rest => this.teacherRequest = rest);
  }

  /*
  * changer checkbox
  * */

  private selectedAllGroup($event) {
    this.availableBtn = $event.target.checked;
    this.allSelected = $event.target.checked;
    for (const group of this.teacherRequest) { group.activedChanger = $event.target.checked; }
  }

  private changeCheckboxGroup($event) {
    if (!$event.target.checked && this.allSelected) { this.allSelected = false; }
    if (this.activedAllGroup()) { this.allSelected = true; }
    for (const group of this.teacherRequest) {
      if (group.activedChanger) { this.availableBtn = true; break; } else { this.availableBtn = false; } }
  }

  private activedAllGroup(): boolean {
    for (const groupRequest of this.teacherRequest) { if (!groupRequest.activedChanger) { return false; } }
    return true;
  }
  private approve() {
    this.availableBtn = false;
    // tslint:disable-next-line:one-variable-per-declaration
    const dataForSend = [];
    for (const request of this.teacherRequest) {
      if (request.activedChanger) {
        dataForSend.push({
          group_cod: request.group_cod,
          subject_cod: request.subject_cod,
          area_cod: request.area_cod,
          teacher_dni: request.teacher_dni,
          status: {approved: true}
        });
      }
    }


    if (dataForSend.length > 0) {
      this.saveRequestOfGroup(dataForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allSelected = false;
    }
  }

  private reject() {
    this.availableBtn = false;
    // tslint:disable-next-line:one-variable-per-declaration
    const dataForSend = [];
    for (const request of this.teacherRequest) {
      if (request.activedChanger) {
        dataForSend.push({
          group_cod: request.group_cod,
          subject_cod: request.subject_cod,
          area_cod: request.area_cod,
          teacher_dni: request.teacher_dni,
          status: {rejected: true}
        });
      }
    }
    if (dataForSend.length > 0) {
      this.saveRequestOfGroup(dataForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allSelected = false;
    }
  }
  saveRequestOfGroup(dataForSend): Observable<any> {
    return from(dataForSend).pipe(
      concatMap(data => this.rest.updateTeacherLoadRequest(data['area_cod'], data['subject_cod'], data['group_cod'],
        data['teacher_dni'], data['status']))
    );
  }

}

