import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(
    private snackBar: MatSnackBar,
    private translateService: TranslateService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) { // not autorizeds
          this.snackBar.open(this.translateService.instant(error.error.errorCode),
            '✖',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: 'ERROR'
            });
          return throwError(() => error);
        } else if (error.status === 401) { // non valido
          localStorage.removeItem('User');
          this.router.navigate(['/login']);
          return throwError(() => error);
        } else { // altri errori non mappati
          this.snackBar.open(this.translateService.instant("error.unknown"),
            '✖',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: 'ERROR'
            });
          return throwError(() => error);
        }
      }));
  }
}

