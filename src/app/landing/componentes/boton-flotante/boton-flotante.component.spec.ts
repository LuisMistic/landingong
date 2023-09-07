import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonFlotanteComponent } from './boton-flotante.component';

describe('BotonFlotanteComponent', () => {
  let component: BotonFlotanteComponent;
  let fixture: ComponentFixture<BotonFlotanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonFlotanteComponent]
    });
    fixture = TestBed.createComponent(BotonFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
