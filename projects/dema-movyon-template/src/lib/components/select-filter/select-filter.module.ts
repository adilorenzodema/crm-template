import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFilterComponent } from './select-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibMaterialModule } from '../../shared/module/material.module';
<<<<<<< HEAD


=======
>>>>>>> 8cd98d4f10dde4c54d5d8dafa456199f5efc2d60


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
