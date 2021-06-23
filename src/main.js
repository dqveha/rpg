import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import { Monster } from './rpg'

$("section").text("TEST TEXT INPUT")

//create pally
//create a monster
//mechanism for battle


let pally = new Paladin();
let monster = new Monster();

function battle(action) {
  if (action === heal) {
    pally.pallyHeal();
    let monsterCombatDmg = monster.attack();
    pally.currentHealth -= monsterCombatDmg;
    if (pally.currentHealth <= 0) {
      pally.death();
    }
  } else {
    let pallyCombatDmg = pally.attack();
    monster.currentHealth -= pallyCombatDmg;
    if (monster.currentHealth <= 0) {
      pally.win();
    } else {
      let monsterCombatDmg = monster.attack();
      pally.currentHealth -= monsterCombatDmg;
      if (pally.currentHealth <= 0) {
        pally.death();
      }
  }
} 