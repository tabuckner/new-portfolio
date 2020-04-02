import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { SidenavToggleService } from 'src/app/core/services/sidenav-toggle.service';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  public isFloating = false;
  public isCollapsing = false;
  public currentNavbarHeight: number;
  public currentNavbarOpacity: number;

  private collapsedNavbarHeight = 48; // in PX
  private collapsedNavbarBgOpacity = 1;
  private expandedNavbarHeight = 48 * 2; // in PX
  private expandedNavbarBgOpacity = 0;
  private currentScrollPosition = 0;
  @ViewChild('hamburger', {read: ElementRef}) private hamburgerButton: ElementRef;

  constructor(private scrollPosition: ScrollService,
              private navigation: NavigationService,
              private sidenavToggle: SidenavToggleService) { }

  ngOnInit(): void {
    this.currentNavbarHeight = this.expandedNavbarHeight;
    this.currentNavbarOpacity = this.expandedNavbarBgOpacity;

    this.currentScrollPosition = this.scrollPosition.getScrollPosition();
    if (this.navbarShouldBeFullyExpanded) {
      this.currentNavbarHeight = this.collapsedNavbarHeight;
      this.currentNavbarOpacity = this.collapsedNavbarBgOpacity;
    }
  }

  ngAfterViewInit() {
    this.scrollPosition.scrollPosition$.subscribe(val => {
      this.currentScrollPosition = val;
    });

    this.scrollPosition.pixelsScrolledUp.subscribe((val) => {
      if (this.shouldUpdateNavbar) {
        this.growHeight(val);
        this.decreaseOpacity(val);
      }
    });

    this.scrollPosition.pixelsScrolledDown.subscribe((val) => {
      if (this.shouldUpdateNavbar) {
        this.shrinkHeight(val);
        this.increaseOpacity(val);
      }

      if (this.navbarShouldBeFullyExpanded) {
        this.currentNavbarHeight = this.collapsedNavbarHeight;
        this.currentNavbarOpacity = this.collapsedNavbarBgOpacity;
      }
    });
  }

  private get shouldUpdateNavbar() {
    return this.currentScrollPosition >= 0 && this.currentScrollPosition <= this.expandedNavbarHeight;
  }

  private get navbarShouldBeFullyExpanded() {
    return this.currentScrollPosition >= this.expandedNavbarHeight;
  }

  public onClickNavItem(anchor: string) {
    this.navigation.onClickNavItem(anchor);
  }

  public onClickMenu() {
    this.sidenavToggle.toggle();
    this.hamburgerButton.nativeElement.blur();
    setTimeout(() => {
      this.sidenavToggle.setShouldAnimate(true);
    });
  }

  private increaseOpacity(pixelsScrolled: number) {
    const travelDistance = this.expandedNavbarHeight - this.collapsedNavbarHeight;
    const nextOpacityPercentageIncrement = ((pixelsScrolled) / travelDistance);
    const nextOpacity = this.currentNavbarOpacity += nextOpacityPercentageIncrement;

    if (nextOpacity >= this.collapsedNavbarBgOpacity) {
      return this.currentNavbarOpacity = this.collapsedNavbarBgOpacity;
    }
    this.currentNavbarOpacity = nextOpacity;
  }

  private decreaseOpacity(pixelsScrolled: number) {
    const travelDistance = this.expandedNavbarHeight - this.collapsedNavbarHeight;
    const nextOpacityPercentageIncrement = ((pixelsScrolled) / travelDistance);
    const nextOpacity = this.currentNavbarOpacity -= nextOpacityPercentageIncrement;

    if (nextOpacity <= this.expandedNavbarBgOpacity) {
      return this.currentNavbarOpacity = this.expandedNavbarBgOpacity;
    }
    this.currentNavbarOpacity = nextOpacity;
  }

  private growHeight(pixelsScrolled: number) {
    const nextHeight = this.currentNavbarHeight + (pixelsScrolled);
    if (nextHeight >= this.expandedNavbarHeight) {
      return this.currentNavbarHeight = this.expandedNavbarHeight;
    }
    this.currentNavbarHeight = nextHeight;
  }

  private shrinkHeight(pixelsScrolled: number) {
    const nextHeight = this.currentNavbarHeight - (pixelsScrolled);

    if (nextHeight <= this.collapsedNavbarHeight) {
      return this.currentNavbarHeight = this.collapsedNavbarHeight;
    }
    this.currentNavbarHeight = nextHeight;
  }
}
