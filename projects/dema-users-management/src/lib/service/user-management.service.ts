import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../domain/class';
import { UserProfile } from '../domain/interface';
import { HttpUtils } from '../shared/utils/httpUtils';
//import { userMokup } from './mokup/mokup';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiURL = this.url + 'api/manageUsers';
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    @Inject('beUrl') private url: string) { }

  getUserList(keyword: string, isActive: boolean): Observable<User[]> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken(), keyword: keyword, active: isActive })
    };
    return this.http.get<User[]>(this.apiURL + '/getUsers', options)
      .pipe(catchError(err => { throw err; }));
  }

  addUser(user: User): Observable<User> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<User>(this.apiURL + '/addUser', user, options)
      .pipe(catchError(err => { throw err; }));
  }

  editUser(user: User): Observable<User> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<User>(this.apiURL + '/editUser', user, options)
      .pipe(catchError(err => { throw err; }));
  }

  getProfileList(): Observable<UserProfile[]> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.get<UserProfile[]>(this.apiURL + '/getAllProfiles', options)
      .pipe(catchError(err => { throw err; }));
  }

  deleteUser(userId: number): Observable<void> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<void>(this.apiURL + '/deleteUser/' + userId, null, options)
      .pipe(catchError(err => { throw err; }));
  }

  activateUser(userId: number): Observable<void> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<void>(this.apiURL + '/activeUser/' + userId, null, options)
      .pipe(catchError(err => { throw err; }));
  }


  private getToken(): string {
    return this.cookieService.get('Token');
  }
}
