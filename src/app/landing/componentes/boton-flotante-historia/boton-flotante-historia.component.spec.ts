import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFlotanteHistoriaComponent } from './boton-flotante-historia.component';

describe('BotonFlotanteHistoriaComponent', () => {
  let component: BotonFlotanteHistoriaComponent;
  let fixture: ComponentFixture<BotonFlotanteHistoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonFlotanteHistoriaComponent]
    });
    fixture = TestBed.createComponent(BotonFlotanteHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
