export class Paladin {
  constructor() {
    this.currentHealth = 100;
    this.maxHealth = 100;
    this.currentMana = 100;
    this.maxMana = 100;
    //stats
    this.currentExperience = 0;
    this.experienceCap = 50;
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

  levelUp() {
    this.maxHealth = Math.round(this.maxHealth*1.1);
    this.currentHealth = this.maxHealth;

    this.maxMana = Math.round(this.maxMana*1.1);
    this.currentMana = this.maxMana;
    //stats
    this.level++;
    this.currentExperience = 0;
    this.experienceCap = Math.round(this.experienceCap*1.1);
    
    this.attackPower = Math.round(this.attackPower*1.1);
    this.armor = Math.round(this.armor*1.1);
    this.healPower = Math.round(this.healPower*1.1);
  }

  death() {
    this.currentExperience = 0;
    this.currentHealth = this.maxHealth; 
    this.currentMana = this.maxMana; 
  }

  win() {
    this.currentExperience += 10;
  }

  attack() {
    let roll = 1+Math.floor(Math.random() * 6);
    let presentAttack = 0;
    switch (roll) {
      case 1:
      case 2:
        presentAttack = this.attackPower * 0.75;
        return presentAttack;
      case 3:
      case 4:
        return this.attackPower;
      case 5:
        presentAttack = this.attackPower * 1.25;
        return presentAttack;
      case 6:
        presentAttack = this.attackPower * 1.50;
        return presentAttack;
    }
  }
  //attack function?
  // Battle system: 
  //   1) Roll Dice system
  //       a) 1-2 (low)
  //       b) 3-4 (medium)
  //       c) 5 (high)
  //       d) 6 (CRITICAL)
}

export class Monster {
  constructor() {
    this.currentHealth = 50;
    this.maxHealth = 50;
    this.attackPower = 20;
    this.armor = 5;
  }

  scale(zone) {
    if (zone === 1) {
      this.currentHealth *= 1;
      this.maxHealth *= 1;
      this.attackPower *= 1;
      this.armor *= 1;
    } else if (zone === 2) {
      this.currentHealth *= 2;
      this.maxHealth *= 2;
      this.attackPower *= 2;
      this.armor *= 2;
    } else if (zone === 3) {
      this.currentHealth *= 3;
      this.maxHealth *= 3;
      this.attackPower *= 3;
      this.armor *= 3;
    } else if (zone === 4) {
      this.currentHealth *= 4;
      this.maxHealth *= 4;
      this.attackPower *= 4;
      this.armor *= 4;
    } 
  }

  easy() {
      this.currentHealth = Math.round(this.currentHealth*0.75);
      this.maxHealth = Math.round(this.maxHealth*0.75);
      this.attackPower = Math.round(this.attackPower*0.75);
      this.armor = Math.round(this.armor*0.75);
  }

  hard() {
      this.currentHealth = Math.round(this.currentHealth*1.25);
      this.maxHealth = Math.round(this.maxHealth*1.25);
      this.attackPower = Math.round(this.attackPower*1.25);
      this.armor = Math.round(this.armor*1.25);
  }
}


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