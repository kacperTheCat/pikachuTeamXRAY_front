import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ReconfigComponent } from './reconfig.component';

const routes: Routes = Route.withShell([
  { path: 'reconfig', component: ReconfigComponent, data: { title: extract('Reconfig') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReconfigRoutingModule { }
