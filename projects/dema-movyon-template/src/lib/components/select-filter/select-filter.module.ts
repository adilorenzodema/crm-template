import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFilterComponent } from './select-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibMaterialModule } from '../../shared/module/material.module';




@NgModule({
  declarations: [
    SelectFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibMaterialModule
  ],
  exports: [
    SelectFilterComponent
  ]
})
export class SelectFilterModule { }
