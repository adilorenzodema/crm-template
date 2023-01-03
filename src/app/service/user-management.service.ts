import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../components/domain/class';
import { HttpUtils } from '../shared/utils/httpUtils';
//import { userMokup } from './mokup/mokup';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiURL = 'http://localhost:8080/api/manageUsers';
  constructor(private http: HttpClient) { }

  getUserList(): Observable<{userList: User[]}> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken()})
    };
    return this.http.get<{userList: User[]}>(this.apiURL + '/getUsers', options)
      .pipe(catchError(err => { throw err; }));
  }

  addUser(user: User): Observable<User> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken()})
    };
    return this.http.post<User>(this.apiURL + '/saveUsers', user, options)
      .pipe(catchError(err => { throw err; }));
  }

  editUser(user: User): Observable<User> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken()})
    };
    return this.http.put<User>(this.apiURL + '/updateUsers', user, options)
      .pipe(catchError(err => { throw err; }));
  }

  /*  deleteUser(id :number): Observable<unknown>{
     return this.http.delete(this.apiURL, id)
       .pipe(catchError(err => { throw err; }));
   }
  */

  private getToken(): string {
    return JSON.parse(String(localStorage.getItem('User'))).token;
  }
}
