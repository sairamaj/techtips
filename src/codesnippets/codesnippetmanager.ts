import { CodeSnippet } from "./codesnippet";
import { GitProxy } from "../gitProxy";

export class CodeSnippetsManager {
  constructor(public accessToken: string) {}

 
  async getTasks(): Promise<Array<CodeSnippet>> {
    var mdFiles = await new GitProxy(this.accessToken)
        .getRepoFiles('techdata','codesnippets','MD');
    return mdFiles.map(mdFile => new CodeSnippet(mdFile));
  }

  async getTaskDetail(name: string): Promise<CodeSnippet> {
    var content = await new GitProxy(this.accessToken).getRepoFileContent(`codesnippets/${name}`);
    return new CodeSnippet(name, content);
  }
}
