import {generateRandomNumbers} from './random_util.js'

export class Partida {
    constructor(id) {
        this.id = id;
        this.extract_numbers = [];
    }

    getNumber(){
        let nuevo = generateRandomNumbers(1, 76);
        if (!this.extract_numbers.includes(nuevo)) {
            this.extract_numbers.push(nuevo);
            return nuevo;
        }
        else {
            this.getNumber();
        }
    }

    isId(id){
        if(this.id === id){
            return true;
        }
    }
}