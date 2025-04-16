import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { subscriptionPitfallScenarioCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-subscription-pitfall-scenario',
  templateUrl: './subscription-pitfall-scenario.component.html',
  styleUrls: ['./subscription-pitfall-scenario.component.scss'],
})
export class SubscriptionPitfallScenarioComponent implements OnInit, OnDestroy {
  value = 0;
  subscription!: Subscription;
  destroyed = false;
  subscriptionPitfallScenarioCode = subscriptionPitfallScenarioCode;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('🟡 Subscribing to interval');
    this.subscription = interval(1000).subscribe((count) => {
      this.value = count;
      console.log(`🔄 Emitted value: ${this.value}`);
    });
  }

  ngOnDestroy() {
    this.destroyed = true;
    // ❌ Forgot to unsubscribe! (intentional for demo purposes)
    console.warn('⚠️ Component destroyed, but subscription is still active!');
  }
}
