// Creates the connection between the server and the SQL database

const mysql = require("mysql");

// Credentials. Change password and user if necessary
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgerDB"
});

// Attempt to connect. Print an error if one occurs. Otherwise print connection ID
connection.connect((err)=>{
    if (err){
        console.log("Error connecting: "+ err.stack);
    }
    else{
        console.log("Connected as ID: " + connection.threadId);
    }
})

// export the connection
module.exports = connection;