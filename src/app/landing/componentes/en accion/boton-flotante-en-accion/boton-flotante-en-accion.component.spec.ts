import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFlotanteEnAccionComponent } from './boton-flotante-en-accion.component';

describe('BotonFlotanteEnAccionComponent', () => {
  let component: BotonFlotanteEnAccionComponent;
  let fixture: ComponentFixture<BotonFlotanteEnAccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonFlotanteEnAccionComponent]
    });
    fixture = TestBed.createComponent(BotonFlotanteEnAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
