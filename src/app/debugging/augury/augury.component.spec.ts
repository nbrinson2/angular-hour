import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuguryComponent } from './augury.component';

describe('AuguryComponent', () => {
  let component: AuguryComponent;
  let fixture: ComponentFixture<AuguryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuguryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuguryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
