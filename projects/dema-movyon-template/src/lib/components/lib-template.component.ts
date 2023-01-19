import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth-service.service';
import { LibResetPasswordComponent } from './autentication/reset-password/reset-password.component';

@Component({
  selector: 'lib-template',
  templateUrl: 'lib-template.component.html',
  styleUrls: ['lib-template.component.css']
})
export class LibTemplateComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookiService: CookieService,
    private dialog: MatDialog) { }

  logout(): void {
    this.authService.logout().subscribe({
      complete: () => {
        this.cookiService.deleteAll();
        this.router.navigate(['/login']);
      }
    });
  }

  changePassword(): void {
    this.dialog.open(LibResetPasswordComponent, { width: '50%', height: '60%', data: { isChange: true } });
  }

}
