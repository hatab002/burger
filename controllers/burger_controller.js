var express = require ("express");
var burger = require ("../models/burger.js");

let router = express.Router()

router.get("/", (req, res) => {
burger.all((data) => {
    var burgerObject = {
        burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
});
});

router.post("/api/burgers", (req, res) => {
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (res) => {
        res.json({id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    
    burger.update(
        {
        devoured: req.body.devoured
    },
    condition,
    (res) => {
        if (res.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
);
});

module.exports = router;