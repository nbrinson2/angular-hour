import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleScenarioComponent } from './lifecycle-scenario.component';

describe('LifecycleScenarioComponent', () => {
  let component: LifecycleScenarioComponent;
  let fixture: ComponentFixture<LifecycleScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifecycleScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
