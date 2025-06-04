import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentScopedServiceComponent } from './parent-scoped-service.component';

describe('ParentScopedServiceComponent', () => {
  let component: ParentScopedServiceComponent;
  let fixture: ComponentFixture<ParentScopedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentScopedServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentScopedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
