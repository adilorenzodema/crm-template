import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    console.log("Entra1!");
    let errorMsg = '';
    console.log("Passed through the interceptor in request");
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) { // Internal Server Error
          console.log("Entra2!");
          errorMsg = `Error: ${error.error.message}`;
          //return;

        } else { // altri errori non mappati
          this.snackBar.open('ERROR.INTERNAL_SERVER_ERROR',
            '✖',
            {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: 'ERROR'
            });
          //return;
        }
        //deprecata -- Argument of type ‘(error: any) => void’ is not assignable to parameter of type
        return throwError(() => error);
        //return throwError(errorMsg);
      }));
  }
}

