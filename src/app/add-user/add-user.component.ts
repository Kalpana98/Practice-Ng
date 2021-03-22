import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  model = new user('', '', '', '', '', '', '');

  get diagnostic() {
    return JSON.stringify(this.model);
  }
  constructor(private service: UsersService) {}

  ngOnInit(): void {}
  addUser(
    name: string,
    username: string,
    email: string,
    address: string,
    phone: string,
    website: string,
    company: string
  ) {
    console.log('User Added!');
    console.log(+name);
    console.log(+username);
    console.log(+email);
    console.log(+address);
    console.log(+phone);
    console.log(+website);
    console.log(+company);
  }

  newUser() {
    console.log(this.model);
    this.postuser();
  }
  postuser() {
    this.service.postuser(this.model).subscribe();
  }
}

export class user {
  constructor(
    public name: string,
    public username: string,
    public email: string,
    public address: string,
    public phone: string,
    public website: string,
    public company: string
  ) {}
}
