import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import {  ReconfigRoutingModule } from './reconfig-routing.module';
import { ReconfigComponent } from './reconfig.component';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ReconfigRoutingModule
  ],
  declarations: [
    ReconfigComponent
  ]
})
export class ReconfigModule { }
