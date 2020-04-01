import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yearRangeText: string;
  private readonly publishedYear = 2020;

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.yearRangeText = currentYear === this.publishedYear ? `${currentYear}` : `${this.publishedYear} - ${currentYear}`;
  }

  public onClickNavItem(anchorString: string) {
    this.navigation.onClickNavItem(anchorString);
  }

}
