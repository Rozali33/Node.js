
const { Router } = require('express');
const router = Router();

router.get('/actor', function(req, res) {
    res.end('GEt /actor');
});

router.post('/actor', function(req, res) {
    res.end('POST /actor');
});

router.put('/actor', function(req, res) {
    res.end('PUT /actor');
});

router.delete('/actor', function(req, res) {
    res.end('DELETE /actor');
});

module.exports = router;