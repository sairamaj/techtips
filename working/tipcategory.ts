import * as yaml from "read-yaml";
import { Tip } from "./tip";

export class TipCateogry {
  public Tips: Tip[];
  constructor(file: string) {
    this.Tips = yaml.sync(file, {});
  }
  
  public get(name: string): Tip {
    return this.Tips.find(t => t.name === name);
  }

}
