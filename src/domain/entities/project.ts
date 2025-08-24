import { IProject } from '../interfaces/project.interface';

export class ProjectEntity implements IProject {
  id: number;
  name: string;
  description: string;
  tasks = [];
  user;
}
