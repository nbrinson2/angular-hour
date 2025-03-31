import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStateInspectorComponent } from './component-state-inspector.component';

describe('ComponentStateInspectorComponent', () => {
  let component: ComponentStateInspectorComponent;
  let fixture: ComponentFixture<ComponentStateInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentStateInspectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentStateInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
