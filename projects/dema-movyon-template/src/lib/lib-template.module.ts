import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LibLoginComponent } from './components/autentication/login/login.component';
import { LibResetPasswordComponent } from './components/autentication/reset-password/reset-password.component';
import { LibSendMailComponent } from './components/autentication/send-mail/send-mail.component';
import { LibFooterComponent } from './components/footer/footer.component';
import { LibTemplateComponent } from './components/lib-template.component';
import { LibSidebarComponent } from './components/sidebar/sidebar.component';
import { HttpConfigInterceptor } from './core/interceptor';
import { LibTemplateRoutingModule } from './lib-template.routing';
import { LibMaterialModule } from './shared/module/material.module';


@NgModule({
  declarations: [
    LibTemplateComponent,
    LibFooterComponent,
    LibSidebarComponent,
    LibLoginComponent,
    LibSendMailComponent,
    LibResetPasswordComponent
  ],
  imports: [
    CommonModule,
    LibMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LibTemplateRoutingModule,
    TranslateModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
    CookieService
  ],
  exports: [
    LibTemplateComponent,
    LibLoginComponent,
    LibSendMailComponent,
    LibResetPasswordComponent
  ]
})
export class LibTemplateModule { }
