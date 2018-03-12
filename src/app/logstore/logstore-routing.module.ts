import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { LogstoreComponent } from './logstore.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/logstore', pathMatch: 'full' },
  { path: 'logstore', component: LogstoreComponent, data: { title: extract('Logstore') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LogstoreRoutingModule { }
