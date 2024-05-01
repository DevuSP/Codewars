class Character {
    constructor({ name, strength, dexterity, intelligence }) {
        this.name = name || 'Hero';
        this.dexterity = dexterity || 10;
        this.strength = strength || 10;
        this.intelligence = intelligence || 10;
        this.damageInfoString = 0;
        this.logs = "";
        this.lastAxeOfFire = [];
        this.lastStaffOfFire = [];
        this.lastWeaponDamage = 0;
    }

    characterInfo() {
        let infoString = `${this.name}\nstr ${this.strength}\ndex ${this.dexterity}\nint ${this.intelligence}`;
        if (this.damageInfoString) {
            infoString += this.damageInfoString;
        } else {
            let limbs = this.dexterity + this.strength + this.intelligence;
            infoString += `\nlimbs ${limbs} dmg`;
        }
        return infoString;
    }

    axeOfFire(str, dext, int, add) {
        let thisWeaponDamage;
        if ((this.lastAxeOfFire).length !== 0) {  // if second axe of fire is found.
            str = Math.max(this.lastAxeOfFire[0], str);
            dext = Math.max(this.lastAxeOfFire[1], dext);
            int = Math.max(this.lastAxeOfFire[2], int);
            add = Math.max(this.lastAxeOfFire[3], add);
            thisWeaponDamage = this.strength * str + this.dexterity * dext + this.intelligence * int + add;

            if (thisWeaponDamage > this.lastWeaponDamage) {
                this.lastWeaponDamage = thisWeaponDamage;
                this.damageInfoString = `\nAxe of fire(enhanced) ${thisWeaponDamage} dmg`;
                this.lastAxeOfFire = [str, dext, int, add]; // changing last value of info.
            }
        } else {
            thisWeaponDamage = this.strength * str + this.dexterity * dext + this.intelligence * int + add;

            if (thisWeaponDamage > this.lastWeaponDamage) {
                this.lastWeaponDamage = thisWeaponDamage;
                this.damageInfoString = `\nAxe of fire ${thisWeaponDamage} dmg`;
                this.lastAxeOfFire = [str, dext, int, add];
            }
        }
        this.eventLog(`'Axe of fire'`);
        return this.damageInfoString;
    }

    staffOfWater(str, dext, int, add) {
        let thisWeaponDamage;
        if ((this.lastStaffOfFire).length !== 0) {  // if second axe of fire is found.
            str = Math.max(this.lastStaffOfFire[0], str);
            dext = Math.max(this.lastStaffOfFire[1], dext);
            int = Math.max(this.lastStaffOfFire[2], int);
            add = Math.max(this.lastStaffOfFire[3], add);
            thisWeaponDamage = this.strength * str + this.dexterity * dext + this.intelligence * int + add;

            if (thisWeaponDamage > this.lastWeaponDamage) {
                this.lastWeaponDamage = thisWeaponDamage;
                this.damageInfoString = `\nStaff of water(enhanced) ${thisWeaponDamage} dmg`;
                this.lastStaffOfFire = [str, dext, int, add]; // changing last value of info.
            }
        } else {
            thisWeaponDamage = this.strength * str + this.dexterity * dext + this.intelligence * int + add;

            if (thisWeaponDamage > this.lastWeaponDamage) {
                this.lastWeaponDamage = thisWeaponDamage;
                this.damageInfoString = `\nStaff of water ${thisWeaponDamage} dmg`;
                this.lastStaffOfFire = [str, dext, int, add];
            }
        }
        this.eventLog(`'Staff of water'`);
        return this.damageInfoString;
    }

    eventLog(weapon) {
        this.logs += `${this.name} finds ${weapon}\n`;
        return this.logs;
    }

}

const kroker = new Character({ name: 'Kroker', strength: 15, intelligence: 7 })


// console.log(kroker.dexterity)
// console.log(kroker.intelligence)
// console.log(kroker.name)
// console.log(kroker.characterInfo());
// found a weapon.
console.log(kroker.axeOfFire(3, 1, 0, 20));
console.log(kroker.axeOfFire(1, 2, 1, 10));
console.log(kroker.characterInfo());
console.log(kroker);
console.log(kroker.staffOfWater(1, 0, 2, 60));
console.log(kroker.characterInfo());
// // kroker.axeOfFire(2,3,2,43);
// // kroker.staffOfWater(3,2,4,54);
// console.log(kroker.eventLog());
// console.log(kroker.characterInfo());