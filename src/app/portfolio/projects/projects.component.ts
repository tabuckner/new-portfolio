import { Component, OnInit } from '@angular/core';
import { ProjectItemModel } from 'src/app/core/interfaces/project-item-model';
import { PROJECT_ITEMS } from 'src/app/core/constants/project-items';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: ProjectItemModel[] = [...PROJECT_ITEMS];

  constructor() { }

  ngOnInit(): void {
  }

  public onClickSource(project: ProjectItemModel) {
    window.open(project.sourceUrl, '_blank');
  }

  public onClickLiveDemo(project: ProjectItemModel) {
    if (!project.demoUrl) {
      return;
    }

    window.open(project.demoUrl, '_blank');
  }
}
