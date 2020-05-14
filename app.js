// express
// sudo npm install --save express
const express = require('express');
const app = express();

// Parser
// sudo npm install --save body-parser
const bodyParser = require('body-parser');

// mongo
// sudo npm install --save mongoose
const mongoose = require('mongoose');


// parser
app.use(bodyParser.urlencoded ( {
    extended : true
}));
app.use(bodyParser.json());

// hello world
app.get('/', function (req, res) {
    res.send('Hello World!')
  })

// Listen
app.listen(8080,()=> console.log("waiting on localhost:3001"));

// connect to mongo server
database = 'mongodb://mongo:27017/mongo-test"';
mongoose.connect(database,{useNewUrlParser: true},(err)=> {
    if (err)
        throw err;
    console.log('Connect to the database');
});

