import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ReconfigComponent } from './reconfig.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthenticationGuardAdmins } from '../core/authentication/authenticationAdmins.guard';

const routes: Routes = Route.withShell([
  {
    path: 'reconfig',
    component: ReconfigComponent,
    data: {
      title: extract('Reconfig')
    }, canActivate:[AuthenticationGuardAdmins]

  }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuardAdmins]
})
export class ReconfigRoutingModule { }
