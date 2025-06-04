import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentScopedServiceComponent } from './component-scoped-service.component';

describe('ComponentScopedServiceComponent', () => {
  let component: ComponentScopedServiceComponent;
  let fixture: ComponentFixture<ComponentScopedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentScopedServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentScopedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
