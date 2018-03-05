import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { XrayRoutingModule } from './xray-routing.module';
import { XrayComponent } from './xray.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { GetData } from './get-data.service';
import { GetDataService } from '../global/get-data.service';
import {FormsModule} from '@angular/forms'





@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    XrayRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    XrayComponent
  ],
  providers: [
     GetDataService
  ]
})
export class XrayModule {}
