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
  private uploadByte: any;

  private activedLoad: any;
  private showDetails: any;
  private loading: any;

  private message: any;


  constructor(private rest: RestService) { }

  ngOnInit() {
    this.initState();
  }

  initState() {
    this.uploadByte = 0;
    this.activedLoad = false;
    this.loading = true;
    this.showDetails = false;
  }

  ploadFileToActivity() {
    this.activedLoad = true;
    this.rest.postLoadScheme(this.fileToUpload)
      .subscribe(
        event => {
            if (event.type === HttpEventType.UploadProgress) { Math.round(this.uploadByte = 100 * event.loaded / event.total); }
            if (event.type === HttpEventType.Response) {this.message = event.body.message; this.showDetails = true; }
          },
        error => { alert('ERROR al guardar'); },
      () => { this.loading = false;  }
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
