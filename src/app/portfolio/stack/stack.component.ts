import { Component, OnInit } from '@angular/core';
import { SkillItemModel } from 'src/app/core/interfaces/skill-item-model';
import { SKILL_ITEMS } from 'src/app/core/constants/skill-items';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  public skills: SkillItemModel[] = [...SKILL_ITEMS];

  constructor() { }

  ngOnInit(): void {
  }

}
