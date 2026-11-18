const db = require('../config/db');

const Chofer = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM delegacion_choferes');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM delegacion_choferes WHERE id = ?', [id]);
        return rows[0];
    },
    create: async ({ chofer_id, nombre_apellido, dni, dni_frente, dni_dorso, fecha_nacimiento, cuil, legajo, fecha_nacimiento, cuil, fecha_ingreso, fecha_egreso, nro_tramite, domicilio, activo, rol, suspendido, id_coche }) => {
        const [result] = await db.query(
            'INSERT INTO delegacion_choferes (id_chofer, nombre_apellido, dni, dni_frente, dni_dorso, fecha_nacimiento, cuil, legajo, fecha_nacimiento, cuil, fecha_ingreso, fecha_egreso, nro_tramite, domicilio, activo, rol, suspendido, id_coche) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [chofer_id, nombre_apellido, dni, dni_frente, dni_dorso, fecha_nacimiento, cuil, legajo, fecha_nacimiento, cuil, fecha_ingreso, fecha_egreso, nro_tramite, domicilio, activo, rol, suspendido, id_coche]
        );
        return result.insertId; 
    },
    update: async (id, { nombre_apellido, dni, dni_frente, dni_dorso, fecha_nacimiento, cuil, legajo, fecha_nacimiento, cuil, fecha_ingreso, fecha_egreso, nro_tramite, domicilio, activo, rol, suspendido, id_coche }) => {
        const [result] = await db.query(
            'UPDATE delegacion_choferes SET nombre_apellido = ?, dni = ?, dni_frente = ?, dni_dorso = ?, fecha_nacimiento = ?, cuil = ?, legajo = ?, fecha_nacimiento = ?, cuil = ?, fecha_ingreso = ?, fecha_egreso = ?, nro_tramite = ?, domicilio = ?, activo = ?, rol = ?, suspendido = ?, id_coche = ? WHERE id_chofer = ?',
            [nombre_apellido, dni, dni_frente, dni_dorso, fecha_nacimiento, cuil, legajo, fecha_nacimiento, cuil, fecha_ingreso, fecha_egreso, nro_tramite, domicilio, activo, rol, suspendido, id_coche, id]
        );
        return result.affectedRows > 0; 
    },
    delete: async (id) => {
        const [result] = await db.query('DELETE FROM delegacion_choferes WHERE id_chofer = ?', [id]);
        return result.affectedRows > 0;
    }
};