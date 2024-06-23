
const { Router } = require('express');
const router = Router();

const genre = [
    {id:1, name: 'Comedy'},
    {id:2, name: 'Horror'},
    {id:3, name: 'Science fiction'},
];

router.get('/genre', function(req, res) {
    res.json(genre);
});

router.post('/genre', function(req, res) {
    const newGenre = {
        id: genre.length + 1,
        name: 'Fantasy film',
    };
    genre.push(newGenre);
    res.json(newGenre);
});

router.put('/genre/:id', function(req, res) {
    const updateGenre = genre.find((genre) => genre.id === +req.params.id);

    updateGenre.name = 'Drama';

    res.json(updateGenre);
});

router.delete('/genre/:id', function(req, res) {
    const delGenre = genre.findIndex((genre) => genre.id === +req.params.id);

    const deleteGenre = genre.splice(delGenre, 1)[0];
    res.json(deleteGenre);
});

module.exports = router;