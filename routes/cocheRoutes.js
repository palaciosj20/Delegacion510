const express = require('express');
const router = express.Router();
const cocheController = require('../controllers/cocheController');

router.get('/getall', cocheController.getAllCoches);
router.get('/getbyid/:id', cocheController.getCocheById);
router.post('/create', cocheController.createCoche);
router.put('/update/:id', cocheController.updateCoche);
router.delete('/delete/:id', cocheController.deleteCoche);

module.exports = router;