import {Character} from "./Character";

export class Zombie extends Character{
    constructor(...args) {
        super(...args);
        this.attack = 10;
        this.defence = 40;
    }

}