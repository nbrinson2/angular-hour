import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastValueFromExampleComponent } from './last-value-from-example.component';

describe('LastValueFromExampleComponent', () => {
  let component: LastValueFromExampleComponent;
  let fixture: ComponentFixture<LastValueFromExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastValueFromExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastValueFromExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
