import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioComponent } from './anuncio.component';

describe('AnuncioComponent', () => {
  let component: AnuncioComponent;
  let fixture: ComponentFixture<AnuncioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnuncioComponent]
    });
    fixture = TestBed.createComponent(AnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
