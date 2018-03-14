import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { Route, extract } from '@app/core';
import { XrayComponent } from './xray.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthenticationGuardUsersType } from '../core/authentication/authenticationUsersType.guard';

const routes: Routes = Route.withShell([
  {
    path: 'xray',
    component: XrayComponent,
    data: {
      title: extract('Xray')
    }, canActivate: [AuthenticationGuardUsersType]
  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuardUsersType]
})
export class XrayRoutingModule { }
