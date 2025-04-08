import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivationGuardComponent } from './deactivation-guard.component';

describe('DeactivationGuardComponent', () => {
  let component: DeactivationGuardComponent;
  let fixture: ComponentFixture<DeactivationGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeactivationGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeactivationGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
