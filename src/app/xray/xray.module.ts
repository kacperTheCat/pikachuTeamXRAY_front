import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { XrayRoutingModule } from './xray-routing.module';
import { XrayComponent } from './xray.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GetData } from './get-data.service';





@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    XrayRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    XrayComponent
  ],
  providers: [
    GetData
  ]
})
export class XrayModule {}
