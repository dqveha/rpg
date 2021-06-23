import {Paladin} from './../src/rpg.js';

describe('Paladin', () => {

  test('should create a Paladin object with stats', () => {
    const pally = new Paladin();
    expect(pally).toEqual(pally);
  });
});