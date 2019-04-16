import Soldier from "../core/models/soldier";

let instance = null;

export default class SoldierFactory {
    constructor() {
        if (instance){
            return instance
        }else {
            instance = this;
        }
        
    }
    static getInstance() {                //возвращает экземпляр клаксса
        return new SoldierFactory
    } 
   
   createSoldierone(data){
       return new Soldier(data.health, data.recharge);
   }
   createSoldiers(arr) {
       return arr.map((i) => this.createSoldierone(i));
   }
}