import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { users } from './user-list';
import { user } from './add-user/add-user.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get('/routes/users/');
  }

  postuser(newuser: user): Observable<any> {
    return this.http.post('/routes/postuser/', newuser);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete('/routes/del/' + id);
  }

  // *****************************Data From API
  // getAllUsers(): Observable<users[]> {
  //   return this.http.get<users[]>('/routes/users/').pipe(
  //     map((users) => {
  //       return users;
  //     })
  //   );
  // }
}
