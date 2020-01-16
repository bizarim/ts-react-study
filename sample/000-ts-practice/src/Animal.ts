import { eAnimal } from './eAnimal';
import { LivingThing } from './LivingThing';

export interface Animal {
    type: eAnimal;
    Spwan(): LivingThing;
}

export interface Mammal extends Animal {
}

export interface Birds extends Animal {
}