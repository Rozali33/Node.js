
const {Router} = require('express');
const router = Router();

const films = [
    {id:1, name: 'Harry Poter', year: 2001},
    {id:2, name: 'Spider-Man', year: 2003},
    {id:3, name: 'Pirates of the Caribbean', year: 2003},
];

router.get('/film', function(req, res) {
    res.json(films);
});

router.post('/film', function(req, res) {
    const newFilm = {
        id: films.length + 1,
        name: 'New Film',
        year: Math.floor(Math.random() * (2024 - 1970)) + 1970
    };
    films.push(newFilm);
    res.json(newFilm);
});

router.put('/film/:id', function(req, res) {
    const updateFilms = films.find((films) => films.id === +req.params.id);

    updateFilms.country = 'USA';

    res.json(updateFilms);
});

router.delete('/film/:id', function(req, res) {
    const delFilm = films.findIndex((films) => films.id === +req.params.id);

    const deleteFilm = films.splice(delFilm, 1)[0];
    res.json(deleteFilm);
});

module.exports = router;