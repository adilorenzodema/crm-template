import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConsoleReporter } from 'jasmine';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(
    private snackBar: MatSnackBar,
    //private translate: TranslateService,
    @Inject('authService') private readonly authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Passed through the interceptor in request");
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) { // not autorized
          console.log("Entra!");
          return;

        } else { // altri errori non mappati
          this.snackBar.open('ERROR.INTERNAL_SERVER_ERROR',
            '✖',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: 'ERROR'
            });
          return;
        }
      }));
  }
}

