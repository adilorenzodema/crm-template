import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { LoginUser } from '../components/domain/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = "https://users-manage.free.beeceptor.com";

  constructor(private http: HttpClient) { }

  login(): Observable<LoginUser> {
    return this.http.get<LoginUser>(this.apiURL + '/login')
      .pipe(catchError(err => { throw err; }));
  }
}
