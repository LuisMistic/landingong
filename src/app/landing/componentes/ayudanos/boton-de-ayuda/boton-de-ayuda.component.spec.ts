import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDeAyudaComponent } from './boton-de-ayuda.component';

describe('BotonDeAyudaComponent', () => {
  let component: BotonDeAyudaComponent;
  let fixture: ComponentFixture<BotonDeAyudaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonDeAyudaComponent]
    });
    fixture = TestBed.createComponent(BotonDeAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
