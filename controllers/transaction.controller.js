var shortid = require('shortid');

var db = require('../db');

module.exports.index2 = (req,res)=>{
  res.render('index2', {
    listTransactions: db.get('transaction').value()
  })
};

module.exports.create =  (req,res)=>{
  var users = db.get('users').value();
  var books = db.get('books').value();
  res.render('create', { 
    users: users,
    books: books
  });
};

module.exports.postCreate = (req,res)=>{
  db.get('transaction').push({id: shortid.generate(), 
                              userid: req.body.userid, 
                              bookid: req.body.bookid
                             }).write();
  res.redirect('/transactions'); 
};