export class Paladin {
  constructor() {
    this.currentHealth = 100;
    this.maxHealth = 100;
    this.currentMana = 100;
    this.maxMana = 100;
    //stats
    this.experience = 0;
    this.level = 1;
    this.attackPower = 10;
    this.armor = 5;
    this.healPower = 30;
  }

  pallyHeal() {
    this.currentHealth += this.healPower;  
    if (this.currentHealth > this.maxHealth) {
      this.currentHealth = this.maxHealth; 
    }
  }
}

// class Enemies {
//   constructor() {
//     this.stats = player's xp/level(?) x 1.5
//   }
// }

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