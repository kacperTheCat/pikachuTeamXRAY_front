import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { XrayComponent } from './xray.component';
import { XrayRoutingModule } from './xray-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    XrayRoutingModule
  ],
  declarations: [
    XrayComponent
  ]
})
export class XrayModule { }
