import {Paladin} from './../src/rpg.js';

describe('Paladin', () => {

  test('should create a Paladin object with stats', () => {
    const pally = new Paladin();
    expect(pally).toEqual(pally);
  });
  test('should heal Paladin for 30 or up to max health', () => {
    const health = new Paladin();                 
    health.currentHealth = 80;                    //make the health 50
    health.pallyHeal();                           //call the heal function
    expect(health.currentHealth).toEqual(100);     //expect(health) equal (80)
  });                                               
  
});