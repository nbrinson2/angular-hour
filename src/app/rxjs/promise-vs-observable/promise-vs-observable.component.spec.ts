import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorVsNgoninitComponent } from './promise-vs-observable.component';

describe('ConstructorVsNgoninitComponent', () => {
  let component: ConstructorVsNgoninitComponent;
  let fixture: ComponentFixture<ConstructorVsNgoninitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructorVsNgoninitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorVsNgoninitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
