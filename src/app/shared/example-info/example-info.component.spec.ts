import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInfoComponent } from './example-info.component';

describe('ExampleInfoComponent', () => {
  let component: ExampleInfoComponent;
  let fixture: ComponentFixture<ExampleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
