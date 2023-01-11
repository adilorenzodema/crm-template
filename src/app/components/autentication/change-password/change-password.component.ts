import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styles: [`
  .login-card {
    border-radius: 10px;
    width: 50%;
  }
  `
  ]
})
export class ChangePasswordComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private autService: AuthService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlMail: ['', Validators.required]
    });
  }

  public sendMail(): void {
    const mail = this.formGroup.get('ctrlMail')?.value;
    this.autService.sendMailResetPassword(mail).subscribe(
      (resp) => console.log(resp)
    );
  }

}
