import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosComponent } from './insumos.component';

describe('InsumosComponent', () => {
  let component: InsumosComponent;
  let fixture: ComponentFixture<InsumosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsumosComponent]
    });
    fixture = TestBed.createComponent(InsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
