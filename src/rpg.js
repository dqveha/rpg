export class Paladin {
  constructor() {
    this.currentHealth = 100;
    this.maxHealth = 100;
    this.currentMana = 100;
    this.maxMana = 100;
    //stats
    this.experience = 0;
    this.level = 1;
    this.attackPower = 20;
    this.armor = 5;
    this.healPower = 30;
  }

  pallyHeal() {
    if (this.currentMana >= 20) {
      this.currentMana -= 20; 
      this.currentHealth += this.healPower;
    } else {
      alert("NO CAN DO, PLAYA");
    }
    if (this.currentHealth > this.maxHealth) {
      this.currentHealth = this.maxHealth; 
    }
  }
}

export class Monster {
  constructor() {
      this.currentHealth = 50;
      this.maxHealth = 50;
      this.attackPower = 20;
      this.armor = 5;
  }

  easy() {
      this.currentHealth = Math.round(this.currentHealth*0.75);
      this.maxHealth = Math.round(this.maxHealth*0.75);
      this.attackPower = Math.round(this.attackPower*0.75);
      this.armor = Math.round(this.armor*0.75);
  }
}    
//     // easy --> currentHealth = 0.75 * currenthealth
//     //hard --> currentHealth = 1.25/1.5 * currenthealth


// baseExp = 100
// levelUp = baseExp + (baseExp * .10)



// Battle system: 
//   1) Roll Dice system
//       10a) 1-2 (low
//       b) 3-4 (medium)
//       c) 5 (high)
//       d) 6 (CRITICAL)
//   2) Level Up system
//       a) What type of algorithm?

// class Hunter {
//   constructor() {
//     this.experience = 0;
//   }
// }

// class Surfer {
//   constructor() {
//     this.experience = 0;
//   }