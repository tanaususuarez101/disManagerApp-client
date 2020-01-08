import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Observable} from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-database-manager',
  templateUrl: './database-manager.component.html',
  styleUrls: ['./database-manager.component.scss']
})
export class DatabaseManagerComponent implements OnInit {
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
    if (!b) { return; }
    const messageDataBase = document.getElementById('delete-database');
    messageDataBase.innerHTML = '<p style="color: #212529">Eliminando todo el contenido... <i class="fa fa-spinner fa-spin"></i></p>';
    this.rest.deleteScheme()
      .subscribe(
        res => {
          messageDataBase.innerHTML = '<p style="color: #212529">Datos eliminados satisfactoriamente <i style="color:green"  class="fa fa-check"></i></p>';
        },
        err => {
          messageDataBase.innerHTML = '<p style="color: #212529">Hubo algún error<i style="color:red"  class="fa fa-close"></i></p>';
        });
  }

}
