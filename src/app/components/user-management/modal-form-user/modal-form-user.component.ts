import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../domain/class';



@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrls: ['./modal-form-user.component.css']
})
export class ModalFormUserComponent implements OnInit {
  inputUserForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.inputUserForm = this.formBuilder.group({
      ctrlName: ['', Validators.required],
      ctrlSurname: ['', Validators.required],
      ctrlEmail: ['', Validators.required],
    });
  }



  onSubmit() {
    const name = this.inputUserForm.get('ctrlName')?.value;
    const surname = this.inputUserForm.get('ctrlSurname')?.value;
    const email = this.inputUserForm.get('ctrlEmail')?.value;
    const formUser = new User(name, surname, email);

    /* this.autService.login(formUser).subscribe(
      (user) => {
        localStorage.setItem('User', JSON.stringify(user));
        this.router.navigate(['/']);
      }
    ); */

    console.log(formUser);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
