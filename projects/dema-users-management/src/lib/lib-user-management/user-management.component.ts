import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PagePermissionService } from 'dema-movyon-template';
import { Operation } from 'dema-movyon-template/lib/components/domain/interface';
import { Subscription } from 'rxjs';
import { User } from '../domain/class';
import { UserManagementService } from '../service/user-management.service';
import { LibModalFormConfirmComponent } from './modal-form-confirm/modal-form-confirm.component';
import { LibModalFormUserComponent } from './modal-form-user/modal-form-user.component';


@Component({
  selector: 'lib-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class LibUserManagementComponent implements OnInit, OnDestroy {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['userId', 'firstName', 'lastName', 'email', 'profile', 'action'];
  public dataSource = new MatTableDataSource<User>();
  public search!: FormGroup;
  public operations: Operation[] = [];
  public progressBarDisplay = false;
  private subscription: Subscription[] = [];

  constructor(
    private userManagementService: UserManagementService,
    private permissionService: PagePermissionService,
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
    const dialogRef = this.dialog.open(LibModalFormUserComponent, { width: '40%', height: '50%', data: "" });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) { this.callGetAPI(); };
      }
    );
  }

  public onEdit(element: Element): void {
    const dialogRef = this.dialog.open(LibModalFormUserComponent, { width: '40%', height: '50%', data: element });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) { this.callGetAPI(); };
      }
    );
  }

  public onDelete(userId: number): void {
    const dialogRef = this.dialog.open(LibModalFormConfirmComponent, { width: '40%', height: '30%', data: { isDelete: true } });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.subscription.push(this.userManagementService.deleteUser(userId).subscribe(
            () => this.callGetAPI()
          ));
        }
      });
  }

  public onActivate(userId: number): void {
    const dialogRef = this.dialog.open(LibModalFormConfirmComponent, { width: '40%', height: '30%', data: { isDelete: false } });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.subscription.push(this.userManagementService.activateUser(userId).subscribe(
            () => this.callGetAPI()
          ));
        }
      });
  }

  public callGetAPI(): void {
    this.progressBarDisplay = true;
    const keyword = this.search.get('ctrlSearch')?.value;
    const isActive = this.search.get('ctrlActive')?.value;
    this.subscription.push(this.userManagementService.getUserList(keyword, isActive).subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => this.progressBarDisplay = false,
      complete: () => this.progressBarDisplay = false
    }));
  }

  private getPermissionAPI(): void {
    const currentUrl = (window.location.hash).replace('#/', '');
    this.subscription.push(this.permissionService.getPermissionPage(currentUrl).subscribe(
      permission => this.operations = permission.operations
    ));
  }


}


