import { Component, OnInit } from '@angular/core';
import { Users } from '../domain/interface';


const ELEMENT_DATA: Users[] = [
  {id: 1, name: 'Hydrogen', surname: 'Hydrogen', email: 'H'},
  {id: 2, name: 'Helium', surname: 'Hydrogen', email: 'He'},
  {id: 3, name: 'Lithium', surname:'Hydrogen', email: 'Li'},
  {id: 4, name: 'Beryllium', surname: 'Hydrogen', email: 'Be'},
  {id: 5, name: 'Boron', surname: 'Hydrogen', email: 'B'},
];

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'name', 'surname', 'email'];
  dataSource = ELEMENT_DATA;

}


