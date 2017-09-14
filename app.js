/*
 * WebApp: chatApp using Addictive cipher
 * Date Started: May 16, 2017, 05:19
*/

var express = require('express')
//var io      = require('socket.io')
var ejs     = require('ejs')
var path    = require('path')
var db      = require('./db')
var body = require('body-parser')
var session = require('express-session')
//var mysql_queries = require('mysql-queries')
var app = express()

app.set('view engine', 'ejs')
app.use(express.static( __dirname + '/css' ))
app.use(express.static( __dirname + '/images' ))
app.use(express.static( __dirname + '/javascript' ))
app.use(body.json())
app.use(body.urlencoded({ extended: true }))

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: (60 * 60 * 7 * 24) }}))
let option = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'chatapp'
}

//mysql_queries.init(option);

db
  .connect( (err) => {
    if ( err ) throw err;
      console.log("Connected Successfully !") ;
  })
  ;

app.
    get('/', ( req, res ) => {
        res.render( path.join(__dirname + '/templates/index') )
    })
    ;

app.
    listen( 9009, ( ) => {
      console.log('Listen @ http://localhost:9080')
    })
    ;

// io.on('start', (req) => {
//   req.emit
// })
