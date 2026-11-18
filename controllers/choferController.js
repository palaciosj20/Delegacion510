const Chofer = require('../models/Chofer');

exports.getAllChoferes = async (req, res) => {
    try {
        const choferes = await Chofer.getAll();
        res.json(choferes);
    } catch (error) {
        res.status(500).json({error : error.message})
    }

}
