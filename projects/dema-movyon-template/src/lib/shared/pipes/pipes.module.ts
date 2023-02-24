import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPermissionPipe } from './get-permission-pipe.pipe';

@NgModule({
  declarations: [GetPermissionPipe],
  imports: [
    CommonModule
  ],
  exports: [GetPermissionPipe]
})
export class LibPipesModule { }
