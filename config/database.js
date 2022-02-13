const mysql = require('mysql');
const dotenv = require('dotenv').config();

const dataBase = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "blue_corner_api",
}

const connectDB = mysql.createConnection(dataBase);

connectDB.connect(function(err) {
    if(err) throw err;
    console.log("DB Connected!!")
})

// connectDB.end();

module.exports = connectDB;

