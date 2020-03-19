// Handles all routing requests. Call on burger.js to manage communication with the database

const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Get database info in order to create webpage
router.get("/",function(req,res){
    burger.all((data)=>{
        const burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
});

// add to the database and then update the page
router.post("/api/burgers/", (req, res)=>{
    burger.add(["burger_name"], [req.body.burger_name], function(result){
        res.json({ id: result.insertId });
    })
});

// Update a database
router.put("/api/burgers/:id",function(req,res){
    const condition = "id = " + req.params.id;    

    burger.update({devoured: req.body.devoured}, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          };
    })
});
// Delete the content of the database
router.delete("/api/burgers/",function(req,res){
    burger.delete(function(result){
        res.status(200).end();
    })
})

module.exports = router;