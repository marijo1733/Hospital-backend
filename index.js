
require('dotenv').config();


const express = require ('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();
app.use(cors());

dbConnection();



app.get('/', (req, res)=>{
    res.json({
        ok: true,
        msg: 'Hola Mundo'

    });
});

//mean_user
//reIgLrjtJMEQtjNz



app.listen(process.nextTick.PORT, () =>{
    console.log('Servidor corriendo en puerto '+ 3000)
})