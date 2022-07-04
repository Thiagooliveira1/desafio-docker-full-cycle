const mysql = require('mysql')

const dbConfig = require('./db.config');

const { selectSql, createSql, insertSql } = require('./queries');

module.exports = {
  selectPeople: () => {
    const connection = mysql.createConnection(dbConfig);

    const promise = new Promise((resolve, reject) => {
      connection.query(selectSql, function (error, results) {
        if (error) reject(error);
        resolve(results)
      })
    })

    connection.end();

    return promise;
  },
  createTable: () => {
    const connection = mysql.createConnection(dbConfig);
    connection.query(createSql)
    connection.end()
  },
  insertPeople: () => {
    const name = "Name " + Math.floor(Math.random() * 10000);
    
    const connection = mysql.createConnection(dbConfig);

    const promise = new Promise((resolve, reject) => {
      connection.query(insertSql, name, function (error, results) {
        if (error) reject(error);
        resolve(results)
      })
    })
    
    connection.end();
    
    return promise;
  }
}