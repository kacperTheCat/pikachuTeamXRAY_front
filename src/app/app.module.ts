import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { CoreModule } from '@app/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { LogstoreModule } from './logstore/logstore.module';
import { SharedModule } from '@app/shared';
import { XrayModule } from './xRay/xray.module';
import { AppComponent } from './app.component';
import { XrayComponent } from './xray/xray.component';
import { LogstoreComponent } from './logstore/logstore.component';
// import { GetData } from '@app/xRay/get-data.service';
import { environment } from '@env/environment';
import { ReconfigModule } from './reconfig-gui/reconfig.module';
import { ReconfigComponent } from './reconfig-gui/reconfig.component';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    LoginModule,
    XrayModule,
    LogstoreModule,
    ReconfigModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
