import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { onPushScenarioCode } from '../../constants/code-snippets.constants';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrl: './on-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  counter = 0;
  intervalId: any;
  onPushScenarioCode = onPushScenarioCode;

  constructor(
    private cdRef: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  start() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.counter++;
        // Without manual change detection, the view won't update because Angular doesn't know this value changed.
      }, 1000);
    });
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  manualDetect() {
    this.cdRef.detectChanges();
  }

}
