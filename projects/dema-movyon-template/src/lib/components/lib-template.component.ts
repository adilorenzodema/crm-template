import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth-service.service';
import { LibResetPasswordComponent } from './autentication/reset-password/reset-password.component';
import { ModalChangePasswordComponent } from './modal-change-password/modal-change-password.component';

@Component({
  selector: 'lib-template',
  templateUrl: 'lib-template.component.html',
  styleUrls: ['lib-template.component.css']
})
export class LibTemplateComponent {
  constructor(
    public translateService: TranslateService,
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
    this.dialog.open(ModalChangePasswordComponent, { width: '50%', height: '60%'});
  }

}
