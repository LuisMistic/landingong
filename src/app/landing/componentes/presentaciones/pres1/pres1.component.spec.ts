import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pres1Component } from './pres1.component';

describe('Pres1Component', () => {
  let component: Pres1Component;
  let fixture: ComponentFixture<Pres1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pres1Component]
    });
    fixture = TestBed.createComponent(Pres1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
