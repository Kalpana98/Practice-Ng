import { Component, OnInit } from '@angular/core';
import { users } from '../user-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor() {}

  users: any[] = [];
  userCols: any[] = [];

  selectedUserId: any = null;

  ngOnInit(): void {
    this.userCols = [
      {
        field: 'name',
        header: 'User Name',
      },
      {
        field: 'isActive',
        header: '?',
      },
      {
        field: 'gender',
        header: 'Gender',
      },
    ];
    this.users = users;
  }

  onDelete(id: number) {
    console.log('Deleted!');

    let i = this.users.findIndex((e) => e.id === id);
    if (i !== -1) {
      this.users.splice(i, 1);
    }
  }

  onUserClick(id: number): void {
    this.selectedUserId = +id;
    // console.log(id);
  }
  onUserReceived(users: any) {
    console.log(users);
    if (users.id == this.selectedUserId) {
      // users.pop();
      // delete users[users.id + 1];
    }
  }
}
