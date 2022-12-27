import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/guards/guards';
import { TemplateComponent } from './template/template.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ModalFormUserComponent } from './components/user-management/modal-form-user/modal-form-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: TemplateComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },
      {
        path: 'tabs', loadChildren: () => import("src/app/components/tabs/tabs.module").then(m => m.TabsModule)
      },
      {
        path: 'expansion', component: ExpansionComponent
      },
      {
        path: 'help-page', component: HelpPageComponent
      },
      {
        path: 'user-management', component: UserManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
