import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFlotanteObjetivosComponent } from './boton-flotante-objetivos.component';

describe('BotonFlotanteObjetivosComponent', () => {
  let component: BotonFlotanteObjetivosComponent;
  let fixture: ComponentFixture<BotonFlotanteObjetivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonFlotanteObjetivosComponent]
    });
    fixture = TestBed.createComponent(BotonFlotanteObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
