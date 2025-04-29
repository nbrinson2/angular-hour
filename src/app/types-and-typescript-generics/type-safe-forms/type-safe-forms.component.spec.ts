import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSafeFormsComponent } from './type-safe-forms.component';

describe('TypeSafeFormsComponent', () => {
  let component: TypeSafeFormsComponent;
  let fixture: ComponentFixture<TypeSafeFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeSafeFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeSafeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
