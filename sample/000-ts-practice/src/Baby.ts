import { LivingThing } from './LivingThing';
import { eAnimal } from './eAnimal';

export class Baby implements LivingThing {
    public type: eAnimal;
    constructor(private name: string) {

    }
    getName(): string {
        return `${this.name} is baby`;
    }
}