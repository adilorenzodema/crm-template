import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserManagementService } from 'src/app/service/user-management.service';
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
    private userManagementService: UserManagementService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.inputUserForm = this.formBuilder.group({
      ctrlName: ['', Validators.required],
      ctrlSurname: ['', Validators.required],
      ctrlEmail: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const name = this.inputUserForm.get('ctrlName')?.value;
    const surname = this.inputUserForm.get('ctrlSurname')?.value;
    const email = this.inputUserForm.get('ctrlEmail')?.value;
    const formUser = new User(name, surname, email);
    this.userManagementService.postUser(formUser).subscribe({
      next: (data: User) => {
        console.log(data);
        this._snackBar.open("Utente inserito!", "X");
      },
      error: () => {
        this._snackBar.open("Utente distrutto!", "X");
      },
      complete: () => this.dialogRef.close(true)
    });
    console.log(formUser);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
