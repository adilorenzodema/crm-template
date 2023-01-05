import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { UserManagementService } from 'src/app/service/user-management.service';
import { User } from '../../domain/class';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  user!: User;
  constructor(
    public dialogRef: MatDialogRef<DeleteUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userManagementService: UserManagementService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }

  /* public deleteUser(user: User): void {
    const tmpUser = user;
    this.userManagementService.deleteUser(tmpUser).subscribe({
      next: (data: User) => {
        console.log(data);
        this.snackBar.open("Utente inserito!", "X");
      },
      error: () => {
        this.snackBar.open("Errore!", "X");
      },
      complete: () => this.dialogRef.close(true)
    });
  } */

}


//modal-confirm-delete
