const express = require('express');
const {
  getController,
} = require('../controllers/cars');

const router = express.Router();

router.get('/cars', getController);

module.exports = router;
