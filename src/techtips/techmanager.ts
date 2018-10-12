import { TechCategory } from './techcategory';
import { Tip } from './tip';
import { TipCategory } from './tipCategory';
import { GitProxy } from './gitProxy';

export class TechManager {

    constructor(public accessToken: string) {}

    async getCategories(): Promise<Array<TipCategory>> {
        var yamlFiles = await new GitProxy(this.accessToken).getRepoFiles("src/techtips/data");
        
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

    async getTips(name: string, filter: string): Promise<Array<Tip>> {
        const tips = await new TechCategory(this.accessToken, name).getTips();
        if (filter === null || filter === undefined)
            return tips;

        return tips.filter(t => t.name.startsWith(filter));
    }
}
