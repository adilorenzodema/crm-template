import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable } from 'rxjs';
import { HttpUtils } from '../../public-api';
import { Permissions } from '../components/domain/interface';
import { ConfigInitService } from '../init/config-init.service';


@Injectable({
  providedIn: 'root'
})
export class PagePermissionService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    @Inject('beUrl') private beUrl: string) { }

  getPermissionPage(menuItemKey: string): Observable<Permissions> {
    const apiURL = this.beUrl + "auth";
    const token = this.getToken();
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: HttpUtils.createHttpParams({ token, menuItemKey })
    };
    return this.http.post<Permissions>(apiURL + '/getPagePermissions', null, options)
      .pipe(catchError(err => { throw err; }));
  }

  private getToken(): string {
    return this.cookieService.get('Token');
  }
}
