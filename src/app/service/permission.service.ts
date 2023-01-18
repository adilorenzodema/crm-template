import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, of } from 'rxjs';
import { LoginUser } from '../components/domain/class';
import { UserPermission } from '../components/domain/interface';
import { HttpUtils } from '../shared/utils/httpUtils';


@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  public loginUser!: UserPermission;
  private noAuthURL = "http://localhost:8080/noAuth";
  private apiURL = "http://localhost:8080/auth";


  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }

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
    return this.cookieService.get('Token');
  }

  private getRefreshToken(): string {
    return this.cookieService.get('RefreshToken');
  }
}
