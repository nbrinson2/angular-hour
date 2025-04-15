import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsHostComponent } from './breadcrumbs-host.component';

describe('BreadcrumbsHostComponent', () => {
  let component: BreadcrumbsHostComponent;
  let fixture: ComponentFixture<BreadcrumbsHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbsHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
