import { TechCategory } from './techcategory';

export class TechManager {
    getCategories(): Array<string> {
        return ['git', 'iis', 'windbg'];
    }

    getTips(name: string): Array<string> {
        return new TechCategory(name).getTips();
    }
}
