import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../service/auth-service.service';
import { LoginUser } from '../../domain/class';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LibLoginComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    @Inject('login') public loginImg: any,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlMail: ['', Validators.required],
      ctrlPasw: ['', Validators.required]
    });
  }

  login(): void {
    const mail = this.formGroup.get('ctrlMail')?.value;
    const password = this.formGroup.get('ctrlPasw')?.value;
    const formUser = new LoginUser(mail, password);
    this.authService.login(formUser).subscribe(
      (userInfo) => {
        this.cookieService.set('User', JSON.stringify(userInfo.user));
        this.cookieService.set('Menu', JSON.stringify(userInfo.menu));
        this.cookieService.set('Token', userInfo.token);
        this.cookieService.set('RefreshToken', userInfo.refreshToken);
        this.router.navigate(['/']);
      }
    );
  }

}
