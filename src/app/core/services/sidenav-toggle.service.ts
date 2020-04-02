import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavToggleService {
  isOpened = new BehaviorSubject<boolean>(false);
  shouldAnimate = new BehaviorSubject<boolean>(false);

  constructor() { }

  public toggle() {
    const currentState = this.isOpened.getValue();
    this.isOpened.next(!currentState);
  }

  public setIsOpened(nextState: boolean) {
    this.isOpened.next(nextState);
  }

  public setShouldAnimate(nextState: boolean) {
    this.shouldAnimate.next(nextState);
  }
}
