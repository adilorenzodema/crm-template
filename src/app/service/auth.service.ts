import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { LoginUser } from '../components/domain/class';
import { UserPermission } from '../components/domain/interface';
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
    return this.http.get<void>(this.apiURL + '/logout')
      .pipe(catchError(err => { throw err; }));
  }

}
