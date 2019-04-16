import Baseunit from "./baseunit";

export default class Unit extends Baseunit{  
    constructor(health, recharge) {
        super()
        this.setHealth(health)
        this.setRecharge(recharge)
        this.timeRechard(recharge)
    }
    makeDemage(){}  //number
  
    attackSuccess(){}   //number

    demageRecive(number){}   //demage: number

    isAlive() {}   //boolean

    setRecharge(val){}

    isRecharge(){} //is ready to recharge?

    startRecharge(){}   //запустить перезарядку

    getHealth() {
    }

    setHealth(health) {

        if(health < 0) {
            this.health = 0;
        } if(health > 100) {
            this.health = 100;
        } else {
            this.health = health;
        }

    }
    getPower() {} //кто самый сильный
}
