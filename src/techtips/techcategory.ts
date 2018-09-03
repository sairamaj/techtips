import * as yaml from 'read-yaml';
import { Tip } from './tip';

export class TechCategory {
    constructor(public name: string) {
    }

    getTips(): Array<Tip> {
        const file = `${__dirname}/data/${this.name}.yaml`;
        return yaml.sync(file, {});
    }
}
