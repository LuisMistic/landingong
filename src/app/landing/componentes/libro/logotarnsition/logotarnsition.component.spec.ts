import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotarnsitionComponent } from './logotarnsition.component';

describe('LogotarnsitionComponent', () => {
  let component: LogotarnsitionComponent;
  let fixture: ComponentFixture<LogotarnsitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogotarnsitionComponent]
    });
    fixture = TestBed.createComponent(LogotarnsitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
