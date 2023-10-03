import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionComponent } from './fundacion.component';

describe('FundacionComponent', () => {
  let component: FundacionComponent;
  let fixture: ComponentFixture<FundacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundacionComponent]
    });
    fixture = TestBed.createComponent(FundacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
