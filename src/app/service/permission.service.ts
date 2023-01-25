import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpUtils } from 'projects/dema-movyon-template/src/lib/shared/utils/httpUtils';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiURL = this.url + "auth";


  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    @Inject('beUrl') private url: string) { }

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
