import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSolutionComponent } from './signal-solution.component';

describe('SignalSolutionComponent', () => {
  let component: SignalSolutionComponent;
  let fixture: ComponentFixture<SignalSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignalSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
