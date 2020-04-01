import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLinkService {

  constructor() { }

  public redirectToTemplateAnchor(templateAnchor: any): void {
    if (!templateAnchor || !templateAnchor.href) {
      return;
    }
    const currentUrl = window.location.href;
    const buttonHref = templateAnchor.href;
    if (currentUrl.indexOf(buttonHref) > -1) {
      return;
    }

    window.open(buttonHref, '_blank');
  }
}
