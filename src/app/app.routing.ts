import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LibTemplateComponent } from 'projects/dema-movyon-template/src/lib/components/lib-template.component';
import { AuthGuard } from 'projects/dema-movyon-template/src/lib/core/authGuard';

const routes: Routes = [
  /* { path: 'login', component: LibLoginComponent },
  { path: 'send-mail', component: LibSendMailComponent },
  { path: 'reset-password', component: LibResetPasswordComponent },
  {
    path: '', component: LibTemplateComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: 'user-management',
        loadChildren: () => import("projects/dema-users-management/src/lib/dema-users-management.module").then(m => m.DemaUsersManagementModule),
        canActivate: [AuthGuard]
      }
    ]
  } */
  {
    path: '', component: LibTemplateComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: 'user-management',
        loadChildren: () => import("projects/dema-users-management/src/lib/dema-users-management.module").then(m => m.DemaUsersManagementModule),
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
