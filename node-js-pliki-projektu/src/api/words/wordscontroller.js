const {Router} = require('express')
const Word = require('../../models/wordmodel')
const router= new Router();

//get /api/words
router.get('/',async(req,res)=>{
    const word = await Word.query();
    res.send(word);
})
//get /api/words/id
router.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const word = await Word.query().findById(id);
    res.send(word);
})
//trzeba poprawic
// post /api/words
router.post('/',async (req,res)=>{
    const word = await Word.query().insert({
        term: req.body.term,
        numberOfAppearances: req.body.numberOfAppearances,
        numberOfGuesses: req.body.numberOfGuesses
    })
    res.send(word);
})
//put /api/words/id
router.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const updatedWord = await Word.query().patchAndFetchById(id, req.body)
    res.send(updatedWord);
})
//delete /api/words/id
router.delete('/:id',async(req,res)=>{
    const {id} = req.params;
    const deletedCount = await Word.query().deleteById(id);
    res.status(204).end();
})
module.exports = router;
