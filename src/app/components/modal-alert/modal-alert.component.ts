import {Component, EventEmitter, OnInit, Output} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.scss']
})



export class ModalAlertComponent implements OnInit {

  @Output() public request = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  emitRequest(b: boolean) {
    $('#modal-alert').modal('hide');
    this.request.emit(b);
  }
}
