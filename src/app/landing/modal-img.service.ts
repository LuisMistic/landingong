import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalImgService {

  private subject = new Subject<any>();

  constructor() { }

  emitEvent(): void {
    this.subject.next(undefined);
  }

  getEvent(): Subject<any> {
    return this.subject;
  }
}
