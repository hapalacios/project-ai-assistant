const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//  const fs = require("fs"); //commonjs format
//Routes to Users
const usersRoute = require("./routes/usersRoute"); 
// const warehousesRoute = require("./routes/warehousesRoute");
// const inventoriesRoute = require("./routes/inventoriesRoute");
const cors = require("cors");
const mysql = require('mysql2');


// var corsOptions = {
//   origin: "http://localhost:8081"
// };
//app.use(cors(corsOptions));

app.use(express.json());

const SELECT_ALL_USER_QUERY = 'SELECT * FROM users;'

const connection = mysql.createConnection({
  //hectormac.local
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'AIASSISTANT'
})

connection.connect(err => {
    if(err) {
        console.log('error 102' + err)
        return err;
    }
})

app.use(cors());

app.get('/', (_req, res) =>{
    res.send('got to /users to see all the users in the database')
})

app.get('/users', (_req, res) => {
    connection.query(SELECT_ALL_USER_QUERY, (err, results) => {
        if(err) {
            console.log('error 101')
            return res.send(err)
        } else {
            console.log(results)
            return res.json({
                data: results
            })
        }
    })
})



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



 // # User verbs: GET, PUT, POST, DELETE
//  app.use("/users", usersRoute);

app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
});