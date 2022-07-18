import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() vm: User;
  @Output() save: EventEmitter<User> = new EventEmitter<User>();

  onSave() {
    this.save.emit(this.vm);
  }
}
