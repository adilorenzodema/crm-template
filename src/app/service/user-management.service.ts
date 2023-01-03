import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../components/domain/class';
import { userMokup } from './mokup/mokup';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiURL = "https://users-manage.free.beeceptor.com";
  private mokupUser = userMokup;
  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]> {
    /* return this.http.get<User[]>(this.apiURL + '/getUsers')
      .pipe(catchError(err => { throw err; })); */
    return of(this.mokupUser);
  }

  addUser(user:User): Observable<User> {
    return this.http.post<User>(this.apiURL, user)
      .pipe(catchError(err => { throw err; }));
  }

  editUser(user:User): Observable<User> {
    return this.http.put<User>(this.apiURL, user)
      .pipe(catchError(err => { throw err; }));
  }

 /*  deleteUser(id :number): Observable<unknown>{
    return this.http.delete(this.apiURL, id)
      .pipe(catchError(err => { throw err; }));
  }
 */
}
