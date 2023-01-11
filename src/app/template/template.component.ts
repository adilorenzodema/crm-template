import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookiService: CookieService) { }

  logout(): void {
    this.authService.logout().subscribe({
      next: (resp) => console.log(resp),
      complete: () => {
        this.cookiService.deleteAll();
        this.router.navigate(['/login']);
      }
    });
  }
}
