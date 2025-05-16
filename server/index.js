import express from 'express';
import {getTableros} from './bingo_gen.js';
import {Partida} from './partida.js';

const app = express();
const port = process.env.PORT ?? 3000;
let partidas = [];

app.get('/api/tablero', (req, res) =>{
    let n_tableros = req.query.count;
    if(!n_tableros){
        n_tableros = 1;
    }
    res.json(getTableros(n_tableros)); 
});

app.get('/api/partida/new',(req, res)=>{
    let fecha = new Date();
    let id = `${partidas.length}${fecha.getMinutes()}${fecha.getSeconds()}${fecha.getMilliseconds()}`;
    const nueva = new Partida(id);
    partidas.push(nueva);

    res.json(id);
});

app.get('/api/partida/:id',(req,res) =>{
    const id = req.params.id;
    const partida = partidas.filter(x => x.id == id);
    res.json(partida);
});

app.get('/api/partida/:id/extract', (req, res) =>{
    const id = req.params.id;
    const partida = partidas.filter(x => x.id == id);
    res.json(partida[0].getNumber());
});

app.listen(port, ()=>{
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});