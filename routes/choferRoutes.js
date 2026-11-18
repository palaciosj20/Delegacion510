const express = require('express');
const router = express.Router();
const choferController = require('../controllers/choController');

router.get('/getall', choferController.getAllChoferes);
router.get('/getbyid/:id', choferController.getChoferById);
router.post('/create', choferController.createChofer);
router.put('/update/:id', choferController.updateChofer);
router.delete('/delete/:id', choferController.deleteChofer);

module.exports = router;