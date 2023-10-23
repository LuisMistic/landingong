import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDeContactoComponent } from './boton-de-contacto.component';

describe('BotonDeContactoComponent', () => {
  let component: BotonDeContactoComponent;
  let fixture: ComponentFixture<BotonDeContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonDeContactoComponent]
    });
    fixture = TestBed.createComponent(BotonDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
