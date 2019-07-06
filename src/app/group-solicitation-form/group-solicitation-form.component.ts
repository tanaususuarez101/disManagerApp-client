import {Component, Input, OnChanges, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RestService} from '../rest.service';
import {StorageService} from '../storage.service';

declare var $: any;

@Component({
  selector: 'app-group-solicitation-form',
  templateUrl: './group-solicitation-form.component.html',
  styleUrls: ['./group-solicitation-form.component.scss']
})
export class GroupSolicitationFormComponent implements OnChanges {

  @Input() data: any;
  @Output() statusRequest = new EventEmitter();
  @ViewChild('closeBtn') closeBtn: ElementRef;
  solicitationForm: any;
  teacherName: any;

  constructor(public rest: RestService,
              private formBuilder: FormBuilder,
              private storage: StorageService) {}

  ngOnChanges() {
    const user = this.storage.getUser();
    console.log(user)
    this.teacherName = user['name'];
    this.createForm();
  }

  createForm() {
    this.solicitationForm = this.formBuilder.group({
      hours: this.data.group_hours - this.data.cover_hours
    });
  }

  confirmForm() {
    this.closeBtn.nativeElement.click();
    this.rest.postImpart({
      group_cod: this.data.group_cod,
      subject_cod: this.data.subject_cod,
      area_cod: this.data.knowledge_area_cod,
      hours: this.solicitationForm.get('hours').value
    }).subscribe(
      data => {
        this.statusRequest.emit(true);
      },
      err => {
        this.statusRequest.emit(false);
      }
    );
  }
}
