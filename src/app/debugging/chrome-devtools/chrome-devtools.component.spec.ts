import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeDevtoolsComponent } from './chrome-devtools.component';

describe('ChromeDevtoolsComponent', () => {
  let component: ChromeDevtoolsComponent;
  let fixture: ComponentFixture<ChromeDevtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChromeDevtoolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromeDevtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
