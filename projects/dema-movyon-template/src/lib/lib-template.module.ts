import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LibLoginComponent } from './components/autentication/login/login.component';
import { LibResetPasswordComponent } from './components/autentication/reset-password/reset-password.component';
import { LibSendMailComponent } from './components/autentication/send-mail/send-mail.component';
import { LibFooterComponent } from './components/footer/footer.component';
import { LibTemplateComponent } from './components/lib-template.component';
import { LibSidebarComponent } from './components/sidebar/sidebar.component';
import { HttpConfigInterceptor } from './core/interceptor';
import { getPropertyFromConfig, initializeConfig } from './init/app.init';
import { ConfigInitService } from './init/config-init.service';
import { LibTemplateRoutingModule } from './lib-template.routing';
import { LibMaterialModule } from './shared/module/material.module';
import { ModalChangePasswordComponent } from './components/modal-change-password/modal-change-password.component';
import { NgScrollbarModule } from 'ngx-scrollbar';



@NgModule({
  declarations: [
    LibTemplateComponent,
    LibFooterComponent,
    LibSidebarComponent,
    LibLoginComponent,
    LibSendMailComponent,
    LibResetPasswordComponent,
    ModalChangePasswordComponent
  ],
  imports: [
    CommonModule,
    LibMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LibTemplateRoutingModule,
    TranslateModule,
    NgScrollbarModule
  ],
  providers: [
    { provide: 'be_url', useValue: 'be_url' },
    {
      provide: 'beUrl',
      useFactory: getPropertyFromConfig, multi: false, deps: ['be_url', ConfigInitService]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      multi: true,
      deps: [ConfigInitService]
    },
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
