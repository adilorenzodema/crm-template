import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Users } from '../../domain/interface';


@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrls: ['./modal-form-user.component.css']
})
export class ModalFormUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users,
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
