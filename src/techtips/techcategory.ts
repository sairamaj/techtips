import * as fs from 'fs';
import * as yaml from 'read-yaml';
import { Tip } from './tip';

export class TechCategory {
    suportedTypes = ['info', 'command'];

    constructor(public name: string) {
    }

    getTips(): Array<Tip> {
        const file = `${__dirname}/data/${this.name}.yaml`;
        let tips = new Array<Tip>();
        if (fs.existsSync(file)){
            tips = yaml.sync(file, {});
        } 

        this.suportedTypes.forEach(type => {
            const file1 = `${__dirname}/data/${this.name}.${type}.yaml`;
            if (fs.existsSync(file1))
                tips = yaml.sync(file1, {});
        });

        tips.forEach(t => {
            t.category = this.name;
        });

        return tips;
    }
}
