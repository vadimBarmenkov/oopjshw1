import {Character} from "./Character";

export class Bowman extends Character{
    constructor(...args) {
        super(...args);
        this.attack = 25;
        this.defence = 25;
    }

}