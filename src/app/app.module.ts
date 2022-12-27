import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LoginComponent } from './core/login/login.component';
import { MaterialModule } from './shared/modules/material.module';
import { TemplateModule } from './template/template.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalFormUserComponent } from './components/user-management/modal-form-user/modal-form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpansionComponent,
    HelpPageComponent,
    LoginComponent,
    UserManagementComponent,
    ModalFormUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    TemplateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
