const db = require('../config/db');


const Horarios = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM delegacion_horarios');
        return rows;
    },
    getById: async (id_horario) => {
        const [rows] = await db.query('SELECT * FROM delegacion_horarios WHERE id_horario = ?', [id_horario]);
        return rows[0];
    },
    create: async ({id_horario, id_coche, patente, modelo, año, estado, mecanica, created_at}) => {
        const [result] = await db.query(
            'INSERT INTO delegacion_horarios (id_horario, id_coche, patente, modelo, año, estado, mecanica, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_horario, id_coche, patente, modelo, año, estado, mecanica, created_at]
        );
        return result.insertId;
    },
    update: async (id_horario, {id_coche, patente, modelo, año, estado, mecanica, created_at}) => {
        const [result] = await db.query(
            'UPDATE delegacion_horarios SET id_coche = ?, patente = ?, modelo = ?, año = ?, estado = ?, mecanica = ?, created_at = ? WHERE id_horario = ?',
            [id_coche, patente, modelo, año, estado, mecanica, created_at, id_horario]
        );
        return result.affectedRows > 0;
    },
    delete: async (id_horario) => {
        const [result] = await db.query('DELETE FROM delegacion_horarios WHERE id_horario = ?', [id_horario]);
        return result.affectedRows > 0;
    }
}

module.exports = Horarios;