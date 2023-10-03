import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoComponent } from './trabajo.component';

describe('TrabajoComponent', () => {
  let component: TrabajoComponent;
  let fixture: ComponentFixture<TrabajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabajoComponent]
    });
    fixture = TestBed.createComponent(TrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
