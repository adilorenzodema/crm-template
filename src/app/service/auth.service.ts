import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { LoginUser } from '../components/domain/interface';
import { loginUser } from './mokup/mokup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginUser!: LoginUser;
  private apiURL = "https://users-manage.free.beeceptor.com";
  private mokLoginUser = loginUser;

  constructor(private http: HttpClient) { }

  login(): Observable<LoginUser> {
    /* return this.http.get<LoginUser>(this.apiURL + '/login')
      .pipe(catchError(err => { throw err; })); */
    return of(this.mokLoginUser);
  }

}
