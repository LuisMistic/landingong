import { TestBed } from '@angular/core/testing';

import { ModalImgService } from './modal-img.service';

describe('ModalImgService', () => {
  let service: ModalImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
