const Siniestros = require('../models/Siniestros');

exports.getAllSiniestros = async (req, res) => {
    try {
        const siniestros = await Siniestros.getAll();
        res.json(siniestros);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}
