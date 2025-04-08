import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateConcernsComponent } from './separate-concerns.component';

describe('SeparateConcernsComponent', () => {
  let component: SeparateConcernsComponent;
  let fixture: ComponentFixture<SeparateConcernsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeparateConcernsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparateConcernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
