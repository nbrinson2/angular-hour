import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopScenarioComponent } from './loop-scenario.component';

describe('LoopScenarioComponent', () => {
  let component: LoopScenarioComponent;
  let fixture: ComponentFixture<LoopScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoopScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
