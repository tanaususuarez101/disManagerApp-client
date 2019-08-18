import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {RestService} from '../../../services/rest.service';

declare const $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent implements OnInit, OnChanges {

  @Input() public user: any;
  @Input() public teacherList: any = [];
  @Output() public request = new EventEmitter<boolean>();

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.initUser();
  }
  ngOnChanges() {
    this.initUser();
  }

  private initUser() {
    /*console.log('Init User: ', this.user);*/
    if (!this.user) this.user = {username: '', password: '', teacher_dni: '', isAdmin: false};
  }

  updateUser() {
    if (this.user != null ) {
      if (!this.user.password) this.user.password = '';
      console.log(this.user);
      this.rest.updateUser(this.user.username, this.user)
        .subscribe(
        data => {
            $('#modal-user-edit').modal('hide');
            this.request.emit(true);
        },err => alert('Error al guardar usuario'));
    }
  }

}
