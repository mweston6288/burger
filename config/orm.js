// Creates the calls to the SQL database

const connection = require ("../config/connection.js");

// Convert an object string into a string format used in sql
// example {burger_name: cheeseburger} to burger_name = "cheeseburger"
function sqlForm(object){

    const keys = Object.keys(object);
    return keys[0] + "= '" + object[keys[0]] + "'";
}

const orm = {
    // Get all items from the database
    selectAll:function(input, cb){
        const sqlString = "SELECT * FROM " + input + ";";
        connection.query(sqlString,(err,data)=>{
            if (err) {
                throw err;
            }

            cb(data);
        })
    },
    // add one item to the database
    insertOne:function(table, cols, val, cb){
        const sqlString = "INSERT INTO " + table + "(" + cols.toString() + ") VALUES(?);"
        connection.query(sqlString,val, (err,result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    // edit one item from the database
    updateOne:function(table, cols, condition, cb){
        const sqlString = "UPDATE " + table + "SET " + sqlForm(cols) + " WHERE " + condition + ";";

        connection.query(sqlString, (err,response)=>{
            if (err) throw err;
            cb(response);
        })

    }
}

module.exports = orm;