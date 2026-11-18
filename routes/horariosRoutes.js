const express = require('express');
const router = express.Router();
const horarioController = require('../controllers/horarioController');

router.get('/getall', horarioController.getAllHorarios);
router.get('/getbyid/:id', horarioController.getHorarioById);
router.post('/create', horarioController.createHorario);
router.put('/update/:id', horarioController.updateHorario);
router.delete('/delete/:id', horarioController.deleteHorario);

module.exports = router;