import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterDestroyScenarioComponent } from './after-destroy-scenario.component';

describe('AfterDestroyScenarioComponent', () => {
  let component: AfterDestroyScenarioComponent;
  let fixture: ComponentFixture<AfterDestroyScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfterDestroyScenarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterDestroyScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
