import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { UserManagementService } from 'src/app/service/user-management.service';
import { User } from '../domain/class';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'action'];
  public dataSource = new MatTableDataSource<User>();
  public search!: FormGroup;
  private subscription: Subscription[] = [];

  constructor(
    private userManagementService: UserManagementService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.search = this.formBuilder.group({
      ctrlSearch: [''],
      ctrlActive: [true]
    });
    this.callGetAPI();
    this.getPermissionAPI();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  public addUser(): void {
    const dialogRef = this.dialog.open(ModalFormUserComponent, { width: '40%', height: '50%', data: 'pippo' });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) { this.callGetAPI(); };
      }
    );
  }

  public onEdit(element: Element): void {
    const dialogRef = this.dialog.open(ModalFormUserComponent, { width: '40%', height: '50%', data: element });
  }

  private callGetAPI(): void {
    this.subscription.push(this.userManagementService.getUserList().subscribe(
      users => (this.dataSource.data = users ,console.log(users))
    ));
  }

  private getPermissionAPI(): void {
    const currentUrl = (window.location.pathname).replace('/', '');
    this.subscription.push(this.authService.getPermissionPage(currentUrl).subscribe(
      resp => console.log(resp)
    ));
  }

}


//bottone edit

