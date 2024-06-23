
const { Router } = require('express');
const router = Router();

router.get('/filmscore', function(req, res) {
    res.end('GEt /film score');
});

router.post('/filmscore', function(req, res) {
    res.end('POST /film score');
});

router.put('/filmscore', function(req, res) {
    res.end('PUT /film score');
});

router.delete('/filmscore', function(req, res) {
    res.end('DELETE /film score');
});

module.exports = router;