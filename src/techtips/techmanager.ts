import * as fs from 'fs';
import { TechCategory } from './techcategory';
import { Tip } from './tip';
import { TipCategory } from './tipCategory';
const octokit = require("@octokit/rest")();

export class TechManager {

    constructor(public accessToken: string) {}

    getAuthHeader(): any {
        if (this.accessToken === undefined || this.accessToken.length == 0) {
          return {}; // when used in local we can use without token.
        }
    
        return {
          authorization: `Bearer ${this.accessToken}`
        };
      }

    async getRepoFiles(path): Promise<Array<string>> {
        var info = await octokit.repos.getContent({
          headers: this.getAuthHeader(),
          owner: "sairamaj",
          repo: "techtips",
          path: path
        });
        return info.data.map(p => p.name).filter(name=> name.endsWith(".yaml"));
      }

    async getCategories(): Promise<Array<TipCategory>> {
        var yamlFiles = await this.getRepoFiles("src/techtips/data");
        
        return yamlFiles
            .map(s => {
                const parts = s.split('.');
                let type = 'command';
                if (parts.length > 2) {
                    type = parts[1];
                }
                return new TipCategory(parts[0], type);
            });
    }

    getTips(name: string, filter: string): Array<Tip> {
        const tips = new TechCategory(name).getTips();
        if (filter === null || filter === undefined)
            return tips;

        return tips.filter(t => t.name.startsWith(filter));
    }
}
