import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TabsComponent } from './tabs.component';
import { TabsRoutingModule } from './tabs.routing';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
