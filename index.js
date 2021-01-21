//Importowanie bibliotek
const express=require('express');

//importowanie routingu
const api = require('./src/api')
const errorHandler = require("./src/middlewares/errorHandler");

//ustalenie portu serwera
const port=process.env.PORT || 8000;
//środowisko uruchomieniowe
const env=process.env.NODE_ENV || 'development'; //jesli nie zdefiniowana przyjmuje wartość development

//uruchomienie serwera przez express
const app=express();
//Określenie komunikacji z serwerem przy użyciu json'a
app.use(express.json());

app.use('/api',api); //Wczytuje routing z katalogu ./src/api
app.use(errorHandler) //Wykorzystanie funkcji errorHandler w programie


//Wypisanie informacji o serwerze w terminalu
app.listen(port,'localhost',()=>{
    console.log(`Nasluchuje serwera na adresie http://127.0.0.1:${port} w trybie ${env}`);
})