import fs from 'fs';
import {Battle} from "./core/battle";
import Soldier from './core/models/soldier';
// import unit from "./core/models/unit";


export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));
    let soldier = new Soldier(100, 2001) 
    console.log(soldier)

    const battle = new Battle(json.armies);
    battle.start();
  }
}


const factory = soldierFactory.getInstance();