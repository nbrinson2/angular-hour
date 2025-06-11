import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingVariablesFromInputComponent } from './setting-variables-from-input.component';

describe('SettingVariablesFromInputComponent', () => {
  let component: SettingVariablesFromInputComponent;
  let fixture: ComponentFixture<SettingVariablesFromInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingVariablesFromInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingVariablesFromInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
