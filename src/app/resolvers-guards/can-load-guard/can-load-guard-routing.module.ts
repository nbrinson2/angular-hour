import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuardComponent } from './can-load-guard.component';

const routes: Routes = [
  { path: '', component: CanLoadGuardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanLoadGuardRoutingModule {}
