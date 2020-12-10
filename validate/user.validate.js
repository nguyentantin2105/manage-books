module.exports.postAddUser = function(req, res, next){
  var name= req.body.name;
  var error;
  if (name.length>30){
    error = 'Name is less than 30 characters';
    return res.render('addUser', {
      errors: error
    });
  }
  next();
}