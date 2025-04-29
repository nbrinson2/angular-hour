import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsConsTableComponent } from './pros-cons-table.component';

describe('ProsConsTableComponent', () => {
  let component: ProsConsTableComponent;
  let fixture: ComponentFixture<ProsConsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProsConsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsConsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
