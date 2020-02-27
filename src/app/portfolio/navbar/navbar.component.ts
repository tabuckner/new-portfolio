import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  public isFloating = false;

  constructor(private scrollPosition: ScrollService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.scrollPosition.scrollPosition$.subscribe(val => val > 0 ? this.isFloating = true : this.isFloating = false);
  }

}
