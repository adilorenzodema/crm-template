import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { LibTemplateModule } from 'projects/dema-movyon-template/src/lib/lib-template.module';
import { LibMaterialModule } from 'projects/dema-movyon-template/src/lib/shared/module/material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    LibTemplateModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LibMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: 'header', useValue: environment.header },
    { provide: 'footer', useValue: environment.footer },
    { provide: 'env', useValue: environment },
    { provide: 'login', useValue: environment.login },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
