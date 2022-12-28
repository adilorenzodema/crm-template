import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Users } from '../components/domain/class';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiURL = "https://users-manage.free.beeceptor.com";
  //private Users = getUsers;
  constructor(private http: HttpClient) { }

  getUserList(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiURL + '/getUsers')
      .pipe(catchError(err => { throw err; }));
  }

}
