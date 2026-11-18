const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM delegacion_vacaciones');
    return rows;
};

exports.getById = async (id_vacacion) => {
    const [rows] = await db.query('SELECT * FROM delegacion_vacaciones WHERE id_vacacion = ?', [id_vacacion]);
    return rows[0];
}

exports.create = async ({ id_vacacion, id_chofer, dias_totales, dias_tomados, dias_restantes, fecha_inicio, fecha_fin, created_at }) => {
    const [result] = await db.query(
        'INSERT INTO delegacion_vacaciones (id_vacacion, id_chofer, dias_totales, dias_tomados, dias_restantes, fecha_inicio, fecha_fin, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [id_vacacion, id_chofer, dias_totales, dias_tomados, dias_restantes, fecha_inicio, fecha_fin, created_at]
    );
    return result.insertId; 
}

exports.update = async (id, { id_vacacion, id_chofer, dias_totales, dias_tomados, dias_restantes, fecha_inicio, fecha_fin, created_at }) => {
    const [result] = await db.query(
        'UPDATE delegacion_vacaciones SET id_vacacion = ?, id_chofer = ?, dias_totales = ?, dias_tomados = ?, dias_restantes = ?, fecha_inicio = ?, fecha_fin = ?, created_at = ? WHERE id_vacacion = ?',
        [id_vacacion, id_chofer, dias_totales, dias_tomados, dias_restantes, fecha_inicio, fecha_fin, created_at, id]
    );
    return result.affectedRows > 0; 
}

exports.delete = async (id_vacacion) => {
    const [result] = await db.query('DELETE FROM delegacion_vacaciones WHERE id_vacacion = ?', [id_vacacion]);
    return result.affectedRows > 0;
}