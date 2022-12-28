import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Users } from '../../domain/class';



@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrls: ['./modal-form-user.component.css']
})
export class ModalFormUserComponent implements OnInit{
  inputUserForm!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Users,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.inputUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }



  onSubmit(){
    console.log(this.inputUserForm);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
