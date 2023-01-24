import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { LoginUser } from '../components/domain/class';
import { UserPermission } from '../components/domain/interface';
import { ConfigInitService } from '../init/config-init.service';
import { HttpUtils } from '../shared/utils/httpUtils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private confService: ConfigInitService
  ) { }

  login(loginUser: LoginUser): Observable<UserPermission> {
    const url = this.confService.config.be_url;
    return this.http.post<UserPermission>(url + 'noAuth/login', loginUser)
      .pipe(catchError(err => { throw err; }));
  }

  logout(): Observable<void> {
    const url = this.confService.config.be_url;
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<void>(url + 'auth/logout', null, options)
      .pipe(catchError(err => { throw err; }));
  }

  refreshToken(): Observable<UserPermission> {
    const url = this.confService.config.be_url;
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<UserPermission>(url + 'authRefresh/refreshToken', { refreshToken: this.getRefreshToken() }, options)
      .pipe(catchError(err => { throw err; }));
  }

  sendMailResetPassword(mail: string): Observable<void> {
    const url = this.confService.config.be_url;
    return this.http.post<void>(url + 'noAuth/sendEmailResetPassword', { email: mail })
      .pipe(catchError(err => { throw err; }));
  }

  resetPassword(token: string, password: string): Observable<void> {
    const url = this.confService.config.be_url;
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: token })
    };
    return this.http.post<void>(url + 'auth/resetPassword', { newPassword: password }, options)
      .pipe(catchError(err => { throw err; }));
  }

  changePassword(newPassword: string, oldPassword: string): Observable<void> {
    const url = this.confService.config.be_url;
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token: this.getToken() })
    };
    return this.http.post<void>(url + 'auth/changePassword', { newPassword: newPassword, oldPassword: oldPassword }, options)
      .pipe(catchError(err => { throw err; }));
  }

  private getToken(): string {
    return this.cookieService.get('Token');
  }

  private getRefreshToken(): string {
    return this.cookieService.get('RefreshToken');
  }
}
