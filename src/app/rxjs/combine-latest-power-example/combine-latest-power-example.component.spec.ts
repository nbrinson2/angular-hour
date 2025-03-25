import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestPowerExampleComponent } from './combine-latest-power-example.component';

describe('CombineLatestPowerExampleComponent', () => {
  let component: CombineLatestPowerExampleComponent;
  let fixture: ComponentFixture<CombineLatestPowerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombineLatestPowerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestPowerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
