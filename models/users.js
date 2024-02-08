const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');

const pool = mysql.createPool(dbConfig);

class Users {
  static async create(name, email) {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const [result] = await pool.promise().query(sql, [name, email]);
    return result.insertId;
  }

  static async getAll() {
    const sql = 'SELECT * FROM users';
    const [rows] = await pool.promise().query(sql);
    return rows;
  }

  static async update(id, newName, newEmail) {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    const [result] = await pool.promise().query(sql, [newName, newEmail, id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const sql = 'DELETE FROM users WHERE id = ?';
    const [result] = await pool.promise().query(sql, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Users;
