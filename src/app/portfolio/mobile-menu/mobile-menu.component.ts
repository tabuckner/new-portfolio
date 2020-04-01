import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { SidenavToggleService } from 'src/app/core/services/sidenav-toggle.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor(private sidenavToggle: SidenavToggleService,
              private navigation: NavigationService) { }

  ngOnInit(): void {
  }

  public onClickNavItem(anchor: string) {
    this.sidenavToggle.toggle();
    this.navigation.onClickNavItem(anchor);
  }

}
