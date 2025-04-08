import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsavedChangesModalComponent } from './unsave-changes-modal.component';

describe('UnsaveChangesModalComponent', () => {
  let component: UnsavedChangesModalComponent;
  let fixture: ComponentFixture<UnsavedChangesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnsavedChangesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsavedChangesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
