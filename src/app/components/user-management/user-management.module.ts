import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagementRoutingModule } from './user-management.routing';
import { ModalFormConfirmComponent } from './modal-form-confirm/modal-form-confirm.component';
import { LibMaterialModule } from 'projects/dema-movyon-template/src/lib/shared/module/material.module';

@NgModule({
  declarations: [
    UserManagementComponent,
    ModalFormUserComponent,
    ModalFormConfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LibMaterialModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
