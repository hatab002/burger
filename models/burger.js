var orm = require("../config/orm.js");

let burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (col, val, cb) => {
        orm.create("burgers", col, val, (res) => {
            cb(res)
        });
    },
    update: (objColVal, condition, cb) => {
        orm.update("burgers", objColVal, condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;