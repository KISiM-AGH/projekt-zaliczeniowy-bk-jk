const {Router} = require('express')
const Word = require('../../models/wordmodel')
const asyncHandler = require("../asyncHandler");
const Wordnotfoundexception = require("../../exceptions/wordnotfoundexception");
const router= new Router();


//Pobieranie wszytskich słów z bazy- OK
router.get('/all',asyncHandler(async(req,res)=>{
    const word = await Word.query();
    res.status(200).send(word);
}))

//Pobieranie konkretnego słowa z bazy- OK
router.get('/',asyncHandler(async(req,res)=>{
    const word = await Word.query().select().from('words').where("term",req.body.term.toString());
    if(!word[0])    {
        throw new Wordnotfoundexception();
    }
    else{
            res.status(200).send(word[0]);
        }
}))


//Dodawanie nowych słów do bazy- OK
router.post('/',asyncHandler(async (req,res)=>{
    const word=await Word.query().insert({
        term: req.body.term,
        numberOfAppearances: req.body.numberOfAppearances,
        numberOfGuesses: req.body.numberOfGuesses
    });
    res.status(201).send(word);
}))
/* Alternatywna wersja obsługi błedów
router.post('/',async (req,res)=>{
    try {//Obsluga zlych danych wprowadzonych przez uzytkownika v1
        const word = await Word.query().insert({
            term: req.body.term,
            numberOfAppearances: req.body.numberOfAppearances,
            numberOfGuesses: req.body.numberOfGuesses
        });
        res.status(201).send(word);
    }catch(e){
        res.status(400).send({msg:"Bledne dane!!!"})
    }
})*/

//Aktualizacja konkretnego słowa w bazie- NIE
router.put('/:id',asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const updatedWord = await Word.query().patchAndFetchById(id, req.body)
    res.send(updatedWord);
}))

//Usuwanie konkretnego słowa z bazy- OK
router.delete('/',asyncHandler(async(req,res)=>{
    const word = await Word.query().select().from('words').where("term",req.body.term.toString());
    if(!word[0]){
        throw new Wordnotfoundexception();
    }
    else{
        const deletedCount = await Word.query().deleteById(word[0].id);
        res.status(204).end();
    }

}))

module.exports = router;
