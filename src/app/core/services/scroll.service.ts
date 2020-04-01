import { Injectable } from '@angular/core';
import { fromEvent, Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, distinctUntilChanged, tap, pairwise } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scrollPosition = new BehaviorSubject<number>(0);
  public pixelsScrolledUp = new Subject<number>();
  public pixelsScrolledDown = new Subject<number>();

  constructor() {
    fromEvent(window, 'scroll').pipe(
      // throttleTime(10),
      map(() => window.pageYOffset),
      distinctUntilChanged(),
      tap(val => this.scrollPosition.next(val)),
      pairwise(),
      tap((val) => {
        const [previous, next] = val;
        const difference = Math.abs(previous - next);
        if (previous > next) {
          // going up
          this.pixelsScrolledUp.next(difference);
          // console.warn('up', difference);
        } else {
          // going down
          this.pixelsScrolledDown.next(difference);
          // console.warn('down', difference);
        }
      }),
    ).subscribe();

    setTimeout(() => {
      this.scrollPosition.next(window.pageYOffset);
    });
  }

  public get scrollPosition$(): Observable<number> {
    return this.scrollPosition.asObservable();
  }

  public getScrollPosition(): number {
    return window.scrollY;
  }

}
