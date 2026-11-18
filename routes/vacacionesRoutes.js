const express = require('express');
const router = express.Router();
const vacacionesController = require('../controllers/vacacionesController');

router.get('/getall', vacacionesController.getAllVacaciones);
router.get('/getbyid/:id', vacacionesController.getVacacionById);
router.post('/create', vacacionesController.createVacacion);
router.put('/update/:id', vacacionesController.updateVacacion);
router.delete('/delete/:id', vacacionesController.deleteVacacion);

module.exports = router;