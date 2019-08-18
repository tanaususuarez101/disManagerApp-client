import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {RestService} from '../../../services/rest.service';

@Component({
  selector: 'app-load-teacher-data',
  templateUrl: './load-teacher-data.component.html',
  styleUrls: ['./load-teacher-data.component.scss']
})
export class LoadTeacherDataComponent implements OnInit {

  @Output() public request = new EventEmitter<boolean>();

  activedLoad: any;
  uploadByte: any;
  private fileToUpload: File;
  private fileLabelName = 'Elegir lista de profesores';

  constructor(private rest: RestService) { }
  ngOnInit() { }

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
            this.uploadByte = (event.loaded / event.total) * 100;
          }
        },
        error => {
          console.log(error);
          alert('ERROR al guardar');
          return;
        });
  }
}
