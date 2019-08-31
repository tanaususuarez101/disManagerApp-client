import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-request-venia',
  templateUrl: './request-venia.component.html',
  styleUrls: ['./request-venia.component.scss']
})
export class RequestVeniaComponent implements OnInit {


  private typeVenia: any;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }

}
