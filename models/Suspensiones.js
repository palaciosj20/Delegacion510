const db = require('../config/db');

const Suspensiones = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM delegacion_suspensiones');
        return rows;
    },
    create: async ({ id_suspension, id_chofer, motivo, fecha_inicio, fecha_fin, created_at }) => {
        const [result] = await db.query(
            'INSERT INTO delegacion_suspensiones (id_suspension, id_chofer, motivo, fecha_inicio, fecha_fin, created_at) VALUES (?, ?, ?, ?, ?, ?)',
            [id_suspension, id_chofer, motivo, fecha_inicio, fecha_fin, created_at]
        );
        return result.insertId;
    },
    update: async (id_suspension, { id_suspension, id_chofer, motivo, fecha_inicio, fecha_fin, created_at }) => {
        const [result] = await db.query(
            'UPDATE delegacion_suspensiones SET id_suspension = ?, id_chofer = ?, motivo = ?, fecha_inicio = ?, fecha_fin = ?, created_at = ? WHERE id_suspension = ?',
            [id_suspension, id_chofer, motivo, fecha_inicio, fecha_fin, created_at, id_suspension]
        );
        return result.affectedRows > 0;
    },
    delete: async (id_suspension) => {
        const [result] = await db.query('DELETE FROM delegacion_suspensiones WHERE id_suspension = ?', [id_suspension]);
        return result.affectedRows > 0;
    }
}

module.exports = Suspensiones;