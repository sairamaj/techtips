export class TechCategory {
    constructor(public name: string) {
    }

    getTips(): Array<string> {
        return [`${this.name}_tip1`, `${this.name}_tip2`];
    }
}
