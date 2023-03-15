import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../service/auth-service.service';

@Component({
  selector: 'lib-modal-change-password',
  templateUrl: './modal-change-password.component.html',
  styles: [
  ]
})
export class ModalChangePasswordComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ModalChangePasswordComponent>) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlNewPassword: ['', [Validators.required, Validators.minLength(8)]],
      ctrlConfirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      ctrlOldPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
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
      const oldPassword = this.formGroup.get('ctrlOldPassword')?.value;
      this.authService.changePassword(password, oldPassword).subscribe({
        next: () => this.snackBar.open('Password modificata', "X", {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: 'INFO'
        }),
        error: () => {
          this.snackBar.open("Errore!", "X", {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: 'ERROR'
          });
        },
        complete: () => this.dialogRef.close(true)
      });
    }
  }

}
