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

  postUser(user:User): Observable<User> {
    return this.http.post<User>(this.apiURL, user)
      .pipe(catchError(err => { throw err; }));
  }

}

//funzione adduser, post in ingresso lo USer e lo mette nel body
//edit dentro modal user
