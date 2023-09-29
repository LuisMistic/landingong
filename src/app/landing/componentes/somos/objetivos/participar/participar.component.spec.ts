import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiparComponent } from './participar.component';

describe('ParticiparComponent', () => {
  let component: ParticiparComponent;
  let fixture: ComponentFixture<ParticiparComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticiparComponent]
    });
    fixture = TestBed.createComponent(ParticiparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
