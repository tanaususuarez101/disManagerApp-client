import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';

declare const $: any;

@Component({
  selector: 'app-form-venia1',
  templateUrl: './form-venia1.component.html',
  styleUrls: ['./form-venia1.component.scss']
})
export class FormVenia1Component implements OnInit {
  private formVenia1: any;
  private knowledgeArea: any;
  private user: any;

  constructor(private formBuilder: FormBuilder, private rest: RestService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.createForm();
    this.user = this.auth.getUser();
    this.rest.getAreas().subscribe(areas =>  this.knowledgeArea = areas );
  }

  createForm() {
    this.formVenia1 = this.formBuilder.group({
      area_cod: ['', Validators.required],
    });
  }

  sendRequest() {
    if (! this.formVenia1.value) { return; }
    this.rest.createVeniaType1(this.formVenia1.value).subscribe(
      data => $('#modal-request-venia').modal('hide'),
      err => alert('Error: no se pudo guardar')
    );
  }
}
