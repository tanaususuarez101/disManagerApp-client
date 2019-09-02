import { Component, OnInit } from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {RestService} from '../../../services/rest.service';

@Component({
  selector: 'app-load-pda',
  templateUrl: './load-pda.component.html',
  styleUrls: ['./load-pda.component.scss']
})
export class LoadPdaComponent implements OnInit {
  title = 'Carga de PDA';
  private fileToUpload: any;
  private uploadByte = 0;
  private fileLabelName = 'Elegir lista de PDA';

  private activedLoad: any;
  private showDetails: any;
  private loading: any;

  private message: any;

  constructor(private rest: RestService) { }

  ngOnInit() { this.initState(); }

  initState() {
    this.uploadByte = 0;
    this.activedLoad = false;
    this.loading = true;
    this.showDetails = false;
  }

  ploadFileToActivity() {
    this.activedLoad = true;
    this.rest.postLoadPda(this.fileToUpload)
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) { Math.round(this.uploadByte = 100 * event.loaded / event.total); }
          if (event.type === HttpEventType.Response) {this.message = event.body['message']; this.showDetails = true; }
        },
        error => { alert('ERROR al guardar'); },
        () => { this.loading = false;  }
        );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != null) {
      document.getElementById('fileLabelPDA').innerHTML = this.fileToUpload.name;
    } else {
      document.getElementById('fileLabelPDA').innerHTML = this.fileLabelName;
      this.initState();
    }
  }
}
