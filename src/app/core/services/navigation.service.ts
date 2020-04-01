import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private scroller: ViewportScroller) {}

  public onClickNavItem(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }
}
