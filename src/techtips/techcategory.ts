import { Tip } from "./tip";
import { RedisProxy } from '../redisProxy';
const YAML = require("yamljs");

export class TechCategory {
  suportedTypes = ["info", "command"];

  constructor( public name: string) { }

  async getTips(): Promise<Array<Tip>> {
    let tips = []
    
    for(var type of this.suportedTypes){
      var tipKey = `techdata.techtips.category.${this.name}.${type}`
      var data = await  RedisProxy.getAsync(tipKey);
      if (data !== null) {
        tips = YAML.parse(data)
      }
    }

    tips.forEach(t => {
      t.category = this.name;
    });

    return tips;
  }
}
