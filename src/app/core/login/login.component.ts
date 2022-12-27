import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private autService: AuthService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlUser: ['', Validators.required],
      ctrlPasw: ['', Validators.required]
    });
  }

  login(): void {
    this.autService.login().subscribe(
      (user) => {
        localStorage.setItem('User', JSON.stringify(user));
        this.router.navigate(['/']);
      }
    );
  }

}
