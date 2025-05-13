import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingViaServiceComponent } from './sibling-via-service.component';

describe('SiblingViaServiceComponent', () => {
  let component: SiblingViaServiceComponent;
  let fixture: ComponentFixture<SiblingViaServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiblingViaServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
