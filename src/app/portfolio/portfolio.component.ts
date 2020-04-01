import { Component, OnInit } from '@angular/core';
import { SidenavToggleService } from '../core/services/sidenav-toggle.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public sidenavOpened: boolean;

  constructor(private sidenavToggle: SidenavToggleService) { }

  ngOnInit(): void {
    this.sidenavToggle.isOpened.subscribe(nextState => {
      this.sidenavOpened = nextState;
    });
  }

  public onClosed() {
    this.sidenavToggle.setIsOpened(false);
  }

}
