require('dotenv').config();

const express = require('express');
const { conexionDB } = require('./config')
const cors = require('cors');

//Iniciando Servidor
const app = express();

//Iniciando CORS
app.use(cors());

//Iniciando DB
conexionDB();

app.get('/', (req, res) => {

    res.json({
        status: 200,
        msj: 'hola mama'
    });
})

app.listen(process.env.PORT, () => {
    console.log("Server arranco en el puerto:" + process.env.PORT);
})