import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExternalLinkService } from 'src/app/core/services/external-link.service';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.scss']
})
export class SocialButtonsComponent implements OnInit {
  public sanitizedSvg: any;
  @Input() iconUrl: string;
  @Input() altText: string;

  constructor(private sanitizer: DomSanitizer,
              private externalLink: ExternalLinkService) { }

  ngOnInit(): void {
    this.sanitizedSvg = this.sanitizer.bypassSecurityTrustUrl(this.iconUrl);
  }

  public onClickSocialButton(templateRef) {
    return this.externalLink.redirectToTemplateAnchor(templateRef);
  }

}
