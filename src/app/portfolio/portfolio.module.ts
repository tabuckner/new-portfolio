import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HeroComponent } from './hero/hero.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';

import { MatRippleModule } from '@angular/material/core';

export const PORTFOLIO_MAT_IMPORTS = [
  MatRippleModule
];

@NgModule({
  declarations: [
    PortfolioComponent,
    HeroComponent,
    SocialButtonsComponent,
  ],
  imports: [
    CommonModule,
    ...PORTFOLIO_MAT_IMPORTS,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
