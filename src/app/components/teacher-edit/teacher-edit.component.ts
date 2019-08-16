import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {RestService} from '../../services/rest.service';

declare const $: any;

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.scss']
})
export class TeacherEditComponent implements OnInit, OnChanges {
  @Input() public teacher: any;
  @Output() public request = new EventEmitter<boolean>();

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.initTeacher();
  }

  ngOnChanges() {
    this.initTeacher();
  }

  private initTeacher() {
    if (!this.teacher) this.teacher = {teacher_dni: '', teacher_name: '', teacher_surnames: '', teacher_potential: '', tutorial_hours: '',
    area_cod: ''};
  }

  updateTeacher() {
    if (this.teacher != null ) {
      this.rest.updateTeacher(this.teacher.teacher_dni, this.teacher)
        .subscribe(
          data => {
            $('#modal-teacher-edit').modal('hide');
            this.request.emit(true);
          },err => alert('Error al guardar usuario'));
    }
  }
}
