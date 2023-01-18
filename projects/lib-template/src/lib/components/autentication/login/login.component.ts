import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LibLoginComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlMail: ['', Validators.required],
      ctrlPasw: ['', Validators.required]
    });
  }

}
