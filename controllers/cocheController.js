const Coche = require('../models/Coche');

exports.getAllCoches = async (req, res) => {
    try {
        const coche = await Coche.getAll();
        res.json(coche);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}
