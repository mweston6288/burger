// The go between for the app and database. Contains methods for editing, getting, and deleting elements in the database

const orm = require("../config/orm.js");

const burger = {
    // Get all items from the burgers database
    // Takes a callback function
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    // add one new element to the burger database
    // Takes a database column, the name of the new burger and a callback function
    add: function(col, burgerName, cb){
        orm.insertOne("burgers", col, burgerName, (res)=>{
            cb(res);
        })
    },
    // change one element from the database
    // Takes an existing burger object, the condition to change and a callback function
    update: function(object, condition, cb){
        orm.updateOne("burgers", object, condition, (res)=>{
            cb(res);
        })
    },

    delete: function(cb){
        orm.delete("burgers", (res)=>{
            cb(res);
        })
    }
}

module.exports = burger;