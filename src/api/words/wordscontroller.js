const {Router} = require('express')
const Word = require('../../models/wordmodel')
const asyncHandler = require("../asyncHandler");
const Wordnotfoundexception = require("../../exceptions/wordnotfoundexception");
const WordNotFoundException = require("../../exceptions/wordnotfoundexception");
const router= new Router();


//Pobieranie wszytskich słów z bazy- OK
router.get('/all',asyncHandler(async(req,res)=>{
    const word = await Word.query();
    res.status(200).send(word);
}))

//Pobieranie konkretnego słowa z bazy- OK
router.get('/',asyncHandler(async(req,res)=>{
    const word = await Word.query().select().from('words').where("term",req.body.term.toString());
    if(!word[0]){
        throw new WordNotFoundException();
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
        numberOfGuesses: req.body.numberOfGuesses,
        maxNumberOfMistakes: req.body.maxNumberOfMistakes,
        lengthOfTerm: req.body.term.toString().length
    });
    res.status(201).send(word);
}))

//Aktualizacja konkretnego słowa w bazie- OK
router.put('/:term',asyncHandler(async(req,res)=>{
    //const wordToUpdate = await Word.query().select().from('words').where("term",req.params.term.toString());
    const wordToUpdate = await Word.query().findOne({term: req.params.term });
    if(typeof(wordToUpdate)==="undefined")
    {
        throw new Wordnotfoundexception();
    }
    const updatedWord=await wordToUpdate.$query().patchAndFetch({
        term: req.body.term,
        numberOfAppearances: req.body.numberOfAppearances,
        numberOfGuesses: req.body.numberOfGuesses,
        maxNumberOfMistakes: req.body.maxNumberOfMistakes,
        lengthOfTerm: req.body.term.toString().length})
    res.status(200).send(updatedWord);//ew 204
}))

//Usuwanie konkretnego słowa z bazy- dziala - poprzez id lub slowo
router.delete('/:id',asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const deletedCount = await Word.query().deleteById(id);
    if(deletedCount === 0) throw new Wordnotfoundexception();
    res.status(204).end();
}))

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