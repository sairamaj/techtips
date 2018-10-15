import { TechCategory } from './techcategory';
import { Tip } from './tip';
import { TipCategory } from './tipCategory';
import { RedisProxy } from '../redisProxy';

export class TechManager {

    constructor(public accessToken: string) { }

    async getCategories(): Promise<Array<TipCategory>> {
        var data = await RedisProxy.getAsync('techdata.techtips.categories')
        console.log('TechManager:' + data)
        return JSON.parse(data)
    }

    async getTips(name: string, filter: string): Promise<Array<Tip>> {
        const tips = await new TechCategory(this.accessToken, name).getTips();
        if (filter === null || filter === undefined)
            return tips;

        return tips.filter(t => t.name.startsWith(filter));
    }
}
