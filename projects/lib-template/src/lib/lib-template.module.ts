import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LibFooterComponent } from './components/footer/footer.component';
import { LibTemplateComponent } from './components/lib-template.component';
import { LibSidebarComponent } from './components/sidebar/sidebar.component';
import { LibMaterialModule } from './shared/module/material.module';


@NgModule({
  declarations: [
    LibTemplateComponent,
    LibFooterComponent,
    LibSidebarComponent
  ],
  imports: [
    CommonModule,
    LibMaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    LibTemplateComponent
  ]
})
export class LibTemplateModule { }
