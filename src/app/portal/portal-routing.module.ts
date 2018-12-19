import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalAppComponent } from './portal-app/portal-app.component';

const routes: Routes = [
  {
    path: '',
    component: PortalAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
