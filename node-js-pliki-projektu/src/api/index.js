//agregacja routingow
const {Router} = require('express')
const wordsRouter = require('./words/wordscontroller')
const router = new Router();

router.use('/words', wordsRouter);



module.exports = router;