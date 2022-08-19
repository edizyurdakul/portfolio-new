export interface Projects {
  projects: Project[];
}

export interface Project {
  id: string;
  title: string;
  body: string;
  techs: Tech[];
}

export interface Tech {
  id: string;
  name: string;
}
