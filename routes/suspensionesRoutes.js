const express = require('express');
const router = express.Router();
const suspensionesController = require('../controllers/suspensionesController');

router.get('/getall', suspensionesController.getAllSuspensiones);
router.get('/getbyid/:id', suspensionesController.getSuspensionById);
router.post('/create', suspensionesController.createSuspension);
router.put('/update/:id', suspensionesController.updateSuspension);
router.delete('/delete/:id', suspensionesController.deleteSuspension);

module.exports = router;