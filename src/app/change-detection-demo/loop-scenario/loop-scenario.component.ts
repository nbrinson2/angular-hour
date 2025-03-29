import { Component, ChangeDetectorRef, OnInit, OnDestroy, NgZone } from '@angular/core';
import { loopScenarioCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-loop-scenario',
  templateUrl: './loop-scenario.component.html',
  styleUrls: ['./loop-scenario.component.scss']
})
export class LoopScenarioComponent implements OnInit, OnDestroy {
  loopCounter = 0;
  intervalId: any;
  loopScenarioCode = loopScenarioCode;

  constructor(
    private cdRef: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.loopCounter++;
        if (this.loopCounter > 5) {
          clearInterval(this.intervalId);
        } else {
          this.cdRef.detectChanges(); // ❌ Forcing heavy change detection cycles
        }
      }, 500);
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
