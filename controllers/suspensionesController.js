const Suspensiones = require('../models/Suspensiones');

exports.getAllSuspensiones = async (req, res) => {
    try {
        const suspensiones = await Suspensiones.getAll();
        res.json(suspensiones);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}
