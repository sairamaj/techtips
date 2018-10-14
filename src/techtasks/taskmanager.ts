import { Task } from "./task";
import { GitProxy } from "../gitProxy";

export class TaskManager {
  constructor(public accessToken: string) {}

 
  async getTasks(): Promise<Array<Task>> {
    var mdFiles = await new GitProxy(this.accessToken)
        .getRepoFiles('techdata','techtasks/azure','MD');
    return mdFiles.map(mdFile => new Task(mdFile));
  }

  async getTaskDetail(name: string): Promise<Task> {
    var content = await new GitProxy(this.accessToken).getRepoFileContent(`techtasks/azure/${name}`);
    return new Task(name, content);
  }
}
