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