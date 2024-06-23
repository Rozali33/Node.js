
const {Router} = require('express');
const router = Router();

router.get('/director', function(req, res) {
    res.end('GEt /genre');
});

router.post('/director', function(req, res) {
    res.end('POST /genre');
});

router.put('/director', function(req, res) {
    res.end('PUT /film');
});

router.delete('/director', function(req, res) {
    res.end('DELETE /film');
});

module.exports = router;