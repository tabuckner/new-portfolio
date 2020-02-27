import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HeroComponent } from './hero/hero.component';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    HeroComponent,
    SocialButtonsComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
