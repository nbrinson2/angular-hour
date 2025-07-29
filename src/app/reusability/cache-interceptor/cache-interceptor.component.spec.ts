import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheInterceptorComponent } from './cache-interceptor.component';

describe('CacheInterceptorComponent', () => {
  let component: CacheInterceptorComponent;
  let fixture: ComponentFixture<CacheInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CacheInterceptorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacheInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
