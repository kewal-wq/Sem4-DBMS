const express = require('express');
const mysql = require('mysql2');
const app = express();

require('dotenv').config();
const labRoutes = require('./routes/labs');


const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "dbms",
  user: "root",
  password: process.env.DATABASE_PASSWORD
});

con.connect(function(err) {
  if (err) console.log("Error in database", err);
  else{

      console.log("Connected!");
  }
});

app.get("/", (req, res) => {
    res.send("Hey Its mee");
})

// app.get("/deleteLabs", (req, res) => {
//     const sql = "DELETE FROM Lab";
//     con.query(sql, (err, rows) => {
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//           console.log("Deleted")
           
//         }
//     })
// })

app.use("/", labRoutes);



app.listen(4000, (req, res) => {
    console.log("Listning to port 4000");
})