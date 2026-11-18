const db = require('../config/db');

const Coches = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM delegacion_cambios');
        return rows;
    }, 
    getById: async (id_coche) => {
        const [rows] = await db.query('SELECT * FROM delegacion_cambios WHERE id_coche = ?', [id_coche]);
        return rows[0];
    },
    create: async ({id_coche, patente, modelo, año, estado, mecanica, created_at}) => {
        const [result] = await db.query(
            'INSERT INTO delegacion_cambios (id_coche, patente, modelo, año, estado, mecanica, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [id_coche, patente, modelo, año, estado, mecanica, created_at]
        );
        return result.insertId; 
    },
    update: async (id_coche, {id_coche, id_chofer, tipo_cambio, fecha_original, fecha_solicitada, motivo, estado, created_at}) => {
        const [result] = await db.query(
            'UPDATE delegacion_cambios SET id_coche = ?, id_chofer = ?, tipo_cambio = ?, fecha_original = ?, fecha_solicitada = ?, motivo = ?, estado = ?, created_at = ? WHEREid_coche = ?',
            [id_coche, id_chofer, tipo_cambio, fecha_original, fecha_solicitada, motivo, estado, created_at, id_coche]
        );
        return result.affectedRows > 0; 
    },
    delete: async (id_coche) => {
        const [result] = await db.query('DELETE FROM delegacion_cambios WHERE id_coche = ?', [id_coche]);
        return result.affectedRows > 0;
    }
}