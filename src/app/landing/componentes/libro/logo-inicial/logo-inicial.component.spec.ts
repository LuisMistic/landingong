import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoInicialComponent } from './logo-inicial.component';

describe('LogoInicialComponent', () => {
  let component: LogoInicialComponent;
  let fixture: ComponentFixture<LogoInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoInicialComponent]
    });
    fixture = TestBed.createComponent(LogoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
