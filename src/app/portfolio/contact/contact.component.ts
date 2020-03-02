import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClickSocialButton(linkRef: any): void {
    if (!linkRef || !linkRef.href) {
      return;
    }
    const currentUrl = window.location.href;
    const buttonHref = linkRef.href;
    if (currentUrl.indexOf(buttonHref) > -1) {
      return;
    }

    window.open(buttonHref, '_blank');
  }

}
