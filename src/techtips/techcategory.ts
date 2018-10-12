import * as fs from "fs";
import * as yaml from "read-yaml";
import { Tip } from "./tip";
const octokit = require("@octokit/rest")();
const Base64 = require("js-base64").Base64;
const YAML = require("yamljs");

export class TechCategory {
  suportedTypes = ["info", "command"];

  constructor(public accessToken: string, public name: string) {}

  getAuthHeader(): any {
    if (this.accessToken === undefined || this.accessToken.length == 0) {
      return {}; // when used in local we can use without token.
    }

    return {
      authorization: `Bearer ${this.accessToken}`
    };
  }

  async getRepoFileContent(file): Promise<string> {
    var response = await octokit.repos.getContent({
      headers: this.getAuthHeader(),
      owner: "sairamaj",
      repo: "techtips",
      path: file
    });
    
    return Base64.decode(response.data.content);
  }

  async getTips(): Promise<Array<Tip>> {
    var content = await this.getRepoFileContent(
      `src/techtips/data/${this.name}.yaml`
    );
    let tips = YAML.parse(content);

    // this.suportedTypes.forEach(type =>  {
    //     var content = this.getRepoFileContent(`src/techtips/data/${this.name}.${type}.yaml`);
    // });

    tips.forEach(t => {
      t.category = this.name;
    });

    return tips;
  }
}
