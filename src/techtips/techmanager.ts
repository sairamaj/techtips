import * as fs from 'fs';
import { TechCategory } from './techcategory';
import { Tip } from './tip';
import { TipCategory } from './tipCategory';

export class TechManager {
    getCategories(): Array<TipCategory> {
        const dataDir = `${__dirname}/data`;
        
        return fs.readdirSync(dataDir)
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
