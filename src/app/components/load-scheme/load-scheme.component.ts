import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-load-scheme',
  templateUrl: './load-scheme.component.html',
  styleUrls: ['./load-scheme.component.scss']
})
export class LoadSchemeComponent implements OnInit {
  title = 'Cargar esquema en la base de datos';
  private fileToUpload: any;
  private uploadByte = 0;
  private activedLoad = false;

  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null) {
      document.getElementById('fileLabel').innerHTML = this.fileToUpload['name'];
    } else {
      document.getElementById('fileLabel').innerHTML = 'Elegir archivo';
      this.activedLoad = false;
    }
  }

  ploadFileToActivity() {
    this.activedLoad = true;
    this.rest.postLoadScheme(this.fileToUpload)
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
