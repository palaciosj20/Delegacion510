const db = require('../config/db');

const Cambios = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM delegacion_cambios');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM delegacion_cambios WHERE id = ?', [id]);
        return rows[0];
    },
    create: async ({ id_cambio, id_chofer, tipo_cambio, fecha_original, fecha_solicitada, motivo, estado, created_at }) => {
        const [result] = await db.query(
            'INSERT INTO delegacion_cambios (id_cambio, id_chofer, tipo_cambio, fecha_original, fecha_solicitada, motivo, estado, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_cambio, id_chofer, tipo_cambio, fecha_original, fecha_solicitada, motivo, estado, created_at]
        );
        return result.insertId; 
    },
    update: async (id, { id_cambio, id_chofer, tipo_cambio, fecha_original, fecha_solicitada, motivo, estado, created_at }) => {
        const [result] = await db.query(
            'UPDATE delegacion_cambios SET id_cambio = ?, id_chofer = ?, tipo_cambio = ?, fecha_original = ?, fecha_solicitada = ?, motivo = ?, estado = ?, created_at = ? WHERE id = ?',
            [id_cambio, id_chofer, tipo_cambio, fecha_original, fecha_solicitada, motivo, estado, created_at, id]
        );
        return result.affectedRows > 0; 
    },
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM delegacion_cambios WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}

module.exports = Cambios;