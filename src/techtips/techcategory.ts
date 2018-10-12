import { Tip } from "./tip";
import { GitProxy } from "./gitProxy";
const YAML = require("yamljs");

export class TechCategory {
  suportedTypes = ["info", "command"];

  constructor(public accessToken: string, public name: string) { }

  async getTips(): Promise<Array<Tip>> {
    let tips = []
    var response = await new GitProxy(this.accessToken).getRepoFileContent(`data/techtips/${this.name}.yaml`);
    if (response.data !== undefined) {
      tips = YAML.parse(response.data);
    }

    for(var type of this.suportedTypes){
      console.log(`src/techtips/data/${this.name}.${type}.yaml`)
      var response = await  new GitProxy(this.accessToken).getRepoFileContent(`data/techtips/${this.name}.${type}.yaml`);
      if (response.data !== undefined) {
        tips = YAML.parse(response.data)
      }
    }

    tips.forEach(t => {
      t.category = this.name;
    });

    return tips;
  }
}
