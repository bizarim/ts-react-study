import { Mammal } from './Animal';
import { eAnimal } from './eAnimal';
import { LivingThing } from './LivingThing';
import { Baby } from './Baby';

export class Cat implements Mammal {
    public type: eAnimal = eAnimal.Birds;
    constructor(private name: string) {

    }
    Spwan(): LivingThing {
        return new Baby(this.name);
    }
}
