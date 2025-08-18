import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFlagImplComponent } from './feature-flag-impl.component';

describe('FeatureFlagImplComponent', () => {
  let component: FeatureFlagImplComponent;
  let fixture: ComponentFixture<FeatureFlagImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureFlagImplComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureFlagImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
