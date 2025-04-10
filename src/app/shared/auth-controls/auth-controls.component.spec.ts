import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthControlsComponent } from './auth-controls.component';

describe('AuthControlsComponent', () => {
  let component: AuthControlsComponent;
  let fixture: ComponentFixture<AuthControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
