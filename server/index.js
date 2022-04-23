const express = require('express');
const mysql = require('mysql2');
const app = express();

require('dotenv').config();
const cors = require('cors');
const labRoutes = require('./routes/labs');
const theoryRoutes = require('./routes/theories');
const teaching_assistantsRoutes = require('./routes/teaching_assistants');


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

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hey Its mee");
})

app.use("/", labRoutes);
app.use("/", theoryRoutes);
app.use("/", teaching_assistantsRoutes);



app.listen(4000, (req, res) => {
    console.log("Listning to port 4000");
})