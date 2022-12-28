import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/guards';
import { LoginComponent } from './core/login/login.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: TemplateComponent, children: [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
