import { Component, OnInit } from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {RestService} from '../../../services/rest.service';

@Component({
  selector: 'app-load-teacher',
  templateUrl: './load-teacher.component.html',
  styleUrls: ['./load-teacher.component.scss']
})
export class LoadTeacherComponent implements OnInit {

  private fileLabelName = 'Elegir lista de profesores';

  private fileToUpload: File;

  private activedLoad: any;
  private showDetails: any;

  private message = '';
  private progress: any;

  constructor(private rest: RestService) { }

  ngOnInit() { this.initState(); }

  initState() {
    this.activedLoad = false;
    this.showDetails = false;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null) {
      document.getElementById('fileTeacher').innerHTML = this.fileToUpload['name'];
    } else {
      document.getElementById('fileTeacher').innerHTML = this.fileLabelName;
      this.activedLoad = false;
      console.log(this.activedLoad);
    }
  }

  ploadFileToActivity() {
    const elemFile = document.getElementById('upload-teacher');
    const elemSaved = document.getElementById('saved-teacher');

    elemFile.innerHTML = '<p style="margin-bottom: 0">Subiendo fichero... <i class="fa fa-spinner fa-spin"></i></p>';
    this.activedLoad = true;

    this.rest.postListTeacher(this.fileToUpload)
      .subscribe(
        event => {

          switch (event.type) {

            case HttpEventType.UploadProgress:
              this.progress = Math.round(100 * event.loaded / event.total);
              console.log({ status: 'progress', message: this.progress });

              if (this.progress !== 100) {
                elemFile.innerHTML = '<p style="margin: 0">Subiendo fichero... <i class="fa fa-spinner fa-spin"></i></p>';
              } else {
                elemFile.innerHTML = '<p style="margin: 0">Fichero subido <i style="color:green"  class="fa fa-check"></i></p>';
                elemSaved.innerHTML = '<p style="margin: 0">Guardando datos... <i class="fa fa-spinner fa-spin"></i></p>';
              }

              break;

            case HttpEventType.Response:
              this.showDetails = true;
              this.activedLoad = false;
              this.message = event.body.message;
              elemSaved.innerHTML = '<p style="margin: 0">Datos guardados satisfactoriamente <i style="color:green"  class="fa fa-check">' +
                '</i></p>';
              break;
          }
        },
        error => {
          this.activedLoad = false;
          elemFile.innerHTML = '<p style="margin: 0">Error al subir el fichero <i style="color:red"  class="fa fa-close"></i></p>';
          elemSaved.innerHTML = '';
        },
      );
  }
}
