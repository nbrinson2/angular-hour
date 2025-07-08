import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelUseCaseComponent } from './panel-use-case.component';

describe('PanelUseCaseComponent', () => {
  let component: PanelUseCaseComponent;
  let fixture: ComponentFixture<PanelUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelUseCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
