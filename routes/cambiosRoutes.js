const express = require('express');
const router = express.Router();
const cambiosController = require('../controllers/cambiosController');

router.get('/getall', cambiosController.getAllCambios);
router.get('/getbyid/:id', cambiosController.getCambioById);
router.post('/create', cambiosController.createCambio);
router.put('/update/:id', cambiosController.updateCambio);
router.delete('/delete/:id', cambiosController.deleteCambio);

module.exports = router;