import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibLoginComponent } from './components/autentication/login/login.component';
import { LibResetPasswordComponent } from './components/autentication/reset-password/reset-password.component';
import { LibSendMailComponent } from './components/autentication/send-mail/send-mail.component';
import { LoginGuard } from './core/loginGuard';

const routes: Routes = [
  { path: 'login', component: LibLoginComponent, canActivate: [LoginGuard] },
  { path: 'send-mail', component: LibSendMailComponent, canActivate: [LoginGuard] },
  { path: 'reset-password', component: LibResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibTemplateRoutingModule { }
