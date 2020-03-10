import { ExperienceLevels } from '../enums/experience-levels.enum';
import { PreferenceLevels } from '../enums/preference-levels.enum';

export interface SkillItemModel {
  name: string;
  imageUrl: string;
  experience: ExperienceLevels;
  preference: PreferenceLevels;
}
