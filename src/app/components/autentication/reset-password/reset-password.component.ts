import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [`
  .login-card {
    border-radius: 10px;
    width: 50%;
  }
  `
  ]
})
export class ResetPasswordComponent implements OnInit {
  public formGroup!: FormGroup;
  private token!: string;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlPassword: ['', Validators.required],
      ctrlConfirmPassword: ['', Validators.required]
    });
    this.route.queryParams.subscribe(
      params => this.token = params['token']
    );
  }

  public savePassword(): void {
    const password = this.formGroup.get('ctrlPassword')?.value;
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
