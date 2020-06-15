var shortid = require('shortid');

var db = require('../db');

module.exports.index1 = (req, res) =>{
  res.render('index1',{
    listUser: db.get('users').value()
  });
};

module.exports.addUser = (req,res)=>{
  res.render('addUser');
};

module.exports.updateUser = (req,res)=>{
  res.render('updateUser');
};

module.exports.deleteUser = (req,res)=>{
  res.render('deleteUser');
};

module.exports.postAddUser =  (req,res)=>{
  db.get("users").push({id: shortid.generate(), name: req.body.name, cmnd: req.body.CMND}).write().id;
  res.redirect('/users');
};

module.exports.postUpdateUser =  (req,res)=>{
  var body = req.body;
  var oldname = body.name;
  var newname = body.newname;
  db.get("users").find({name:oldname}).assign({name:newname}).write();
  res.redirect('/users');
};

module.exports.postDeleteUser =  (req, res)=>{
  var name = req.body.name;
  db.get("users").remove({name}).write();
  res.redirect('/users');
};