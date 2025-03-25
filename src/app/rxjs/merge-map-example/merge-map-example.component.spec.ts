import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapExampleComponent } from './merge-map-example.component';

describe('MergeMapExampleComponent', () => {
  let component: MergeMapExampleComponent;
  let fixture: ComponentFixture<MergeMapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MergeMapExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
