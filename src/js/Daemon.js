import {Character} from "./Character";

export class Daemon extends Character{
    constructor(...args) {
        super(...args);
        this.attack = 25;
        this.defence = 25;
    }

}