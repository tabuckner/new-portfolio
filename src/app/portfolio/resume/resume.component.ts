import { Component, OnInit } from '@angular/core';
import { ResumeItemModel } from 'src/app/core/interfaces/resume-item-model';
import { RESUME_ITEMS } from 'src/app/core/constants/resume-items';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public resumeItems: ResumeItemModel[] = [...RESUME_ITEMS];

  constructor() { }

  ngOnInit(): void {
  }

}
