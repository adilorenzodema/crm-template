import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelpPageComponent } from './components/help-page/help-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'tabs', loadChildren: () => import("src/app/components/tabs/tabs.module").then(m => m.TabsModule)
  },
  {
    path: 'expansion', component: ExpansionComponent
  },
  {
    path: 'help-page', component: HelpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
