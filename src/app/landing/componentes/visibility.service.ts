import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  private isVisible = new BehaviorSubject<boolean>(true);

  getVisibility(): Observable<boolean> {
    return this.isVisible.asObservable();
  }

  setVisibility(isVisible: boolean): void {
    this.isVisible.next(isVisible);
  }
}
