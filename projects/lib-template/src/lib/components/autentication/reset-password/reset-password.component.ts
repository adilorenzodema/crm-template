import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<LibResetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isChange: boolean }) { }

  ngOnInit(): void {
    if (!this.data.isChange) {
      this.formGroup = this.formBuilder.group({
        ctrlNewPassword: ['', [Validators.required, Validators.minLength(8)]],
        ctrlConfirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      });
    } else {
      this.formGroup = this.formBuilder.group({
        ctrlNewPassword: ['', [Validators.required, Validators.minLength(8)]],
        ctrlConfirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        ctrlOldPassword: ['', [Validators.required, Validators.minLength(8)]],
      });
    }
    this.route.queryParams.subscribe(
      params => this.token = params['token']
    );
  }
}
