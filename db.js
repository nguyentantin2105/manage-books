var low = require("lowdb");
var FileSync =  require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

// our default array of dreams
db.defaults({ books: [], users: [], transaction: [] }).write();

//console.log(db.get('transaction').value());

module.exports = db;