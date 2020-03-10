import { Component, OnInit } from '@angular/core';
import { SKILL_ITEMS } from 'src/app/core/constants/skill-items';
import { SkillItemModel } from 'src/app/core/interfaces/skill-item-model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: SkillItemModel[] = [...SKILL_ITEMS];

  constructor() { }

  ngOnInit(): void {
  }

}
