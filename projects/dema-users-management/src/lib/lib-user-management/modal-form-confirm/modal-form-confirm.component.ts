import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-delete-user',
  templateUrl: './modal-form-confirm.component.html',
  styleUrls: ['./modal-form-confirm.component.css']
})
export class LibModalFormConfirmComponent {
  subscription: Subscription[] = [];
  constructor(
    public dialogRef: MatDialogRef<LibModalFormConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {isDelete:boolean}
  ) { }

}



