import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFlotanteTrabajoComponent } from './boton-flotante-trabajo.component';

describe('BotonFlotanteTrabajoComponent', () => {
  let component: BotonFlotanteTrabajoComponent;
  let fixture: ComponentFixture<BotonFlotanteTrabajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonFlotanteTrabajoComponent]
    });
    fixture = TestBed.createComponent(BotonFlotanteTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
