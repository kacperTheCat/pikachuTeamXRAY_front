import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { LogstoreComponent } from './logstore.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// import { AuthenticationGuardAuditor } from '../core/authentication/authenticationAuditor.guard';
import { AuthenticationGuardAuditors } from '@app/logstore/authenticationAuditors.guard';


const routes: Routes = Route.withShell([
  {
    path: 'logstore',
    component: LogstoreComponent,
    data: {
      title: extract('Logstore')
    }, canActivate: [AuthenticationGuardAuditors]
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuardAuditors]
})
export class LogstoreRoutingModule { }
