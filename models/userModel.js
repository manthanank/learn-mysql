const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');

class UserModel {
  static async create(name, email) {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    await connection.end();
    return result.insertId;
  }

  static async getAll() {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM users');
    await connection.end();
    return rows;
  }

  static async update(id, newName, newEmail) {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [newName, newEmail, id]);
    await connection.end();
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.query('DELETE FROM users WHERE id = ?', [id]);
    await connection.end();
    return result.affectedRows > 0;
  }
}

module.exports = UserModel;
