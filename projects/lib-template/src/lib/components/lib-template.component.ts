import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'lib-template',
  templateUrl: 'lib-template.component.html',
  styleUrls: ['lib-template.component.css']
})
export class LibTemplateComponent {

  constructor(
    private router: Router,
    /* private authService: LibAuthService, */
    private cookiService: CookieService,
    private dialog: MatDialog) { }

  logout(): void {
    /* this.authService.logout().subscribe({
      next: (resp) => console.log(resp),
      complete: () => {
        this.cookiService.deleteAll();
        this.router.navigate(['/login']);
      }
    }); */
  }

}
