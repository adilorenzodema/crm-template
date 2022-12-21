import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      ctrlUser: ['', Validators.required],
      ctrlPasw: ['', Validators.required]
    });
  }

  login(): void {
    localStorage.setItem('currentUser', 'pippo')
    this.router.navigate(['/'])
  }

}
