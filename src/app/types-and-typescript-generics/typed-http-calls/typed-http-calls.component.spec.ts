import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedHttpCallsComponent } from './typed-http-calls.component';

describe('TypedHttpCallsComponent', () => {
  let component: TypedHttpCallsComponent;
  let fixture: ComponentFixture<TypedHttpCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypedHttpCallsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedHttpCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
