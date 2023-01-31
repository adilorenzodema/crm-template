import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { Permissions } from '../domain/interface';
import { HttpUtils } from '../shared/utils/httpUtils';


@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiURL = this.url + "auth";


  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    @Inject('beUrl') private url: string) { }

  getPermissionPage(menuItemKey: string): Observable<Permissions> {
    const token = this.getToken();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token, menuItemKey })
    };
    return this.http.post<Permissions>(this.apiURL + '/getPagePermissions', null, options)
      .pipe(catchError(err => { throw err; }));
  }

  private getToken(): string {
    return this.cookieService.get('Token');
  }
}
