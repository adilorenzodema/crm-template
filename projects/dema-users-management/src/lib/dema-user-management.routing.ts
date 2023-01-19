import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibUserManagementComponent } from './lib-user-management/user-management.component';

const routes: Routes = [
  {
    path: '', component: LibUserManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
