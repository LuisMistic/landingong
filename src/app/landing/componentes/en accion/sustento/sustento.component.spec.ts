import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentoComponent } from './sustento.component';

describe('SustentoComponent', () => {
  let component: SustentoComponent;
  let fixture: ComponentFixture<SustentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SustentoComponent]
    });
    fixture = TestBed.createComponent(SustentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
