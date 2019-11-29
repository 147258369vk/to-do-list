require('./backend/models/db')
require('./backend/controllers/user-controller')
require('./backend/controllers/to-do-list-controller')
var express = require('express')
var bodyparser = require('body-parser')
var router = require('./backend/routers/my-router')
var passport = require('passport')
var cors = require('cors')

var app = express()

app.use(cors())

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(function (req, res, next) {
    /*var err = new Error('Not Found');
     err.status = 404;
     next(err);*/
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    // Pass to next layer of middleware
    next();
  });

  app.use((err, req, res, next)=>{
    if(err.name=='ValidationError'){
      var valErrors = [];
      Object.keys(err.errors).forEach((key => valErrors.push(err.errors[key].message)))
      res.status(422).send(valErrors);
    }
  })

app.use(passport.initialize())

app.use('/', router)

var port = (process.env.PORT || 3000)

app.listen(port)
