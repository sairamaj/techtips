import * as yaml from 'read-yaml';

export class TechCategory {
    constructor(public name: string) {
    }

    getTips(): Array<string> {
        const file = `${__dirname}/data/${this.name}.yaml`;
        const tips  = yaml.sync(file, {});

        return tips.map(tip => tip.name);
    }
}
