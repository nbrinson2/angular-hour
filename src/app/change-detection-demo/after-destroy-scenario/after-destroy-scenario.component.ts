import { ChangeDetectorRef, Component } from '@angular/core';
import { afterDestroyScenarioCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-after-destroy-scenario',
  templateUrl: './after-destroy-scenario.component.html',
  styleUrl: './after-destroy-scenario.component.scss',
})
export class AfterDestroyScenarioComponent {
  status = 'Initializing...';
  initializedTime = '';
  destroyed = false;
  afterDestroyScenarioCode = afterDestroyScenarioCode;
  exampleInfo: InfoItem = {
    context:
      'This component updates asynchronously using setTimeout() and forces detectChanges() afterward, which may happen after the view is stable or even destroyed.',
  };

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('🟡 ngOnInit started');

    setTimeout(() => {
      if (this.destroyed) {
        console.warn('⚠️ Attempted detectChanges() after destroy');
        return;
      }

      this.status = 'Updated in setTimeout after init';
      this.initializedTime = new Date().toLocaleTimeString();
      console.log('🟡 Async update applied');

      // ⚠️ Forcing detectChanges() after async update
      this.cdRef.detectChanges();
      console.log('🔄 detectChanges() called from setTimeout');
    }, 2000);
  }

  ngOnDestroy() {
    this.destroyed = true;
    console.log('🛑 Component destroyed');
  }
}
