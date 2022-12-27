import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserManagementService } from 'src/app/service/user-management.service';
import { Users } from '../domain/interface';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'action'];
  public dataSource = new MatTableDataSource<Users>();
  private subscription: Subscription [] = [];
  constructor( private userManagementService : UserManagementService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription.push(this.userManagementService.getUserList().subscribe(
      users => this.dataSource.data = users
    ));
  }
  ngOnDestroy() : void{
    this.subscription.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  public addUser(): void{
    this.dialog.open(ModalFormUserComponent, {width: '50%', height: '50%', data: 'pippo'});
  }
}

//Aggiungi, funzone legata al bottone (click) = "Onclick", usare https://v13.material.angular.io/components/dialog/overview
//costruire un nuovo componente modal-form-user



