import {getRandomNumbers} from './random_util.js';

export function getTableros(numero = 1){
    if(numero == 1 ){
        return genTablero();
    }
    else if(numero > 1){
        let tableros = [];
        for(let z = 0; z < numero; z++){
            tableros.push(genTablero());
        }
        return tableros;
    }
    else{
        return [];
    }
}

function genTablero(){
    let columnas = {
        B: getRandomNumbers(1,16,5),
        I: getRandomNumbers(16,31,5),
        N: getRandomNumbers(31,46,5),
        G: getRandomNumbers(46,61,5),
        O: getRandomNumbers(61,76,5)
    }

    columnas.N[2] = "FREE"

        const tablero = [];
    for (let i = 0; i < 5; i++) {
        tablero[i] = [
            columnas.B[i],
            columnas.I[i],
            columnas.N[i],
            columnas.G[i],
            columnas.O[i]
        ];
    }
    /*for(let i = 0; i < 5; i++){
            console.log(tablero[i]);
    }*/
    return tablero;
}