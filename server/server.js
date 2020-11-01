const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs"); //commonjs format
//Routes to Users
const usersRoute = require("./routes/usersRoute"); 
// const warehousesRoute = require("./routes/warehousesRoute");
// const inventoriesRoute = require("./routes/inventoriesRoute");
const cors = require("cors");
const mysql = require('mysql')


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(express.json());
app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const db = require("./app/models");


 // # User verbs: GET, PUT, POST, DELETE
 app.use("/users", usersRoute);

app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
});