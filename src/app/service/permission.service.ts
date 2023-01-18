import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpUtils } from 'projects/movyon-template/src/lib/shared/utils/httpUtils';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PermissionService {
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
}
