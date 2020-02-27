import { Injectable } from '@angular/core';
import { fromEvent, Observable, BehaviorSubject } from 'rxjs';
import { throttleTime, map, distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  public scrollPosition = new BehaviorSubject<number>(0);

  constructor() {
    fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      distinctUntilChanged(),
      map(val => this.scrollPosition.next(val))
    ).subscribe();

    setTimeout(() => {
      this.scrollPosition.next(window.pageYOffset);
    });
  }

  public get scrollPosition$(): Observable<number> {
    return this.scrollPosition.asObservable();
  }

}
