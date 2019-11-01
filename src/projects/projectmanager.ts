import { Project } from "./project";
import { GitProxy } from "../gitProxy";

export class ProjectManager {
  constructor(public accessToken: string) {}

 
  async getTasks(): Promise<Array<Project>> {
    var mdFiles = await new GitProxy(this.accessToken)
        .getRepoFiles('techdata','projects','MD');
    return mdFiles.map(mdFile => new Project(mdFile));
  }

  async getTaskDetail(name: string): Promise<Project> {
    var content = await new GitProxy(this.accessToken).getRepoFileContent(`projects/${name}`);
    return new Project(name, content);
  }
}
