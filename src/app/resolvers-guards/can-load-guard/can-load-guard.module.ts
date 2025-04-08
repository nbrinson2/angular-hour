import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanLoadGuardComponent } from './can-load-guard.component';
import { CanLoadGuardRoutingModule } from './can-load-guard-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CanLoadGuardComponent],
  imports: [
    CommonModule,
    CanLoadGuardRoutingModule,
    SharedModule
  ]
})
export class CanLoadGuardModule {}
