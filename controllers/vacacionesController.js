const Vacaciones = require('../models/Vacaciones');

exports.getAllVacaciones = async (req, res) => {
    try {
        const vacaciones = await Vacaciones.getAll();
        res.json(vacaciones);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}
