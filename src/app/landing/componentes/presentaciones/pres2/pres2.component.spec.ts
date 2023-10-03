import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pres2Component } from './pres2.component';

describe('Pres2Component', () => {
  let component: Pres2Component;
  let fixture: ComponentFixture<Pres2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pres2Component]
    });
    fixture = TestBed.createComponent(Pres2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
