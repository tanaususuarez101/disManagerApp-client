import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-load-scheme',
  templateUrl: './load-scheme.component.html',
  styleUrls: ['./load-scheme.component.scss']
})
export class LoadSchemeComponent implements OnInit {
  private fileLabelName = 'Elegir esquema';
  private fileToUpload: any;

  private activedLoad: any;
  private showDetails: any;

  private message: any;
  private progress: number;


  constructor(private rest: RestService) { }

  ngOnInit() {
    this.initState();
  }

  initState() {
    this.activedLoad = false;
    this.showDetails = false;
  }

  ploadFileToActivity() {
    const elemFile = document.getElementById('upload-file');
    const elemSaved = document.getElementById('saved-file');
    elemFile.innerHTML = '<p style="margin-bottom: 0">Subiendo fichero... <i class="fa fa-spinner fa-spin"></i></p>';
    this.activedLoad = true;

    this.rest
      .postLoadScheme(this.fileToUpload)
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

  handleFileInput(files: FileList) {

    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null ) {
      document.getElementById('fileLabel').innerHTML = this.fileToUpload.name;
    } else {
      document.getElementById('fileLabel').innerHTML = this.fileLabelName;
      this.initState();
    }
  }

}
