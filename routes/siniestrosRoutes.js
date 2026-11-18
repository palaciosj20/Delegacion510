const express = require('express');
const router = express.Router();
const siniestrosController = require('../controllers/siniestrosController');

router.get('/getall', siniestrosController.getAllSiniestros);
router.get('/getbyid/:id', siniestrosController.getSiniestroById);
router.post('/create', siniestrosController.createSiniestro);
router.put('/update/:id', siniestrosController.updateSiniestro);
router.delete('/delete/:id', siniestrosController.deleteSiniestro);

module.exports = router;