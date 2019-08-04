import { Component, OnInit } from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-load-pda',
  templateUrl: './load-pda.component.html',
  styleUrls: ['./load-pda.component.scss']
})
export class LoadPdaComponent implements OnInit {
  title = 'Carga de PDA';
  private fileToUpload: any;
  private uploadByte = 0;
  private activedLoad = false;
  private fileLabelName = 'Elegir lista de PDA';

  constructor(private rest: RestService) { }

  ngOnInit() {
  }

  ploadFileToActivity() {
    this.activedLoad = true;
    this.rest.postLoadPda(this.fileToUpload)
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

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null) {
      document.getElementById('fileLabel').innerHTML = this.fileToUpload['name'];
    } else {
      document.getElementById('fileLabel').innerHTML = this.fileLabelName;
      this.activedLoad = false;
    }
  }
}
