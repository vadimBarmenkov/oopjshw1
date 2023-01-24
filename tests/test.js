import {Character} from "../src/js/Character";
import {Bowman} from "../src/js/Bowman";
import {Swordsman} from "../src/js/Swordsman";
import {Magician} from "../src/js/Magician";
import {Daemon} from "../src/js/Daemon";
import {Undead} from "../src/js/Undead";
import {Zombie} from "../src/js/Zombie";


test('test methods Character', () => {
    let testObject = new Character('test', 'Swordsman');
    expect(testObject.name).toBe('test');
    testObject.health -= 20;
    expect(testObject.health).toBe(80);
    testObject.levelUp();
    expect(testObject.level).toBe(2);
    expect(testObject.health).toBe(100);
})

test('test error Character', () => {
    expect(() => new Character('test123456789010010001', 'Swordsman')).toThrow(new Error('поле name не корректно'));
    expect(() => new Character('test', 'Assassin')).toThrow(new  Error('поле type не корректно'));
    let testObject = new Character('test', 'Bowman');
    testObject.health = 0;
    expect(() => {testObject.levelUp()}).toThrow(new Error('нельзя повысить левел умершего'));
    testObject.defence = 10;
    expect(() => {testObject.damage(10)}).toThrow(new Error('Он уже итак мертв, урон по мертвым не проходит!'));
})

test('test create Bowman and method damage and level up', () => {
    let testObject = new Bowman('trustBow', 'Bowman');
    expect(testObject.attack).toBe(25);
    expect(testObject.defence).toBe(25);

    testObject.damage(10);
    expect(testObject.health).toBe(92.5);

    testObject.levelUp();
    expect(testObject.health).toBe(100);
    expect(testObject.attack).toBe(30);
    expect(testObject.defence).toBe(30);

    testObject.damage(20);
    expect(testObject.health).toBe(86);

    testObject.levelUp();
    expect(testObject.health).toBe(100);
    expect(testObject.attack).toBe(36);
    expect(testObject.defence).toBe(36);
    expect(testObject.level).toBe(3);

    testObject.damage(20);
    expect(testObject.health).toBe(87.2);

})

test('test create Swordsman', () => {
    let testObject = new Swordsman('Sword98', 'Swordsman');
    expect(testObject.attack).toBe(40);
    expect(testObject.defence).toBe(10);
})

test('test create Magician', () => {
    let testObject = new Magician('magLord', 'Magician');
    expect(testObject.attack).toBe(10);
    expect(testObject.defence).toBe(40);
})

test('test create Daemon', () => {
    let testObject = new Daemon('Demon', 'Daemon');
    expect(testObject.attack).toBe(25);
    expect(testObject.defence).toBe(25);
})

test('test create undead', () => {
    let testObject = new Undead('un', 'Undead');
    expect(testObject.attack).toBe(40);
    expect(testObject.defence).toBe(10);
})

test('test create zombie', () => {
    let testObject = new Zombie('zomb', 'Zombie');
    expect(testObject.attack).toBe(10);
    expect(testObject.defence).toBe(40);
})