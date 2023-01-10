import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
  private noAuthURL = "http://localhost:8080/noAuth";
  private apiURL = "http://localhost:8080/auth";
  private mokLoginUser = loginUser;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }

  login(loginUser: LoginUser): Observable<UserPermission> {
    return this.http.post<UserPermission>(this.noAuthURL + '/login', loginUser)
      .pipe(catchError(err => { throw err; }));
    /* return of(this.mokLoginUser); */
  }

  logout(): Observable<void> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<void>(this.apiURL + '/logout', null, options)
      .pipe(catchError(err => { throw err; }));
  }

  refreshToken(): Observable<void> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<void>(this.noAuthURL + '/refreshToken', { refreshToken: this.getRefreshToken() }, options)
      .pipe(catchError(err => { throw err; }));
  }

  getPermissionPage(menuItemKey: string): Observable<any> {
    const token = this.getToken();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token, menuItemKey })
    };
    return this.http.post<any>(this.apiURL + '/getPagePermissions', null, options)
      .pipe(catchError(err => { throw err; }));
  }

  private getToken(): string {
    return JSON.parse(this.cookieService.get('User')).token;
  }

  private getRefreshToken(): string {
    return JSON.parse(this.cookieService.get('User')).refreshToken;
  }
}
