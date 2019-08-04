import { Component, OnInit } from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-load-teacher-data',
  templateUrl: './load-teacher-data.component.html',
  styleUrls: ['./load-teacher-data.component.scss']
})
export class LoadTeacherDataComponent implements OnInit {
  activedLoad: any;
  uploadByte: any;
  private fileToUpload: File;
  private fileLabelName = 'Elegir lista de profesores';

  constructor(private rest: RestService) { }

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null) {
      document.getElementById('fileLabel').innerHTML = this.fileToUpload['name'];
    } else {
      document.getElementById('fileLabel').innerHTML = this.fileLabelName;
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
