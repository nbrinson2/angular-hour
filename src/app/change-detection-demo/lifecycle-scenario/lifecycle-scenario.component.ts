import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { lifecycleScenarioCode } from '../../constants/code-snippets.constants';

@Component({
  selector: 'app-lifecycle-scenario',
  templateUrl: './lifecycle-scenario.component.html',
  styleUrls: ['./lifecycle-scenario.component.scss']
})
export class LifecycleScenarioComponent implements AfterViewInit {
  status = 'Initial status';
  changeCycleCount = 0;
  lifecycleScenarioCode = lifecycleScenarioCode;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    console.log('🔵 ngAfterViewInit start');

    // ✅ First mutation
    this.status = 'Updated in ngAfterViewInit';
    console.log('🟡 Mutated status:', this.status);

    // 🔥 Forcing another change detection run
    this.cdRef.detectChanges();
    this.changeCycleCount++;

    console.log('🔴 Forced detectChanges() inside ngAfterViewInit');
  }
}
