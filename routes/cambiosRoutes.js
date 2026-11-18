const express = require('express');
const router = express.Router();
const cambiosController = require('../controllers/cambiosController');

router.get('/getall', cambiosController.getAllCambios);

module.exports = router;