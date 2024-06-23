// Роутер - объект, который позволяет управлять модулями - обработчиками маршрутов.

const { Router } = require('express');
const router = Router();

const filmRouter = require('./film.router');
const genreRouter = require('./genre.router');
const actorRouter = require('./actor.router');
const directorRouter = require('./director.router');
const scoreRouter = require('./filmscore.router');


router.use(filmRouter);
router.use(genreRouter);
router.use(actorRouter);
router.use(directorRouter);
router.use(scoreRouter);

module.exports = router;