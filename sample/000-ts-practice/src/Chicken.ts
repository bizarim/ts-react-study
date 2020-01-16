import { Birds } from './Animal';
import { eAnimal } from './eAnimal';
import { LivingThing } from './LivingThing';
import { Egg } from './Egg';

export class Chicken implements Birds {
    public type: eAnimal = eAnimal.Birds;
    constructor(private name: string) {

    }
    Spwan(): LivingThing {
        return new Egg(this.name);
    }
}