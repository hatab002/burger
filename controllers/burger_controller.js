var express = require ("express");
var router = express.Router()
var burger = require ("../models/burger.js");


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
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({id: result.insertId });
    });
});

// router.put("/burgers/update", (req, res) => {
//     burger.update(req.body.burger_id,  (res) => {
//         console.log(res);
//         res.redirect('/');
//     });
// });
router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condtion", condition);

    burger.update({
        devoured: true
    }, condition, function(data){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
        // res.redirect("/")
    });
});

module.exports = router;