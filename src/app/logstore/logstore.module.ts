import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { LogstoreRoutingModule } from './logstore-routing.module';
import { LogstoreComponent, PhotoDialogComponent } from './logstore.component';
import {MatTableModule} from '@angular/material/table';
import { Component } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    LogstoreRoutingModule,
    MatTableModule,

  ],
  declarations: [
     LogstoreComponent, PhotoDialogComponent
  ],
  entryComponents: [LogstoreComponent, PhotoDialogComponent ]
})
export class LogstoreModule { }
