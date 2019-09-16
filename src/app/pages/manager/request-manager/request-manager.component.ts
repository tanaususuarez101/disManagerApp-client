import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {forkJoin, from, Observable} from 'rxjs';
import {map, concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-request-manager',
  templateUrl: './request-manager.component.html',
  styleUrls: ['./request-manager.component.scss']
})
export class RequestManagerComponent implements OnInit {
  private title = 'Solicitudes';

  private fields = ['Cód. grupo', 'Cód. Asignatura', 'Cód. Área de conocimiento', 'Profesor', 'Cód. Área Profesor', 'Horas', 'Venia',
    'Estado'];
  private fieldVeniaI = ['Código de area', 'Profesor', 'Estado'];
  private fieldVeniaII = ['Código Área', 'Código Asignatura', 'Profesor', 'Estado'];

  private teacherRequest = [];
  private listVeniasI = [];
  private listVeniasII = [];

  private allSelected = false;
  private allVenia1 = false;
  private allVenia2 = false;

  private availableBtn = false;


  constructor(private rest: RestService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    forkJoin(
      this.rest.getTeacherLoadRequest(),
      this.rest.getAllVeniaType1(),
      this.rest.getAllVeniaType2()
    ).subscribe(data => {
      this.teacherRequest = this.join(data[0], data[1], data[2]);
      this.listVeniasI = data[1].map(value => { value.activedChanger = false; return value; } );
      this.listVeniasII = data[2].map(value => { value.activedChanger = false; return value; } );
    });
  }

  private join(request, venia1, venia2) {
    return request.map(value => {
      value.activedChanger = false;
      if (value.area_cod !== value.teacher_area_cod) {
        const res2 = venia2.find(data => data.teacher_dni === value.teacher_dni && data.area_cod === value.area_cod
          && data.subject_cod === value.subject_cod);

        value.venia = !!res2;
        const res1 = venia1.find(data => data.teacher_dni === value.teacher_dni && data.area_cod === value.area_cod);
        if (res1) { value.venia = true; }
      }
      return value;
    });
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


  private selectedAllVenia1($event) {
    this.availableBtn = $event.target.checked;
    this.allVenia1 = $event.target.checked;
    for (const v of this.listVeniasI) { v.activedChanger = $event.target.checked; }
  }

  private changeCheckboxVenia1($event) {
    if (!$event.target.checked && this.allVenia1) { this.allVenia1 = false; }
    if (this.activedAllVenia1()) { this.allVenia1 = true; }
    for (const v of this.listVeniasI) {
      if (v.activedChanger) { this.availableBtn = true; break; } else { this.availableBtn = false; } }
  }

  private activedAllVenia1(): boolean {
    for (const v of this.listVeniasI) { if (!v.activedChanger) { return false; } }
    return true;
  }

  private selectedAllVenia2($event) {
    this.availableBtn = $event.target.checked;
    this.allVenia2 = $event.target.checked;
    for (const v of this.listVeniasII) { v.activedChanger = $event.target.checked; }
  }

  private changeCheckboxVenia2($event) {
    if (!$event.target.checked && this.allVenia2) { this.allVenia2 = false; }
    if (this.activedAllVenia2()) { this.allVenia2 = true; }
    for (const v of this.listVeniasII) {
      if (v.activedChanger) { this.availableBtn = true; break; } else { this.availableBtn = false; } }
  }

  private activedAllVenia2(): boolean {
    for (const v of this.listVeniasII) { if (!v.activedChanger) { return false; } }
    return true;
  }

  private approve() {
    this.availableBtn = false;
    // tslint:disable-next-line:one-variable-per-declaration
    const dataForSend = [], venia1ForSend = [], venia2ForSend = [];
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

    for (const request of this.listVeniasI) {
      if (request.activedChanger) {
        venia1ForSend.push({
          area_cod: request.area_cod,
          teacher_dni: request.teacher_dni,
          status: {approved: true}
        });
      }
    }

    for (const request of this.listVeniasII) {
      if (request.activedChanger) {
        venia2ForSend.push({
          area_cod: request.area_cod,
          subject_cod: request.subject_cod,
          teacher_dni: request.teacher_dni,
          status: {approved: true}
        });
      }
    }


    if (dataForSend.length > 0) {
      this.saveRequestOfGroup(dataForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allSelected = false;
    }

    if (venia1ForSend.length > 0) {
      this.saveRequestOfVenia1(venia1ForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allVenia1 = false;
    }
    if (venia2ForSend.length > 0) {
      this.saveRequestOfVenia2(venia2ForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allVenia2 = false;
    }
  }

  private reject() {
    this.availableBtn = false;
    // tslint:disable-next-line:one-variable-per-declaration
    const dataForSend = [], venia1ForSend = [], venia2ForSend = [];
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

    for (const request of this.listVeniasI) {
      if (request.activedChanger) {
        venia1ForSend.push({
          area_cod: request.area_cod,
          teacher_dni: request.teacher_dni,
          status: {rejected: true}
        });
      }
    }

    for (const request of this.listVeniasII) {
      if (request.activedChanger) {
        venia2ForSend.push({
          area_cod: request.area_cod,
          subject_cod: request.subject_cod,
          teacher_dni: request.teacher_dni,
          status: {rejected: true}
        });
      }
    }


    if (dataForSend.length > 0) {
      this.saveRequestOfGroup(dataForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allSelected = false;
    }

    if (venia1ForSend.length > 0) {
      this.saveRequestOfVenia1(venia1ForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allVenia1 = false;
    }
    if (venia2ForSend.length > 0) {
      this.saveRequestOfVenia2(venia2ForSend).subscribe(res => res, er => er, () => this.loadData());
      this.allVenia2 = false;
    }
  }

  saveRequestOfGroup(dataForSend): Observable<any> {
    return from(dataForSend).pipe(
      concatMap(data => this.rest.updateTeacherLoadRequest(data['area_cod'], data['subject_cod'], data['group_cod'],
        data['teacher_dni'], data['status']))
    );
  }

  saveRequestOfVenia1(dataForSend): Observable<any> {
    return from(dataForSend).pipe(concatMap(data => this.rest.updateVeniaType1(data['area_cod'], data['teacher_dni'], data['status'] )));
  }

  saveRequestOfVenia2(dataForSend): Observable<any> {
    return from(dataForSend).pipe(
      concatMap(data => this.rest.updateVeniaType2(data['area_cod'], data['subject_cod'], data['teacher_dni'], data['status'] ))
    );
  }
}

