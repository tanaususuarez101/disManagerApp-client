import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-pda',
  templateUrl: './details-pda.component.html',
  styleUrls: ['./details-pda.component.scss']
})
export class DetailsPdaComponent implements OnInit, OnChanges {

  @Input() public message: string;
  fields = ['id', 'Código', 'Asignatura', 'Cód. Área', 'Estado', 'Observaciones'];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.message) { console.log(this.message); }
  }

}
