var orm = require("../config/orm.js");

let burger = {
    all: (cb) => {
        orm.selectAll("burgers", (data) => {
            cb(data);
        });
    },
    insert: (val, cb) => {
        orm.insertOne("burgers", ["burger_name", "devoured"], val, (res) => {
            cb(res)
        });
    },
    update: (objColVal, condition, cb) => {
        orm.updateOne("burgers", objColVal, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;