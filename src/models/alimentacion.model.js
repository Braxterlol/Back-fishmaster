const pool = require('../configs/db.config');

const createAlimentacion = async (datos) => {
    const { id_usuario_especie, cantidad } = datos;
    const [result] = await pool.query(
        'INSERT INTO alimentacion (id_usuario_especie, cantidad_alimentacion) VALUES (?, ?)',
        [id_usuario_especie, cantidad]
    );
    return result;
};

const getAllAlimentacion = async () => {
    const [rows] = await pool.query('SELECT * FROM alimentacion');
    return rows;
};

const getAlimentacionById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM alimentacion WHERE id_usuario_especie = ?', [id]);
    return rows.length > 0 ? rows[0] : null;
};

module.exports = { createAlimentacion, getAllAlimentacion, getAlimentacionById };