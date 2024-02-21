// Something is wrong with our Warrior class. All variables should initialize properly and the attack method is not working as expected.

// If properly set, it should correctly calculate the damage after an attack (if the attacker position is == to the block position of the defender: no damage; otherwise, the defender gets 10 damage if hit "high" or 5 damage if hit "low". If no block is set, the defender takes 5 extra damage.

// For some reason, the health value is not being properly set. The following shows an example of this code being used:

// var ninja = new Warrior('Ninja');
// var samurai = new Warrior('Samurai');

// ninja.block = Position.high;
// samurai.attack(ninja, Position.low);
// // ninja.health should == 95
// The warrios must be able to fight to the bitter end, and good luck to the most skilled!

// Notice that health can't be below 0: once hit to 0 health, a warrior attribute deceased becomes true; if hit again, the zombie attribute becomes true too!

Position = {
    high: 'h',
    low: 'l'
}//don't change this object!

Warrior = function (name) {
    this.name = name;
    this.health = 100;
    this.deceased = false;
    this.zombie = false;
}

Warrior.prototype = {
    attack: function (enemy, position) {
        if (enemy.block != position) {
            var damage = 0;
            if (position === Position.high) { 
                damage += 10 // means block at high.
            } else { 
                damage += 5  // means block at low.
            };
            // if enemy is not blocking at all then give more damage
            if (!enemy.block) {
                damage += 5;
            }
            enemy.health = enemy.health - damage;
            setHealth(enemy.health, enemy);
        }
    }
}

// private functions
function setHealth(value, enemy) {
    if (value < 0) {
        enemy.zombie = true;
        enemy.deceased = true;
    }
    if (value === 0) {
        enemy.deceased = true;
        enemy.zombie = false;
    }
}

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');
ninja.block = Position.low;
samurai.attack(ninja, Position.high);


console.log(ninja.health);
console.log(ninja.zombie);
console.log(ninja.deceased);