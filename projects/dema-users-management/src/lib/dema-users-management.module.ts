import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserManagementRoutingModule } from './dema-user-management.routing';
import { LibModalFormConfirmComponent } from './lib-user-management/modal-form-confirm/modal-form-confirm.component';
import { LibModalFormUserComponent } from './lib-user-management/modal-form-user/modal-form-user.component';
import { LibUserManagementComponent } from './lib-user-management/user-management.component';
import { LibMaterialModule } from './shared/module/material.module';



@NgModule({
  declarations: [
    LibUserManagementComponent,
    LibModalFormUserComponent,
    LibModalFormConfirmComponent
  ],
  imports: [
    CommonModule,
    LibMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    UserManagementRoutingModule
  ],
  exports: []
})
export class DemaUsersManagementModule { }
