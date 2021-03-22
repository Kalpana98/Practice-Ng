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
  editSelected: boolean = false;
  response: any = [];
  res: any = [];

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

  getUserFromAPI() {
    this.usersService.getAllUsers().subscribe(
      (res) => {
        this.res = JSON.stringify(res);
      },
      (error) => {
        console.log('Error is: ', error);
      }
    );
  }

  onDelete(id: number) {
    const r = JSON.stringify(id);
    this.usersService.deleteUser(id).subscribe((data) => {
      this.getUserFromAPI();
    });
    this.ngOnInit();
    // Deleting only from frontend
    // let i = this.users.findIndex((e: any) => e.id === id);
    // if (i !== -1) {
    //   this.users.splice(i, 1);
    // }
  }

  // onEdit(id: number) {
  //   const r = JSON.stringify(id);
  //   this.selectedUserId = +id;
  //   this.editSelected = true;
  // }

  onUserClick(id: number): void {
    this.selectedUserId = +id;
    // console.log(id);
  }
  onUserReceived(users: any) {
    console.log(users);
    // if (users.id == this.selectedUserId) {
    //   // users.pop();
    //   // delete users[users.id + 1];
    // }
  }
}
