import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { SidenavToggleService } from 'src/app/core/services/sidenav-toggle.service';
import { listItemFadeInRightOut } from 'src/app/core/animations/list-animations.animation';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [listItemFadeInRightOut]
})
export class MobileMenuComponent implements OnInit {
  public shouldAnimate = false;

  constructor(private sidenavToggle: SidenavToggleService,
              private navigation: NavigationService) { }

  ngOnInit(): void {
    this.sidenavToggle.shouldAnimate.subscribe(bool => {
      this.shouldAnimate = bool;
    });
  }

  public onClickNavItem(anchor: string) {
    this.sidenavToggle.toggle();
    this.navigation.onClickNavItem(anchor);
  }

}
