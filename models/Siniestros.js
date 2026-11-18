const db = require('../config/db');

const Siniestros = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM delegacion_siniestros');
        return rows;
    },
    getById: async (id_siniestro) => {
        const [rows] = await db.query('SELECT * FROM delegacion_siniestros WHERE id_siniestro = ?', [id_siniestro]);
        return rows[0];
    },
    create: async ({ id_siniestro, id_chofer, fecha_siniestro, descripcion, estado, created_at }) => {
        const [result] = await db.query(
            'INSERT INTO delegacion_siniestros (id_siniestro, id_chofer, fecha_siniestro, descripcion, estado, created_at) VALUES (?, ?, ?, ?, ?, ?)',
            [id_siniestro, id_chofer, fecha_siniestro, descripcion, estado, created_at]
        );
        return result.insertId; 
    },
    update: async (id, { id_siniestro, id_chofer, fecha_siniestro, descripcion, estado, created_at }) => {
        const [result] = await db.query('UPDATE delegacion_siniestros SET id_siniestro = ?, id_chofer = ?, fecha_siniestro = ?, descripcion = ?, estado = ?, created_at = ? WHERE id_siniestro = ?',
            [id_siniestro, id_chofer, fecha_siniestro, descripcion, estado, created_at, id]
        );
        return result.affectedRows > 0; 
    },
    delete: async (id_siniestro) => {
        const [result] = await db.query('DELETE FROM delegacion_siniestros WHERE id_siniestro = ?', [id_siniestro]);
        return result.affectedRows > 0;
    }
}

module.exports = Siniestros;