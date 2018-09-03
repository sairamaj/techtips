import * as fs from 'fs'
import { TechCategory } from './techcategory';
import { Tip } from './tip';

export class TechManager {
    getCategories(): Array<string> {
        const dataDir = `${__dirname}/data`;
        return fs.readdirSync(dataDir).map(s=> s.split('.')[0])
    }

    getTips(name: string): Array<Tip> {
        return new TechCategory(name).getTips();
    }
}
