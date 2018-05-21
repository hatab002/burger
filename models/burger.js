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
    update: (id, cb) => {
        orm.update("burgers", id, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;