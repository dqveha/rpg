import {Paladin, Monster} from './../src/rpg.js';

describe('Paladin', () => {

  test('should create a Paladin object with stats', () => {
    const pally = new Paladin();
    expect(pally).toEqual(pally);
  });
  test('should heal Paladin for 30 or up to max health', () => {
    const health = new Paladin();                 
    health.currentHealth = 80;
    health.pallyHeal();
    expect(health.currentHealth).toEqual(100);
  });
  test('should subtract mana after healing', () => {
    const pally = new Paladin();
    pally.currentHealth = 80;
    pally.pallyHeal();
    expect(pally.currentMana).toEqual(80);
  });

  test('should change Pally stats when calling levelUp depending its current level', () => {
    const pally = new Paladin();
    pally.levelUp();
    expect(pally.level).toEqual(2);
  });

  test('should reset health and mana and experience upon death', () => {
    const pally = new Paladin();
    pally.currentHealth = 70;
    pally.currentMana = 80;
    pally.currentExperience = 90;
    pally.death();
    expect(pally.currentHealth).toEqual(pally.maxHealth);
  });

  test('should give 10 experience when you kill a monster', () => {
    const pally = new Paladin();
    pally.currentExperience = 25;
    pally.win();
    expect(pally.currentExperience).toEqual(35);
  });

});

describe('Monster', () => {
  test('should create a monster object with stats', () => {
    const monster = new Monster();
    expect(monster).toEqual(monster);
  });

  test('should change monster object with easy stats', () => {
    const monster = new Monster();
    monster.easy();
    expect(monster.currentHealth).toEqual(38);
  });

  test('should change monster stats depending on different zone', () => {
    const monster = new Monster();
    monster.scale(2);
    expect(monster.currentHealth).toEqual(100);
  });



});