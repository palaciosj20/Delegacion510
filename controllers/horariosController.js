const Horarios = require('../models/Horarios');

exports.getAllHorarios = async (req, res) => {
    try {
        const horarios = await Horarios.getAll();
        res.json(horarios);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}
