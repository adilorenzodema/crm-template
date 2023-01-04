import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { UserManagementService } from 'src/app/service/user-management.service';
import { User } from '../../domain/class';
import { UserProfile } from '../../domain/interface';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrls: ['./modal-form-user.component.css']
})
export class ModalFormUserComponent implements OnInit, OnDestroy {
  inputUserForm!: FormGroup;
  dropdownData!: UserProfile[];
  subscription: Subscription[] = [];
  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private userManagementService: UserManagementService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    console.log(this.data);
    this.getProfiles();
    if (this.data.id) {
      this.inputUserForm = this.formBuilder.group({
        ctrlName: [this.data.firstName, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        ctrlSurname: [this.data.lastName, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        ctrlEmail: [this.data.email, [Validators.required, Validators.email]],
        ctrlProfileCode: [null, [Validators.required]],
      });

    } else {
      this.inputUserForm = this.formBuilder.group({
        ctrlName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        ctrlSurname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        ctrlEmail: ['', [Validators.required, Validators.email]],
        ctrlProfileCode: [null, [Validators.required]],
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  public onSubmit(isAdd: boolean): void {
    const name = this.inputUserForm.get('ctrlName')?.value;
    const surname = this.inputUserForm.get('ctrlSurname')?.value;
    const email = this.inputUserForm.get('ctrlEmail')?.value;
    const profileCode = this.inputUserForm.get('ctrlProfileCode')?.value;
    const formUser = new User(name, surname, email, profileCode);
    if (isAdd) {
      this.userManagementService.addUser(formUser).subscribe({
        next: (data: User) => {
          console.log(data);
          this.snackBar.open("Utente inserito!", "X");
        },
        error: () => {
          this.snackBar.open("Errore!", "X");
        },
        complete: () => this.dialogRef.close(true)
      });
    } else {
      this.userManagementService.editUser(formUser).subscribe({
        next: (data: User) => {
          console.log(data);
          this.snackBar.open("Utente modificato!", "X");
        },
        error: () => {
          this.snackBar.open("Errore!", "X");
        },
        complete: () => this.dialogRef.close(true)
      });
    }
  }


  public onCancel(): void {
    this.dialogRef.close(false);
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  private getProfiles(): void {
    this.subscription.push(this.userManagementService.getProfileList().subscribe((res) => this.dropdownData = res.profileList));
  }
}
