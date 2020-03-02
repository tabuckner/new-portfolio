import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yearRangeText: string;
  private readonly publishedYear = 2020;

  constructor() { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.yearRangeText = currentYear === this.publishedYear ? `${currentYear}` : `${this.publishedYear} - ${currentYear}`;
  }

}
