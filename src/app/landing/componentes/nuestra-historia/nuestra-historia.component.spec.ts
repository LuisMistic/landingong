import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraHistoriaComponent } from './nuestra-historia.component';

describe('NuestraHistoriaComponent', () => {
  let component: NuestraHistoriaComponent;
  let fixture: ComponentFixture<NuestraHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestraHistoriaComponent]
    });
    fixture = TestBed.createComponent(NuestraHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
