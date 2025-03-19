import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPitfallScenarioComponent } from './subscription-pitfall-scenario.component';

describe('SubscriptionPitfallScenarioComponent', () => {
  let component: SubscriptionPitfallScenarioComponent;
  let fixture: ComponentFixture<SubscriptionPitfallScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscriptionPitfallScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionPitfallScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
