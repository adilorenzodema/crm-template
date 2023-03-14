import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../service/auth-service.service';

@Component({
  selector: 'lib-send-mail',
  templateUrl: './send-mail.component.html',
  styles: [`
  .login-card {
    border-radius: 10px;
    width: 50%;
  }
  `
  ]
})
export class LibSendMailComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    @Inject('login') public loginImg: any,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlMail: ['', Validators.required]
    });
  }

  public sendMail(): void {
    const mail = this.formGroup.get('ctrlMail')?.value;
    this.authService.sendMailResetPassword(mail).subscribe(
      () => this.snackBar.open('Ti abbiamo inviato una mail all`indirizzo inserito', "X", {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: 'INFO'
      })
    );
  }
}
