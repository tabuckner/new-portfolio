import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HeroComponent } from './hero/hero.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

export const PORTFOLIO_MAT_IMPORTS = [
  MatButtonModule,
  MatRippleModule
];

@NgModule({
  declarations: [
    PortfolioComponent,
    HeroComponent,
    SocialButtonsComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    ...PORTFOLIO_MAT_IMPORTS,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
