import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { HttpUtils } from '../../public-api';
import { ConfigInitService } from '../init/config-init.service';


@Injectable({
  providedIn: 'root'
})
export class PagePermissionService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private confService: ConfigInitService) { }

  getPermissionPage(menuItemKey: string): Observable<any> {
    const apiURL = this.confService.config.be_url + "auth";
    const token = this.getToken();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token, menuItemKey })
    };
    return this.http.post<any>(apiURL + '/getPagePermissions', null, options)
      .pipe(catchError(err => { throw err; }));
  }

  private getToken(): string {
    return this.cookieService.get('Token');
  }
}
