import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgQuienesComponent } from './img-quienes.component';

describe('ImgQuienesComponent', () => {
  let component: ImgQuienesComponent;
  let fixture: ComponentFixture<ImgQuienesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgQuienesComponent]
    });
    fixture = TestBed.createComponent(ImgQuienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
