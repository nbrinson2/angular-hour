import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustMapExampleComponent } from './exhaust-map-example.component';

describe('ExhaustMapExampleComponent', () => {
  let component: ExhaustMapExampleComponent;
  let fixture: ComponentFixture<ExhaustMapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExhaustMapExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustMapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
