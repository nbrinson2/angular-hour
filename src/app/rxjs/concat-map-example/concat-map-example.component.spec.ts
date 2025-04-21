import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapExampleComponent } from './concat-map-example.component';
import { provideHttpClient } from '@angular/common/http';

describe('ConcatMapExampleComponent', () => {
  let component: ConcatMapExampleComponent;
  let fixture: ComponentFixture<ConcatMapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcatMapExampleComponent],
      imports: [],
      providers: [
        provideHttpClient(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatMapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
