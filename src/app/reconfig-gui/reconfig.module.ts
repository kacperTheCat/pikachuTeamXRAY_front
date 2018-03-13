import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import {  ReconfigRoutingModule } from './reconfig-routing.module';
import { ReconfigComponent } from './reconfig.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    ReconfigRoutingModule,
    MatTableModule
  ],
  declarations: [
    ReconfigComponent
  ]
})
export class ReconfigModule { }
