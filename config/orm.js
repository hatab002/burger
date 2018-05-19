var connection = require ("./connection.js");

var orm = {
    selectAll: (table, cb) => {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: (table, col, val, cb) => {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], (err, res) => {
            if (err) throw err;
            cb (res);
        })
    } ,
    updateOne: (table, objColVal, condition, cb) => {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVal, condition], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;