import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDisplayComponent } from './example-display.component';

describe('ExampleDisplayComponent', () => {
  let component: ExampleDisplayComponent;
  let fixture: ComponentFixture<ExampleDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
