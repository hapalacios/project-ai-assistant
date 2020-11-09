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
    const SELECT_ALL_USER_QUERY = 'SELECT * FROM users;'
    connection.query(SELECT_ALL_USER_QUERY, (err, results) => {
        if(err) {
            return res.status(404).send(err);
        } else {
            return res.status(200).json({ data: results });
        }
    })
})

 app.get(`/users/:id`, (req, res) => {
    const SELECT_ALL_USER_QUERY = 'SELECT * FROM users where userid = ' + req.params.id + ";"
    
    connection.query(SELECT_ALL_USER_QUERY, (err, results) => {
        if(err) {
            return  res.status(404).send({
                          error: "No user with that id exists",
                    });
        } else {
            return res.status(200).json({ data: results });
        }
    })
 });

  app.get(`/users/username/:id`, (req, res) => {
    const SELECT_ALL_USER_QUERY = `SELECT * FROM users where username = '${req.params.id}'  `
    
    connection.query(SELECT_ALL_USER_QUERY, (err, results) => {
        if(err) {
            return  res.status(404).send({
                          error: "No user with that username exists",
                    });
        } else {
            return res.status(200).json({ data: results });
        }
    })
 });


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



 // # User verbs: GET, PUT, POST, DELETE
//  app.use("/users", usersRoute);

app.listen(8080, () => {
  console.log("Server Started on http://localhost:8080");
});