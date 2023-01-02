import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { LoginUser } from '../components/domain/class';
import { UserPermission } from '../components/domain/interface';
import { HttpUtils } from '../shared/utils/httpUtils';
import { loginUser } from './mokup/mokup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginUser!: UserPermission;
  private apiURL = "http://localhost:8080/auth";
  private mokLoginUser = loginUser;

  constructor(private http: HttpClient) { }

  login(loginUser: LoginUser): Observable<UserPermission> {
    return this.http.post<UserPermission>(this.apiURL + '/login', loginUser)
      .pipe(catchError(err => { throw err; }));
    /* return of(this.mokLoginUser); */
  }

  logout(): Observable<void> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken()})
    };
    return this.http.post<void>(this.apiURL + '/logout', null, options)
      .pipe(catchError(err => { throw err; }));
  }

  getPermissionPage(menuItemKey: string): Observable<any> {
    const token = this.getToken();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token, menuItemKey})
    };
    return this.http.post<any>(this.apiURL + '/getPagePermissions', null, options )
      .pipe(catchError(err => { throw err; }));
  }

  private getToken(): string {
    return JSON.parse(String(localStorage.getItem('User'))).token;
  }
}
