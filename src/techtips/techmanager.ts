import * as fs from 'fs'
import { TechCategory } from './techcategory';
import { Tip } from './tip';

export class TechManager {
    getCategories(): Array<string> {
        const dataDir = `${__dirname}/data`;
        return fs.readdirSync(dataDir).map(s=> s.split('.')[0])
    }

    getTips(name: string, filter: string): Array<Tip> {
        const tips = new TechCategory(name).getTips();
        if( filter === null){
            return tips
        }
        
        return tips.filter(t=> t.name.startsWith(filter))
    }
}
