import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlContainerComponent } from './control-container.component';

describe('ControlContainerComponent', () => {
  let component: ControlContainerComponent;
  let fixture: ComponentFixture<ControlContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControlContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
