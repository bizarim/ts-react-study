import { eAnimal } from './eAnimal';

export interface LivingThing {
    type: eAnimal;
    getName(): string;
}