import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UserManagementService } from 'src/app/service/user-management.service';
import { Users } from '../domain/interface';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'name', 'surname', 'email'];
  public dataSource = new MatTableDataSource<Users>();
  private subscription: Subscription [] = [];
  constructor( private userManagementService : UserManagementService, ) { }

  ngOnInit(): void {
    this.subscription.push(this.userManagementService.getUserList().subscribe(
      users => this.dataSource.data = users
    ));
  }
  ngOnDestroy() : void{
    this.subscription.forEach(subscription => {
      subscription.unsubscribe()
    });
  }
}



