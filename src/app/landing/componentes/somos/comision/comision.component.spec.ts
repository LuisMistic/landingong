import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionComponent } from './comision.component';

describe('ComisionComponent', () => {
  let component: ComisionComponent;
  let fixture: ComponentFixture<ComisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComisionComponent]
    });
    fixture = TestBed.createComponent(ComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
