import { Chicken } from "./Chicken";
import { Goose } from "./Goose";
import { Cat } from "./Cat";
import { LivingThing } from "./LivingThing";

const choco = new Chicken('choco');
const coco = new Chicken('coco');
const goo = new Goose('goo');
const yaong = new Cat('yaong');

let basket: Array<LivingThing> = [];
basket.push(choco.Spwan());
basket.push(coco.Spwan());
basket.push(choco.Spwan());
basket.push(coco.Spwan());
basket.push(goo.Spwan());
basket.push(yaong.Spwan());

console.log(basket.length);
for(let i = 0; i< basket.length; ++i){
    console.log(basket[i].getName());
}