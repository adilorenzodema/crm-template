import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserManagementRoutingModule } from './dema-user-management.routing';
import { LibModalFormConfirmComponent } from './lib-user-management/modal-form-confirm/modal-form-confirm.component';
import { LibModalFormUserComponent } from './lib-user-management/modal-form-user/modal-form-user.component';
import { LibUserManagementComponent } from './lib-user-management/user-management.component';
import { LibMaterialModule } from './shared/module/material.module';
import { GetPermissionPipePipe } from './shared/pipes/get-permission-pipe.pipe';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LibUserManagementComponent,
    LibModalFormUserComponent,
    LibModalFormConfirmComponent,
    GetPermissionPipePipe
  ],
  imports: [
    CommonModule,
    LibMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    UserManagementRoutingModule,
    TranslateModule
  ],
  exports: []
})
export class DemaUsersManagementModule { }
