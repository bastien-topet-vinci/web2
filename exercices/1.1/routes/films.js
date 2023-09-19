var express = require('express');
var router = express.Router();

const myMovies = [
    {
        id : 1,
        title : 'Joker',
        duration : 200,
        budget : 500000000,
        link : href='https://www.imdb.com/'
    },
    {
        id : 2,
        title : 'Batman',
        duration : 160,
        budget : 200000000,
        link : href='https://www.imdb.com/'
    },
    {
        id : 3,
        title : 'Avengers : Endgame',
        duration : 120,
        budget : 400000000,
        link : href='https://www.imdb.com/'
    }
]

router.get('/', (req,res,next) => {
    res.json(myMovies);
});

module.exports = router;