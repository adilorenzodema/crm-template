import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/guards';
import { LoginComponent } from './components/autentication/login/login.component';
import { SendMailComponent } from './components/autentication/send-mail/send-mail.component';
import { ResetPasswordComponent } from './components/autentication/reset-password/reset-password.component';
import { LibTemplateComponent } from 'projects/lib-template/src/lib/components/lib-template.component';
import { LibLoginComponent } from 'projects/lib-template/src/lib/components/autentication/login/login.component';
import { LibResetPasswordComponent } from 'projects/lib-template/src/lib/components/autentication/reset-password/reset-password.component';
import { LibSendMailComponent } from 'projects/lib-template/src/lib/components/autentication/send-mail/send-mail.component';

const routes: Routes = [
  { path: 'login', component: LibLoginComponent },
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
        loadChildren: () => import("src/app/components/user-management/user-management.module").then(m => m.UserManagementModule),
        canActivate: [AuthGuard]
      }
    ]
  }
  /*  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
   {
     path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
   },
   {
     path: 'user-management',
     loadChildren: () => import("src/app/components/user-management/user-management.module").then(m => m.UserManagementModule),
     canActivate: [AuthGuard]
   } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
