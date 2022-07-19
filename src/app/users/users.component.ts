import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.users = this.data.getUsers();
  }

  selectUser(user: User) {
    this.selectedUser = user.clone();
  }

  create() {
    this.selectedUser = User.createBlank();
  }

  deleteUser(user: User) {
    this.selectedUser = null;
    this.users = this.data.delete(user);
  }

  save(user: User) {
    if (!user.valid) {
      return;
    }

    if (user.id) {
      this.data.edit(user);
    } else {
      this.data.create(user);
    }
    this.users = this.data.getUsers();
    this.selectedUser = null;
  }
}
