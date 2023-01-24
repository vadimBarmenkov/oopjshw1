import {Character} from "./Character";

export class Undead extends Character{
    constructor(...args) {
        super(...args);
        this.attack = 40;
        this.defence = 10;
    }

}