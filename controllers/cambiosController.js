const Cambios = require('../models/Cambios');

exports.getAllCambios = async (req, res) => {
    try {
        const cambios = await Cambios.getAll();
        res.json(cambios);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}
