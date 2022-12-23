import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Users } from '../components/domain/interface';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiURL = "https://users-manage.free.beeceptor.com/getUsers"
  //private Users = getUsers;
  constructor(private http: HttpClient) { }

  getUserList(): Observable<Users[]>{
    return this.http.get<Users[]>(this.apiURL)
    .pipe(catchError(err => {throw err;}))
  }

}
