import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibTemplateComponent } from './components/lib-template.component';
import { LibMaterialModule } from './shared/module/material.module';


@NgModule({
  declarations: [
    LibTemplateComponent
  ],
  imports: [
    CommonModule,
    LibMaterialModule,
    RouterModule
  ],
  exports: [
    LibTemplateComponent
  ]
})
export class LibTemplateModule { }
