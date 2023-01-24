export class Character {
    constructor(name, type) {
        if(name.length > 1 && name.length < 11 && typeof name == "string"){
            this.name = name;
        }else {throw new Error('поле name не корректно')}

        if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)){
            this.type = type;
        }else {throw new  Error('поле type не корректно')}
        this.health = 100;
        this.level = 1;
        this.defence = undefined;
        this.attack = undefined;
    }

    levelUp(){
        if(this.health != 0){
            this.level++;
            this.attack = this.attack * 1.2;
            this.defence = this.defence * 1.2;
            this.health = 100;
        }else {throw new Error('нельзя повысить левел умершего')}
    }

    damage(points){
        if(this.health > 0){
            this.health -= points * (1 - this.defence / 100);
        }else{throw new Error('Он уже итак мертв, урон по мертвым не проходит!')}
    }

}