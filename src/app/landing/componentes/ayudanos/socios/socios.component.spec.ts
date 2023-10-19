import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosComponent } from './socios.component';

describe('SociosComponent', () => {
  let component: SociosComponent;
  let fixture: ComponentFixture<SociosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SociosComponent]
    });
    fixture = TestBed.createComponent(SociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
