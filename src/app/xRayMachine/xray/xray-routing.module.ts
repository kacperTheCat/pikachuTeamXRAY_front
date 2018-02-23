import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { XrayComponent } from './xray.component';

const routes: Routes = Route.withShell([
  { path: 'xray', component: XrayComponent, data: { title: extract('Xray') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class XrayRoutingModule { }
