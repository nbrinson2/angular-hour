import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterferenceComponent } from './interference.component';

describe('InterferenceComponent', () => {
  let component: InterferenceComponent;
  let fixture: ComponentFixture<InterferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
