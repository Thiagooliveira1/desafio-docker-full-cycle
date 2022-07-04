const createSql = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id));`;
const insertSql = `INSERT INTO people (name) values (?);`;
const selectSql = `SELECT * FROM people`;

module.exports = {createSql, insertSql, selectSql}