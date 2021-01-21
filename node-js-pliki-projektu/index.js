//Importowanie bibliotek
const express=require('express');

//importowanie routingu
const api = require('./src/api')

//ustalenie portu serwera
const port=process.env.PORT || 8000;
//środowisko uruchomieniowe
const env=process.env.NODE_ENV || 'development'; //jesli nie zdefiniowana przyjmuje wartość development

//uruchomienie serwera przez express
const app=express();
//Określenie komunikacji z serwerem przy użyciu json'a
app.use(express.json());

app.use('/api',api);
/*
//Przykładowe zapytanie GET
app.get('/',(req,res)=>{
    res.send({msg:"Witaj w Świecie REST"})
    res.send(exmpl);
})

//Przykładowe zapytanie post cz.1
let exmpl=[];

//Przykładowe zapytanie post cz.2
app.post('/',(req,res)=>{
    const {smth_1,smth_2}=req.body;
    exmpl.push({smth_1,smth_2});
    //Dodać walidacje

    //Zmiana statusu,wysłanie użytkownikowi obiektu celem sprawdzenia działnia
    res.status(201).send({smth_1,smth_2})
})*/


//Wypisanie informacji o serwerze w terminalu
app.listen(port,'localhost',()=>{
    console.log(`Nasluchuje serwera na adresie http://127.0.0.1:${port} w trybie ${env}`);
})