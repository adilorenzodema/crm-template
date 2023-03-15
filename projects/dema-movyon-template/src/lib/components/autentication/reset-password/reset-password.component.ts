import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth-service.service';

@Component({
  selector: 'lib-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [`
  .login-card {
    border-radius: 10px;
    width: 50%;
  }
  `
  ]
})
export class LibResetPasswordComponent implements OnInit {
  public formGroup!: FormGroup;
  private token!: string;

  constructor(
    @Inject('login') public loginImg: any,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlNewPassword: ['', [Validators.required, Validators.minLength(8)]],
      ctrlConfirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.route.queryParams.subscribe(
      params => this.token = params['token']
    );
  }

  public savePassword(): void {

    const password = this.formGroup.get('ctrlNewPassword')?.value;
    const confirmPassword = this.formGroup.get('ctrlConfirmPassword')?.value;
    if (password !== confirmPassword) {
      this.snackBar.open('Password inserite non sono uguali', "X", {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'ERROR'
      });
    } else {
      this.authService.resetPassword(this.token, password).subscribe(
        () => this.snackBar.open('Password modificata', "X", {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'INFO'
        })
      );
    }
  }
}
