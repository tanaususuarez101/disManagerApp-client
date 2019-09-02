import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Observable} from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {
  private title = 'Panel de Administración';
  private hrefExportDatabase = '';
  private hrefBackupDatabase = '';

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.hrefExportDatabase = this.rest.getExportDataBase();
    this.hrefBackupDatabase = this.rest.getBackupDataBase();
  }

  availableDelete() { $('#modal-alert').modal('show'); }

  deleteDataBases(b: boolean) {
    if (b) {
      this.rest.deleteScheme().subscribe(res => alert('Base de datos borrada'), err => alert('ERROR: no se pudo borrar'));
    }
  }

}
