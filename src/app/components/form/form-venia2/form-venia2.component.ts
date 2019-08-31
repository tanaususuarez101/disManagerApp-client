import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';

declare const $: any;

@Component({
  selector: 'app-form-venia2',
  templateUrl: './form-venia2.component.html',
  styleUrls: ['./form-venia2.component.scss']
})
export class FormVenia2Component implements OnInit {

  private knowledgeAreas: any;
  private subjects: any;
  private user: any;
  private formVenia2: any;

  constructor(private formBuilder: FormBuilder, private rest: RestService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.createForm();
    this.user = this.auth.getUser();
    this.rest.getAreas().subscribe(areas =>  this.knowledgeAreas = areas );
  }

  changesArea() {
    if (!this.formVenia2.value.area_cod) { return; }
    console.log('subject', this.subjects);
    this.rest.getSubjectsArea(this.formVenia2.value.area_cod).subscribe(areas => this.subjects = areas);
  }

  createForm() {
    this.formVenia2 = this.formBuilder.group({
      area_cod: ['', Validators.required],
      subject_cod: ['', Validators.required]
    });
  }

  sendRequest() {
    if (!this.formVenia2.value.area_cod && !this.formVenia2.value.subject_cod) { return; }
    console.log(this.formVenia2.value);
    this.rest.createVeniaType2(this.formVenia2.value).subscribe(
      data => $('#modal-request-venia').modal('hide'),
      err => alert('Error: no se pudo guardar')
    );
  }



}
