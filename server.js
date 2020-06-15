// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var bodyParser = require('body-parser');

var userRoute = require('./router/user.route');
var bookRoute = require('./router/book.route');
var transactionRoute = require('./router/transaction.route');

var db = require('./db');

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', userRoute);
app.use('/books', bookRoute);
app.use('/transactions', transactionRoute);

//console.log(db.get('books').value());
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
