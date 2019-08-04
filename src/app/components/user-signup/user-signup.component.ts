import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../../services/rest.service';
import {HttpEventType} from '@angular/common/http';

declare const $: any;

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  private title = 'Añadir usuario';
  private isTeacher = false;
  private signInForm: any;
  private fileForm: any;
  private onlyUser = true;
  private fileToUpload: File = null;
  private uploadByte = 0;
  private activedLoad = false;

  constructor(private  formBuilder: FormBuilder, private rest: RestService) { }

  ngOnInit() {
    this.createUserForm();
  }
  selectedTeacher(event) {
    this.isTeacher = event.target.checked;
    this.createUserForm();
  }

  createUserForm() {

    if (this.isTeacher) {
      this.signInForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        dni: ['', Validators.required],
        name: [''],
        surnames: [''],
        area_cod: [''],
        potential: [''],
        tutorial_hours: [''],
        admin: [false]
      });
    } else {
      this.signInForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        admin: [false]
      });
    }
  }

  addNewUser() {
    console.log(this.signInForm.value);
    this.rest.postUser(this.signInForm.value)
      .subscribe(
        resp => {
          alert('Usuario guardado');
        },
        err => {
          alert('ERROR AL GUARDAR EL USUARIO');
        }
      );
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null) {
      document.getElementById('fileLabel').innerHTML = this.fileToUpload['name'];
    } else {
      document.getElementById('fileLabel').innerHTML = 'Elegir archivo';
      this.activedLoad = false;
      console.log(this.activedLoad);
    }

  }
  ploadFileToActivity() {
    this.activedLoad = true;
    this.rest.postListTeacher(this.fileToUpload)
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log(event);
            this.uploadByte = (event.loaded / event.total) * 100;
            console.log(event.loaded); //uploaded bytes
            console.log(event.total); //total bytes to upload
            console.log('upload process ', this.uploadByte);
          }
        },
      error => {
          console.log(error);
          alert('ERROR al guardar');
          return;
    });
  }


}
