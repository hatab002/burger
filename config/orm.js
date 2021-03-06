var connection = require ("./connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
var orm = {
    all: (table, cb) => {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    create: (table, col, val, cb) => {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], (err, res) => {
            if (err) throw err;
            cb (res);
        })
    } ,
    // update: (table, condition, cb) => {
    //     var queryString = `UPDATE "${table}" SET devoured=true WHERE id=${condition};`;
    //     connection.query(queryString, (err, res) => {
    //         if (err) throw err;
    //         cb(res);
    //     })
    // }
    update: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
                throw err
            }
            cb(result)
        });
    }
};

module.exports = orm;