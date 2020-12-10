var shortid = require("shortid");

var db = require("../db");

module.exports.index2 = (req, res) => {
  res.render("index2", {
    listTransactions: db.get("transaction").value()
  });
};

module.exports.create = (req, res) => {
  var users = db.get("users").value();
  var books = db.get("books").value();
  res.render("create", {
    users: users,
    books: books
  });
};

module.exports.postCreate = (req, res) => {
  db
    .get("transaction")
    .push({
      id: shortid.generate(),
      userid: req.body.userid,
      bookid: req.body.bookid
    })
    .write().id;
  res.redirect("/transactions");
};

// module.exports.complete = (req, res)=>{
//   var id = req.params.id;
//   db.get('transaction').remove({id: id}).write();
//   res.render('index2',{
//     listTransactions: db.get('transaction').value()
//   });
// };

module.exports.complete = (req, res) => {
  var id = req.params.id;
  var error;
  var lst = db.get("transaction").value();
  var lstID = [];
  for (var i of lst) {
    lstID.push(i.id);
  }
  console.log(lstID);
  if (lstID.indexOf(id) === -1) {
    error = "This ID is not existed";
    return res.render("index2", {
      errors: error,
      listTransactions: lst
    });
  }
  res.render("index2", {
    listTransactions: lst
  });
};

module.exports.postComplete = (req, res) => {
  db.get('transaction').remove({id: req.params.id}).write();
  res.redirect('/transactions')
};
