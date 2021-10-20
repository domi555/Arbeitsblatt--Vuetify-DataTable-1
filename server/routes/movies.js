const express = require('express');
const { getMovies } = require('../controllers/movies');

const router = express.Router();

router.get('/movies', getMovies);

module.exports = router;
