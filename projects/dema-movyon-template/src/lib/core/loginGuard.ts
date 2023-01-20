import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private cookiesService: CookieService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.cookiesService.get('Token')) {
      this.router.navigate(['/']);
      // logged in so return true
      return false;
    }
    return true;
  }
}
