import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users: any = [];

  userCols: any[] = [];
  selectedUserId: any = null;

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((users) => {
      this.users = users;
    });

    this.userCols = [
      {
        field: 'id',
        header: 'ID',
      },
      {
        field: 'name',
        header: 'User Name',
      },
      {
        field: 'phone',
        header: 'Contact',
      },
    ];
  }

  // Deletes data on frontend
  onDelete(id: number) {
    console.log(`Deleted Id: ${id}`);

    let i = this.users.findIndex((e: any) => e.id === id);
    if (i !== -1) {
      this.users.splice(i, 1);
    }
  }

  // onUserClick(id: number): void {
  //   this.selectedUserId = +id;
  //   // console.log(id);
  // }
  // onUserReceived(users: any) {
  //   console.log(users);
  //   if (users.id == this.selectedUserId) {
  //     // users.pop();
  //     // delete users[users.id + 1];
  //   }
  // }
}
