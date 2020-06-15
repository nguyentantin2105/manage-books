var db = require('../db');
var shortid = require('shortid');

module.exports.index = (request, response) => {
  response.render('index',{
    listBook: db.get('books').value()
  });
};

module.exports.addBook = (req,res)=>{
  res.render('add')
};

module.exports.updateBook = (req,res)=>{
  res.render('update')
};

module.exports.deleteBook = (req,res)=>{
  res.render('delete')
};

module.exports.postAddBook =  (req, res)=>{
  db.get("books").push({id: shortid.generate(), title: req.body.title, describe: req.body.describe}).write().id;
  res.redirect('/books');
};

module.exports.postUpdateBook = (req,res)=>{
  var body = req.body;
  var oldtitle = body.title;
  var newtitle = body.newtitle;
  db.get("books").find({title: oldtitle}).assign({title: newtitle}).write();
  res.redirect('/books');
};

module.exports.postDeleteBook =  (req, res)=>{
  var title = req.body.title;
  db.get("books").remove({title: title}).write();
  res.redirect('/books');
};